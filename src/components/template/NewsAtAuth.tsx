import { useEffect, useState } from "react";
import { ProjectCardAuth } from "./ProjectCardAuth";
import api from "@/data/services/api";


export function NewsAtAuth() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    api.get("/api/images").then(({ data }) => {
      setData(data.images);
    });
  }, []);

  console.log(data)

  return (
    <div
      className="
        overflow-hidden relative h-screen w-full flex-wrap 
        hidden md:flex justify-center items-center text-center"
    >
      <div className="px-10 z-40 text-left absolute left-0 top-[50%]">
        <h2 className="text-6xl font-sans lg:text-7xl xl:text-8xl 2xl:text-9xl py-10">Felipe.Emanuel</h2>
        <p className="text-2xl font-SecondarySans lg:text-3xl xl:text-4xl 2xl:text-5xl">Desenvolvedor Frontend</p>
      </div>
      <div
        className="
        flex absolute scale-150 w-screen flex-wrap bg-black/75
        justify-center items-center rotate-45 pointer-events-none -skew-y-12 skew-x-6"
      >
        {data?.map((data) => {
          return (
            <ProjectCardAuth
              key={data.id}
              img={data.image}
            />
          );
        })}
      </div>
    </div>
  );
}
