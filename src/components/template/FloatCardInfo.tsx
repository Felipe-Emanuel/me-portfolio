import { useState } from "react";

interface FloatCardInfoProps {
  title?: string;
  text?: string;
  techs?: any[] ;
}

export function FloatCardInfo({ text, title, techs }: FloatCardInfoProps) {
  const [isActive, setIsActive] = useState(true);

  function normalizeTechs(data: any[] | undefined) {
    return data?.map((tech: string) => {
      return <li key={tech}>{tech}</li>;
    });
  }

  function floatCardInfoButton(icon: string) {
    return (
      <button className="hidden text-black rounded-l-3xl bg-gray-300 w-10 h-10 absolute top-44 right-96 2xl:flex justify-start px-2 items-center">
        {icon}
      </button>
    );
  }

  return (
    <div onClick={() => setIsActive(isActive => !isActive)} className={`z-50 transition-all duration-1000 absolute 
    top-16 -right-44 ${isActive ? `translate-x-52` : `-translate-x-0`}`}>
      <div className="hidden overflow-hidden 2xl:flex justify-center items-start px-8 py-6 flex-col text-black w-96 h-96  bg-gray-300 rounded-l-2xl">
        <h2 className="font-black text-3xl">{title}</h2>
        <ul className="py-6 flex gap-1 flex-wrap w-52">{normalizeTechs(techs)}</ul>
        <p className="text-xs w-36 text-left">{text}</p>
      </div>
      {floatCardInfoButton(isActive ? "<" : ">")}
    </div>
  );
}
