import Image from "next/image";
import router from "next/router";
import loadingImage from "../../../public/images/loadingImage.gif";
import { ReactNode } from "react";
import { useAuth } from "@/data/hook/useAuth";

interface AuthForceProps {
  children: ReactNode
}

export function AuthForce({ children }: AuthForceProps) {
  const { loading, user } = useAuth();

  function renderContent() {
    return <>{children}</>;
  }

  function renderLoading() {
    return (
      <div
        className={`
          flex justify-center items-center h-screen bg-light dark:bg-dark
        `}
      >
        <Image src={loadingImage} alt="loading" priority/>
      </div>
    );
  }

  function validation() {
    if (!loading && user?.email) {
      return renderContent();
    } else if (loading) {
      return renderLoading();
    } else {
      router.push("/authentication");
      return null;
    }
  }

  return <>{validation()}</>;
}
