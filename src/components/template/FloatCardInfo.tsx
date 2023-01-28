import { ReactNode, useState } from "react";
import { LeftArrowIcon } from "../icons";

interface FloatCardInfoProps {
  title?: string;
  description?: string;
  techs?: ReactNode[];
  inverse?: boolean;
}

export function FloatCardInfo({
  description,
  title,
  techs,
  inverse,
}: FloatCardInfoProps) {
  const [isActive, setIsActive] = useState(true);
  const normalize = title?.toUpperCase().replaceAll("-", " ")

  function normalizeTechs(data: any[]) {
    return data?.length > 0 ? (
      data?.map((tech: string) => <li className="first-letter:uppercase" key={tech}>{tech}</li>)
    ) : (
      <p>carregando dados</p>
    );
  }

  function floatCardInfoButton(icon: any) {
    return (
      <button
        className={`hidden text-black rounded-l-3xl
        w-10 h-10 absolute 2xl:flex 
         px-2 items-center bg-purple-500
         ${
           inverse
             ? `bottom-44 left-[23rem] rotate-180`
             : `top-44 right-[23rem]`
         }`}
      >
        <span
          className={`transition-all duration-1000 ease-in-out text-gray-300
        ${isActive ? "rotate-180" : "rotate-0"}`}
        >
          {icon}
        </span>
      </button>
    );
  }

  return (
    <div
      onClick={() => setIsActive((isActive) => !isActive)}
      className={`
        z-50 transition-all duration-1000 absolute
        ${isActive ? inverse ? `-translate-x-52` : `translate-x-52` : `-translate-x-0`}
        ${inverse ? `bottom-1 -left-[11rem]` : `top-16 -right-44`}
        
        `}
    >
      <div
        className={`
            hidden overflow-hidden 2xl:flex justify-center 
            ${inverse ? "rotate-180 flex-col-reverse" : "flex-col"}
            px-8 py-6 text-gray-300 w-96 h-96
        bg-purple-500 rounded-l-2xl
        `}
      >
        <h2
          className={`
            font-black text-3xl flex w-52  ${
              inverse ? "rotate-180 justify-end text-right" : "text-left justify-start"
            }
        `}
        >
          {normalize}
        </h2>
        <ul
          className={`font-light flex ${inverse ? "rotate-180 justify-end" : ""}
            py-6 flex gap-1 flex-wrap w-44 ${
              inverse ? "items-end" : "items-start"
            }
        `}
        >
          {normalizeTechs(techs!)}
        </ul>
        <p className={`font-medium text-xs w-36 text-left ${inverse ? "rotate-180 text-right" : ""}`}>
          {description}
        </p>
      </div>
      {floatCardInfoButton(<LeftArrowIcon />)}
    </div>
  );
}
