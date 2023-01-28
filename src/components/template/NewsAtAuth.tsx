import Image from "next/image";
import loadingImage from "../../../public/images/loadingImage.gif";
import { useEffect, useState } from "react";
import { ProjectCardAuth } from "./ProjectCardAuth";
import api from "@/data/services/api";
import { FloatCardInfo } from "./FloatCardInfo";
import { Logo } from "./Logo";

export function NewsAtAuth() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/Felipe-Emanuel/repos").then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div
      className="overflow-hidden relative bg-AuthLogin h-screen w-full  bg-cover bg-no-repeat opacity-75
        hidden md:flex justify-center md:flex-col lg:w-2/3 items-center text-center"
    >
      <h2 className="absolute top-4 font-black text-3xl text-gray-100 animate-appearY">
        Últimos Projetos
      </h2>

      <FloatCardInfo
        title={data[0]?.name}
        techs={data[0]?.topics}
        description={data[0]?.description}
      />

      <FloatCardInfo
        inverse
        title={data[15]?.name}
        techs={data[15]?.topics}
        description={data[15]?.description}
      />

      <div className="w-full flex justify-center items-center">
        {data.length > 0 ? (
          <ProjectCardAuth
            state="Codando"
            img="/images/admin-template.png"
            techs={data[0].topics}
            homepage={data[0].homepage}
            language={data[0].language}
            gitLink={data[0].clone_url}
            title={data[0].name}
          />
        ) : (
          <Image
            src={loadingImage}
            alt="loading"
            className="relative bottom-[50%]"
          />
        )}
      </div>

      <hr className="w-[50vw] border-gray-300 relative top-7" />

      <div className="relative bottom-4 z-0 w-full flex justify-center items-center">
        {data.length > 0 ? (
          <ProjectCardAuth
            state="Concluído"
            img="/images/Quiz.png"
            inverse
            techs={data[15].topics}
            homepage={data[15].homepage}
            language={data[15].language}
            gitLink={data[15].clone_url}
            title={data[15].name}
          />
        ) : (
          <Image
            src={loadingImage}
            alt="loading"
            className="relative top-[50%]"
          />
        )}
      </div>
    </div>
  );
}
