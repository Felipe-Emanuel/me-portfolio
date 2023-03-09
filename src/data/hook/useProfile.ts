import firebase from "../../../src/firebase/config";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useAuth } from "./useAuth";

interface UserProfile {
  userName: string;
  name: string;
  value: string;
  message: string;
  isModal: boolean;
  capitalizeName: () => string;
  setValue: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  validateInput: (value: string) => boolean;
  submit: (value: string) => void;
}

export function useProfile(): UserProfile {
  const { user } = useAuth();
  const [isModal, setIsModal] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const firstLetter = userName?.split(" ")[0].charAt(0).toUpperCase();
  const rest = userName?.replace("-", " ").split(" ")[0].slice(1);
  const name = firstLetter! + rest!;

  function capitalizeName() {
    return userName
      .replace(/\b\w/g, (letter: string) => {
        return letter.toUpperCase();
      })
      .trim();
  }

  function showMessage(msg: string, secoundsTime = 3) {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, secoundsTime * 1000);
  }

  function validateInput(value: string) {
    const regex = /^[a-zA-Z ]*$/;
    return regex.test(value);
  }

  const submit = (value: string) => {
    const User = {
      name: value,
      id: user?.uid,
    };
    firebase
      .firestore()
      .collection("user")
      .where("User.id", "==", user?.uid ?? "")
      .get()
      .then((doc) => {
        const userId = doc.docs.map((document) => document.id);
        doc.size === 0
          ? firebase.firestore().collection("user").add({ User })
          : firebase
              .firestore()
              .collection("user")
              .doc(String(userId))
              .update({ User });
      })
      .then(() => {
        setIsModal((isModal) => !isModal);
        setValue("");
        showMessage("Seu nome será alterado em alguns instantes...");
      })
      .catch((err) => console.log("erro: ", err));
  };

  useEffect(() => {
    async function getUser() {
      const snapshot = await firebase
        .firestore()
        .collection("user")
        .where("User.id", "==", user?.uid ?? "")
        .get();

      return snapshot.docs.map((doc) => doc.data());
    }

    async function getDoc() {
      const resp = await getUser();
      if (resp.length > 0) {
        setUserName(resp[0].User.name);
      }
    }

    getDoc();
    userName
  }, [user, userName, isModal]);

  return {
    userName,
    name,
    value,
    isModal,
    message,
    capitalizeName,
    setValue,
    setIsModal,
    validateInput,
    submit,
  };
}
