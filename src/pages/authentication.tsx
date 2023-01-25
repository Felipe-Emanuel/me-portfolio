import { GoogleIcon, WarningIcon } from "@/components/icons";
import { useAuth } from "@/data/hook/useAuth";
import { AuthInput } from "@auth/AuthInput";
import { useState } from "react";

export default function authentication() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, login, loginGoogle } = useAuth()

  function showError(msg: string, secoundsTime = 5) {
    setError(msg)
    setTimeout(() => {setError('') }, secoundsTime * 1000)
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
      showError(e.message ?? 'Ocorreu um erro inesperado!')
    }
    
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          className="h-screen w-full object-cover"
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl sm:text-3xl font-bold mb-5 text-center">
          {mode === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {error && (
          <div
            className={`
                bg-red-400 text-white border-red-700
                py-3 px-5 my-2 flex items-center
                rounded-lg border
            `}
          >
            <WarningIcon />
            <span className="ml-4">{error}</span>
          </div>
        )}

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
          label="Password"
          value={password}
          changeValue={setPassword}
        />

        <button
          onClick={submit}
          className={`
        w-full bg-indigo-500 hover:bg-indigo-400 transition-all
        text-white rounded-lg px-4 py-3 mt-6
      `}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={loginGoogle}
          className={`
        w-full bg-red-500 hover:bg-red-400 transition-all
        text-white rounded-lg px-4 py-3 flex
      `}
        >
          <span className="m-auto flex gap-4">
            <GoogleIcon /> Google
          </span>
        </button>

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
      </div>
    </div>
  );
}
