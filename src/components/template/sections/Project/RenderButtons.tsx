import { AluraIcon, DoorIcon, GitHubIcon, HoveredDoorIcon, PracticumIcon, RocketSeatIcon, UdemyIcon } from "@/components/icons";
import { useWindow } from "@/data/hook/useWindow";
import Image from "next/image";
import { useState } from "react";
import Me from "../../../../../public/images/About/perfil.jpeg";
import { Paragraph } from "@utils/Paragraph";

interface ProjectProps {
    normalizedGoal?: string | null;
    data: {
      acessLlink: string;
      gitLlink: string;
      id: string;
      image: string;
      name: string;
      subtitle: string;
      techs: string[];
      original: boolean;
      goal: string;
      collaborators: string;
    };
  }

export function RenderButtons({normalizedGoal, data}: ProjectProps) {
  const { width } = useWindow();
  const [hovered, setHovered] = useState(false);

  const setHoverIcon = () => setHovered((hovered) => !hovered);

  const checkIconWidth = width <= 311 ? "hidden" : "flex";

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

    const firstLetter = normalizedGoal?.split(" ")[0].charAt(0).toUpperCase();
    const rest = normalizedGoal?.replace("-", " ").split(" ")[0].slice(1);
    const developedBy = firstLetter! + rest!;

    const [isOpen, setIsOpen] = useState(false);

    const openGraduation = () => setIsOpen((isOpen) => !isOpen);

    const checkIfIsOpen = () => (isOpen ? "w-56" : "w-[38px]");

    return (
      <article className="flex items-center relative">
        <a href={data.acessLlink} target="_blank">
          <button
            onMouseEnter={setHoverIcon}
            onMouseLeave={setHoverIcon}
            className="shadow shadow-black/25
            rounded flex gap-4 items-center hover:text-white transition-all duration-300
            bg-white hover:bg-pinkLight dark:hover:bg-orangeDark text-xs font-default
            font-medium absolute left-10 py-1 px-2 ml-0.5 2xl:ml-2.5"
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
        <a href={data.gitLlink} target="_blank">
          <button
            className="
                shadow shadow-black/25
                rounded flex gap-4 items-center hover:text-white transition-all duration-300
                bg-pinkLight hover:bg-pinkLight/75 dark:bg-orangeDark dark:hover:bg-orangeDark/75
                text-xs font-default font-medium
                absolute left-40 py-1 px-2 ml-0.5 2xl:ml-2.5"
          >
            GitHub{" "}
            <span>
              <GitHubIcon />
            </span>
          </button>
        </a>
          <div
            onMouseEnter={openGraduation}
            onMouseLeave={openGraduation}
            className={`
                bg-light bg-opacity-25 flex transition-all duration-300 rounded-full ${checkIfIsOpen()}
                h-fit 
                items-center gap-1 overflow-hidden
                ring-1 ring-pinkLight dark:ring-orangeDark z-40
                
                absolute -bottom-9 left-[17.5rem] p-0.5 border
                ${checkIconWidth}
            `}
          >
            <div className={`w-8 h-8`}>{icon()}</div>
            <Paragraph
              as="span"
              size="xs"
              className="truncate m-auto flex items-center text-white"
            >
              Desenvolvido com {developedBy}
            </Paragraph>
          </div>
      </article>
    );
  }