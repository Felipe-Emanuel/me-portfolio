import Link from "next/link";
import { ReactNode } from "react";

interface AcessButtonProps {
  target?: "_blank"
  acessLink: string;
  text: string;
  className?: string;
  handleInfo?: () => void;
  setHoverIcon: () => void;
  hovered: boolean;
  HoveredDoorIcon: ReactNode;
  DoorIcon: ReactNode;
  as?: typeof Link
}

export function AcessButton({
  target,
  acessLink,
  text,
  className,
  handleInfo,
  setHoverIcon,
  hovered,
  HoveredDoorIcon,
  as,
  DoorIcon,
}: AcessButtonProps) {
    const Comp = as ?? 'a'

  return (
    <Comp href={acessLink} target={target}>
      <button
        onClick={handleInfo}
        onMouseEnter={setHoverIcon}
        onMouseLeave={setHoverIcon}
        className={`
            shadow shadow-black/25
            rounded flex gap-4 items-center hover:text-white transition-all duration-300
            bg-white hover:bg-blueLight dark:hover:bg-orangeDark text-xs font-default
            font-medium absolute py-1 px-2 ${className}`}
      >
        {text}{" "}
        {hovered ? <span>{HoveredDoorIcon}</span> : <span> {DoorIcon}</span>}
      </button>
    </Comp>
  );
}
