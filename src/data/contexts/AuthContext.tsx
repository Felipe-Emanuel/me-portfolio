import router from "next/router";
import Cookies from "js-cookie";
import firebase from "../../firebase/config";
import { User } from "@/model/User";
import { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  register?: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email!,
    name: firebaseUser.displayName!,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    imageUrl: firebaseUser.photoURL!,
  };
}

function cookie(logged: boolean) {
  if (logged) {
    Cookies.set("admin-template-auth", logged.toString(), {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null!);

  async function sectionConfig(userFirebase: any) {
    if (userFirebase?.email) {
      const user = await normalizedUser(userFirebase);
      setUser(user);
      cookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null!);
      cookie(false);
      setLoading(false);
      return false;
    }
  }

  async function register(email: string, password: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth().createUserWithEmailAndPassword(email, password)

      await sectionConfig(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth().signInWithEmailAndPassword(email, password)

        await sectionConfig(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

        await sectionConfig(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await sectionConfig(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(sectionConfig);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        loginGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
