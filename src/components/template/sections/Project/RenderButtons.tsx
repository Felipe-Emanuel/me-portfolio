import {
  AluraIcon,
  DoorIcon,
  GitHubIcon,
  HoveredDoorIcon,
  PracticumIcon,
  RocketSeatIcon,
  UdemyIcon,
} from "@/components/icons";
import { useWindow } from "@/data/hook/useWindow";
import Image from "next/image";
import { useState } from "react";
import Me from "../../../../../public/images/About/perfil.jpeg";
import { Paragraph } from "@utils/Paragraph";
import { ProjectDataProps } from "./type";
import { GitHubButton } from "../../utils/GitHubButton";
import { AcessButton } from "../../utils/AcessButton";

export function RenderButtons({ normalizedGoal, data }: ProjectDataProps) {
  const { width } = useWindow();
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setHoverIcon = () => setHovered((hovered) => !hovered);
  const openGraduation = () => setIsOpen((isOpen) => !isOpen);

  const firstLetter = normalizedGoal?.split(" ")[0].charAt(0).toUpperCase();
  const rest = normalizedGoal?.replace("-", " ").split(" ")[0].slice(1);
  const developedBy = firstLetter! + rest!;

  const checkIconWidth = width < 500 ? "hidden" : "flex";
  const checkTextIconWidth = width < 600 ? "text-[10px]" : "text-[12px]";
  const checkIfIsOpen = () => (isOpen ? `${width < 600 ? 'w-52' : 'w-56'}` : "w-[38px]");

  const icon = () => {
    if (normalizedGoal === "udemy-icon") {
      return <UdemyIcon />;
    } else if (normalizedGoal === "alura-icon") {
      return <AluraIcon />;
    } else if (normalizedGoal === "practicum-icon") {
      return <PracticumIcon />;
    } else if (normalizedGoal === "rocketseat-icon") {
      return <RocketSeatIcon />;
    } else {
      return (
        <div className="h-8 w-8">
          <Image
            width={100}
            height={100}
            quality={100}
            className={`w-full h-full rounded-full`}
            src={Me}
            alt="Felipe, desenvolvedor frontend dono do portfólio e deste projeto"
          />
        </div>
      );
    }
  };

  return (
    <article className="flex items-center relative">
      <AcessButton
        DoorIcon={<DoorIcon />}
        HoveredDoorIcon={<HoveredDoorIcon />}
        acessLink={data.acessLlink}
        hovered={hovered}
        setHoverIcon={setHoverIcon}
        text="Acessar"
        target="_blank"
        className="left-10 -bottom-8 py-1 px-2 ml-0.5 2xl:ml-2.5"
      />
      <GitHubButton
        GitHubIcon={<GitHubIcon />}
        gitLink={data.gitLlink}
        text='GitHub'
        className="left-40 -bottom-8 py-1 px-2 ml-0.5 2xl:ml-2.5"
      />
      <div
        onMouseEnter={openGraduation}
        onMouseLeave={openGraduation}
        className={`
                bg-opacity-25 flex transition-all duration-300 rounded-full ${checkIfIsOpen()}
                h-fit items-center gap-1 overflow-hidden
                ring-1 ring-blueLight dark:ring-orangeDark z-40
                absolute -bottom-9 left-[17.5rem] p-0.5 border
                ${checkIconWidth}
            `}
      >
        <div className={`w-8 h-8`}>{icon()}</div>
        <Paragraph
          as="span"
          className={`truncate m-auto flex items-center text-white ${checkTextIconWidth}`}
        >
          Desenvolvido com {developedBy}
        </Paragraph>
      </div>
    </article>
  );
}
