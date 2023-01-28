import styles from "@styles/ProjectCard.module.css";
import "react-awesome-button/dist/styles.css";
import { AwesomeButtonSocial } from "react-awesome-button";
import { HoverTechCard } from "./HoverTechCard";
import { Title } from "./Title";
import { useState } from "react";
import { Stamp } from "./Stamp";

interface ProjectCardAuthProps {
  gitLink: string;
  title: string;
  language: string;
  homepage: string;
  img: string;
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
  inverse,
  state,
}: ProjectCardAuthProps) {
  const [isVisible, setisVisible] = useState(false);

  const isVisibileAndIsInverseTitle = `${
    isVisible
      ? `2xl:translate-y-1 translate-y-5 lg:translate-x-2 ${
          inverse ? `2xl:-translate-x-2 ` : `lg:translate-y-2`
        }`
      : `-translate-y-36 ${
          inverse
            ? `translate-x-28 lg:-translate-x-44 lg:-translate-y-32
              xl:-translate-x-60 2xl:-translate-x-72 2xl:-translate-y-48`
            : `-translate-x-28 lg:translate-x-44
              xl:translate-x-60 2xl:translate-x-72 2xl:-translate-y-56`
        }
       `
  }`;

  const isVisibileAndIsInverseAwsomeButton = `${
    inverse ? `top-64` : `top-72`
  } animate-appearX
  ${
    isVisible
      ? `translate-y-5 lg:-translate-y-6 ${
          inverse
            ? `2xl:-translate-x-2 2xl:translate-y-7`
            : `2xl:translate-x-2 2xl:translate-y-16`
        }`
      : ` -translate-y-32 ${
          inverse
            ? `translate-x-28 lg:-translate-x-44 xl:-translate-x-60
              2xl:-translate-x-72 2xl:-translate-y-32`
            : `-translate-x-28 lg:translate-x-44 xl:translate-x-60
              2xl:translate-x-72 2xl:-translate-y-32`
        }
      lg:-translate-y-36`
  }`;

  const normalize = title.toUpperCase().replaceAll("-", " ");

  function renderImageLink() {
    return (
      <div className="transition-all object-contain duration-1000">
        <div
          className={
            !inverse ? `flex relative ${styles.card}` : `${styles.card_reverse}`
          }
        >
          <div
            onMouseEnter={() => setisVisible((isVisible) => !isVisible)}
            onMouseLeave={() => setisVisible((isVisible) => !isVisible)}
            className="
              animate-appearCardTop w-full z-10 
              flex items-center justify-center translate-y-7
            "
          >
            {isVisible && (
              <span className="absolute">
                <HoverTechCard techs={techs} />
              </span>
            )}
            <a
              href={homepage}
              target="_blank"
              className="
                cursor-pointer w-[350px] 2xl:w-[500px]
                relative overflow-hidden rounded-lg
              "
            >
              <img
                className={`
                  rounded-lg
                  transition-all opacity-75 
                  ${isVisible ? "scale-105 rotate-2 opacity-100" : ""}
                `}
                src={img}
                alt="Imagem da Tela de Autenticação"
              />
              <Stamp text={state} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`transition-transform duration-1000
              relative scale-95 pointer-events-none ${isVisibileAndIsInverseTitle}
          `}
          >
            <Title
              title={normalize}
              className={`font-sans
                font-black text-2xl animate-appearCardLeft
                lg:animate-appearCardRight`}
            />
            <p
              className={
                isVisible ? `hidden` : `font-thin
                  ${inverse ? `animate-appearCardLeft` : `animate-appearCardRight`}
                `
              }
            >
              {language}
            </p>
          </div>
          <div className="flex flex-col items-center text-center py-8">
            <a
              href={gitLink}
              target="_blank"
              className={`z-50 transition-all duration-1000 absolute
                ${isVisibileAndIsInverseAwsomeButton}`}
            >
              <AwesomeButtonSocial type="github">GitHub</AwesomeButtonSocial>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`absolute z-20 transition-all duration-1000
        top-[10vh] lg:top-[2vh] ${
          inverse ? `xl:translate-x-[7vw]` : `xl:-translate-x-[7vw]`
        }`}
    >
      {renderImageLink()}
    </div>
  );
}
