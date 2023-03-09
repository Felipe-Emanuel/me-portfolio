import { useState } from "react";
import { TimeOut } from "@/components/functions/TimeOut";
import { DoorIcon, GitHubIcon, HoveredDoorIcon } from "@/components/icons";
import { GitHubButton } from "../../utils/GitHubButton";
import { AcessButton } from "../../utils/AcessButton";

interface InfoSliderAreaProps {
  text?: string;
  gitLink?: string;
  acessLink?: string;
  handleInfo?: () => void;
}

export function InfoSliderArea({
  text,
  gitLink,
  acessLink,
  handleInfo,
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
      } `}
    >
      <div
        className="
            font-SliderTitle bg-transparent 
            text-lg lg:text-2xl 2xl:text-4xl text-white absolute w-fit max-w-[5rem] left-10 bottom-9
            "
      >
        <h1>{text}</h1>
      </div>
      <AcessButton
        DoorIcon={<DoorIcon />}
        HoveredDoorIcon={<HoveredDoorIcon />}
        acessLink={acessLink!}
        handleInfo={() => handleInfo!()}
        hovered={hovered}
        setHoverIcon={setHoverIcon}
        text="Acessar"
        target="_blank"
        className="bottom-0 left-10"
      />
      <GitHubButton
        GitHubIcon={<GitHubIcon />}
        gitLink={gitLink!}
        text="GitHub"
      />
    </div>
  );
}
