import Image from "next/image";
import router from "next/router";
import loadingImage from "../../../public/images/loadingImage.gif";
import { useAuth } from "@/data/hook/useAuth";

export function AuthForce({ children }: any) {
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
        <Image src={loadingImage} alt="loading" />
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
