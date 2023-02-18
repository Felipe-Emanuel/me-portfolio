import { useState } from "react";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { GoogleIcon, WarningIcon } from "@/components/icons";
import { useAuth } from "@hook/useAuth";
import { AuthInput } from "@auth/AuthInput";
import { NewsAtAuth } from "@layout/NewsAtAuth";
import { SocialMedia } from "@utils/SocialMedia";
import { Title } from "@utils/Title";
import Head from "next/head";

export default function authentication() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, login, loginGoogle } = useAuth();

  function showError(msg: string, secoundsTime = 5) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, secoundsTime * 1000);
  }

  async function submit() {
    try {
      if (mode === "login") {
        //@ts-ignore
        await login(email, password);
      } else {
        //@ts-ignore
        await register(email, password);
      }
    } catch (e: any) {
      showError(e.message ?? "Ocorreu um erro inesperado!");
    }
  }

  function errorMsg() {
    return (
      <>
        {error && (
          <div
            className={`
                bg-red-400 border-red-700
                py-3 px-5 my-2 flex items-center
                rounded-lg border
            `}
          >
            <WarningIcon />
            <span className="ml-4">{error}</span>
          </div>
        )}
      </>
    );
  }

  function renderLoginOrRegister(){
    return(
      <>
        {mode === "login" ? (
          <p className="mt-8 text-center">
            {" "}
            Novo por aqui?{" "}
            <a
              onClick={() => setMode("register")}
              className={`transition-all text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              Crie sua conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8 text-center">
            {" "}
            Já faz parte da nossa comunidade?{" "}
            <a
              onClick={() => setMode("login")}
              className={`transition-all text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </>
    )
  }

  return (
    <div className="flex text-white bg-neutral-900 w-full h-screen relative items-center justify-center overflow-hidden">
      <Head>
        <title>Autenticação | Portfólio</title>
      </Head>
      <div className="md:hidden absolute rotate-45 top-[7vh] -right-[30vw] bg-black overflow-hidden">
        <a href="https://github.com/Felipe-Emanuel" target="_blank">
          <AwesomeButtonSocial type="github" className="w-[100vw]">
            Siga-me
          </AwesomeButtonSocial>
        </a>
      </div>
      <SocialMedia />
      <NewsAtAuth />
      <div className="m-5 lg:px-5 w-full md:w-1/2 ">
        <Title
          className="text-xl text-white sm:text-3xl font-bold mb-5 text-center"
          title={
            mode === "login"
              ? "Entre com a sua conta"
              : "Cadastre-se na plataforma"
          }
        />
        {errorMsg()}
        <AuthInput
          name="email"
          required
          type="email"
          label="E-mail"
          value={email}
          changeValue={setEmail}
        />
        <AuthInput
          name="password"
          required
          type="password"
          label="Senha"
          value={password}
          changeValue={setPassword}
        />

        <button
          onClick={submit}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400 transition-all
          rounded-lg px-4 py-3 mt-6
          `}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-light w-full" />

        <button
          onClick={loginGoogle}
          className={`
            w-full bg-red-500 hover:bg-red-400 transition-all
            rounded-lg px-4 py-3 flex
          `}
        >
          <span className="m-auto flex gap-4">
            <GoogleIcon /> Google
          </span>
        </button>
          {renderLoginOrRegister()}
      </div>
    </div>
  );
}
