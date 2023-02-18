import { useEffect, useState } from "react";
import { AuthImages } from "./AuthImages";
import { Title } from "@utils/Title";
import { useData } from "@/data/hook/useData";

type DataGet = {
  id: string, image: string
}

export function NewsAtAuth() {
  const { dataGet, getData } = useData();
  
  useEffect(() => {
    getData("images")
  }, []);

  function renderImages() {
    return (
      <ul
        className="
        flex absolute scale-150 w-screen flex-wrap bg-black/75
        justify-center items-center rotate-45 pointer-events-none -skew-y-12 skew-x-6"
      >
        {dataGet?.map((data: DataGet) => {
          return <AuthImages key={data.id} img={data.image} />;
        })}
      </ul>
    );
  }

  function renderTitle() {
    return (
      <div className="text-gray-200 px-10 z-40 text-left absolute left-0 top-[50%]">
        <Title
          className="text-6xl font-sans lg:text-7xl xl:text-8xl 2xl:text-9xl py-10"
          as="h2"
          title="Felipe.Emanuel"
        />
        <h3 className="text-2xl text-light font-SecondarySans lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Desenvolvedor Frontend
        </h3>
      </div>
    )
  }

  return (
    <div
      className="
        overflow-hidden relative h-screen w-full flex-wrap 
        hidden md:flex justify-center items-center text-center"
    >
      {renderTitle()}
      {renderImages()}
    </div>
  );
}
