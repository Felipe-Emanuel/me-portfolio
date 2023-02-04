import { useState } from "react";
import { TimeOut } from "@/components/functions/TimeOut";
import { DoorIcon, GitHubIcon, HoveredDoorIcon } from "@/components/icons";

interface InfoSliderAreaProps {
  text: string;
  gitLink: string;
  acessLink: string;
}

export function InfoSliderArea({
  text,
  gitLink,
  acessLink,
}: InfoSliderAreaProps) {
  const [hovered, setHovered] = useState(false);
  const { isActive } = TimeOut();

  const setHoverIcon = () => setHovered((hovered) => !hovered);

  return (
    <div
      className={`transition-all absolute duration-500 bottom-0  ${
        isActive
          ? "scale-105 md:scale-125 lg:scale-150 -translate-y-10 md:-translate-y-32 lg:-translate-y-96"
          : "scale-90 md:scale-100 -translate-y-0 lg:-translate-y-56"
      }`}
    >
      <div
        className="
            font-SliderTitle bg-transparent
            text-lg lg:text-2xl 2xl:text-4xl text-white absolute w-fit max-w-[5rem] left-10 bottom-9"
      >
        {text}
      </div>
      <a href={acessLink} target="_blank">
        <button
          onMouseEnter={setHoverIcon}
          onMouseLeave={setHoverIcon}
          className="shadow shadow-black/25
            rounded flex gap-4 items-center hover:text-white transition-all duration-300
            bg-white hover:bg-pinkLight dark:hover:bg-orangeDark text-xs font-default
            font-medium absolute bottom-0 left-10 py-1 px-2"
        >
          Acessar{" "}
          {hovered ? (
            <span>
              <HoveredDoorIcon />
            </span>
          ) : (
            <span>
              {" "}
              <DoorIcon />
            </span>
          )}
        </button>
      </a>
      <a href={gitLink} target="_blank">
        <button
          className="shadow shadow-black/25
            rounded flex gap-4 items-center hover:text-white transition-all duration-300
            bg-pinkLight hover:bg-pinkLight/75 dark:bg-orangeDark dark:hover:bg-orangeDark/75
            text-xs font-default font-medium
            absolute bottom-0 left-40 py-1 px-2"
        >
          GitHub{" "}
          <span>
            <GitHubIcon />
          </span>
        </button>
      </a>
    </div>
  );
}
