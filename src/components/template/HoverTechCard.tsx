import { ReactNode } from "react";

interface HoverTechCardProps {
  techs: ReactNode[];
}

export function HoverTechCard({ techs }: HoverTechCardProps) {
  function normalizeTechs(data: any[]) {
    return data.map((tech: string, index: number) => {
      return (
        <li
          key={tech}
          className={`font-sans
            absolue z-10 flex justify-center items-center text-xs
            bg-white rounded m-1 py-2 px-3 after:contents transform
            hover:bg-black hover:text-white cursor-default
            shadow shadow-purple-500 hover:shadow-white 
            ${index % 2 === 0 ? "animate-appearDown" : "animate-appearTop"}
          `}
        >
          {tech}
        </li>
      );
    });
  }
  return (
    <ul
      className="
       flex text-purple-500 transition-all font-black flex-wrap justify-center"
    >
      {normalizeTechs(techs)}
    </ul>
  );
}
