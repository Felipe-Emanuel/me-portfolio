import { LeftArrowIcon } from "@icons/index";
import { useState } from "react";

interface RegisterFloatButtonProps {
  text: string;
  isGreen?: boolean;
}

export function RegisterFloatButton({ text, isGreen }: RegisterFloatButtonProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHover((isHover) => !isHover)}
      onMouseLeave={() => setIsHover((isHover) => !isHover)}
      className={` transition-all
            relative z-20 font-black gap-4 flex top-5 justify-center items-center text-xs
            rounded m-1 py-2 px-3 transform hover:text-white
            shadow shadow-purple-500 hover:shadow-white 
        `}
    >
      {text}{" "}
      <span
        className={
          isHover || isGreen 
            ? "text-purple-500 transition-all translate-x-1 animate-pupLeft"
            : "transition-all translate-x-0"
        }
      >
        <LeftArrowIcon />
      </span>
    </button>
  );
}
