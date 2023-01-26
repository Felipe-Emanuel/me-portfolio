import { HoverTechCard } from "./HoverTechCard";
import { Title } from "./Title";
import { useState } from "react";
import { Stamp } from "./Stamp";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

interface ProjectCardAuthProps {
  gitLink: string;
  title: string;
  language: string;
  homepage: string;
  img: string;
  description: string;
  inverse?: boolean;
  techs: any;
  state: "Codando" | "Concluído" | "anulado";
}

export function ProjectCardAuth({
  techs,
  gitLink,
  title,
  language,
  homepage,
  img,
  description,
  inverse,
  state,
}: ProjectCardAuthProps) {
  const [isVisible, setisVisible] = useState(false);

  const normalize = title.toUpperCase().replaceAll("-", " ");

  function renderImageLink() {
    return (
      <div className="flex flex-col mt-7 xl:m-auto xl:flex-row overflow-hidden">
        <div className="relative flex w-72 lg:w-80 h-full z-10 rounded-lg ">
          <div
            onMouseEnter={() => setisVisible((isVisible) => !isVisible)}
            onMouseLeave={() => setisVisible((isVisible) => !isVisible)}
            className="relative w-full h-fit flex items-center justify-center"
          >
            {isVisible && (
              <span className="absolute">
                <HoverTechCard techs={techs} />
              </span>
            )}
            <a
              href={homepage}
              target="_blank"
              className="cursor-pointer object-cover overflow-hidden rounded-lg"
            >
              <img
                className={`
                rounded-lg
                transition-all opacity-50 
                ${isVisible ? "scale-105 rotate-2 opacity-100" : ""}
                `}
                src={img}
                alt="Imagem da Tela de Autenticação"
              />
              <Stamp
                text={state}
                className={`${
                  isVisible ? "scale-105 rotate-2 opacity-100" : ""
                }`}
              />
            </a>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center xl:hidden pt-8 m-auto">
          <a href={gitLink} target="_blank">
            <AwesomeButtonSocial type="github">GitHub</AwesomeButtonSocial>
          </a>
          <div>
            <Title
              title={normalize}
              className="text-gray-100 font-black text-3xl truncate"
            />
            <span className="font-thin">{language}</span>
          </div>
        </div>
      </div>
    );
  }

  function renderInfo() {
    return (
      <div
        className=" overflow-hidden
          hidden items-center text-center justify-between
          w-80 h-80 p-10 xl:flex flex-col 
        "
      >
        <div>
          <Title
            title={normalize}
            className="text-gray-100 font-black text-3xl truncate"
          />
          <span className="font-thin">{language}</span>
        </div>
        <span className="text-sm font-light py-2">{description}</span>
        <a href={gitLink} target="_blank">
          <AwesomeButtonSocial type="github">GitHub</AwesomeButtonSocial>
        </a>
      </div>
    );
  }

  return (
    <div className="text-gray-100 relative overflow-hidden flex justify-center items-center animate-appearX">
      <div className="flex gap-4">
        {inverse ? (
          <>
            {renderImageLink()}
            {renderInfo()}
          </>
        ) : (
          <>
            {renderInfo()}
            {renderImageLink()}
          </>
        )}
      </div>
    </div>
  );
}
