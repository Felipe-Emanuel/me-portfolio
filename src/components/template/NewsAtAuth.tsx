import Image from "next/image";
import loadingImage from "../../../public/images/loadingImage.gif";
import { useEffect, useState } from "react";
import { ProjectCardAuth } from "./ProjectCardAuth";
import api from "@/data/services/api";

export function NewsAtAuth() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/Felipe-Emanuel/repos").then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div
      className="bg-black relative overflow-hidden
        hidden md:block md:w-1/2 lg:w-2/3"
    >
      <div className=" flex justify-center ">
        <h2 className="absolute top-4 font-black text-3xl text-gray-100 animate-appearY">
          Últimos Projetos
        </h2>
      </div>

      <div
        className="
        absolute w-full h-full flex "
      >
        <div className="m-auto w-[85%] h-[85%]">
          <div className="w-full h-[50%]">
            <div
              className=" animate-appearX
                w-full h-0.5 bg-gradient-to-r relative top-0
              from-red-500 via-yellow-500 to-green-500"
            >
              {data.length > 0 ? (
                <ProjectCardAuth
                  state="Codando"
                  img="/images/admin-template.png"
                  inverse
                  techs={data[0].topics}
                  homepage={data[0].homepage}
                  language={data[0].language}
                  gitLink={data[0].clone_url}
                  title={data[0].name}
                  description={data[0].description}
                />
              ) : (
                <Image
                  src={loadingImage}
                  alt="loading"
                  className="flex m-auto relative top-16"
                />
              )}
            </div>

            <div
              className=" animate-appearY
                h-full w-0.5 bg-gradient-to-b
              from-red-500 via-yellow-500 to-green-500"
            />
            <div
              className=" animate-appearX
                w-full h-0.5 bg-gradient-to-l relative -top-0.5
              from-red-500 via-yellow-500 to-green-500"
            />
          </div>
          <div className="relative w-full h-[50%]">
            <div
              className="absolute right-0 animate-appearY
                h-full w-0.5 bg-gradient-to-b
              from-red-500 via-yellow-500 to-green-500"
            />
            <div className="w-full">
              {data.length > 0 ? (
                <ProjectCardAuth
                  techs={data[15].topics}
                  state="Concluído"
                  img="./images/Quiz.png"
                  homepage={data[15].homepage}
                  language={data[15].language}
                  gitLink={data[15].clone_url}
                  title={data[15].name}
                  description={data[15].description}
                />
              ) : (
                <Image
                  src={loadingImage}
                  alt="loading"
                  className="flex m-auto relative top-16"
                />
              )}
            </div>
            <div
              className=" animate-appearX
                w-full h-0.5 bg-gradient-to-r absolute bottom-0
              from-red-500 via-yellow-500 to-green-500"
            />
          </div>
        </div>
      </div>
      <img
        className="h-screen w-full object-cover opacity-50"
        src="./images/aura1.avif"
        alt="Imagem da Tela de Autenticação"
      />
    </div>
  );
}
