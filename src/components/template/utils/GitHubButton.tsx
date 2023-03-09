import { ReactNode } from "react";

interface GitHubButtonProps {
  gitLink: string;
  text: string;
  className?: string;
  GitHubIcon: ReactNode;
}

export function GitHubButton({
  gitLink,
  text,
  className,
  GitHubIcon,
}: GitHubButtonProps) {
  return (
    <a href={gitLink} target="_blank">
      <button
        className={`
            shadow shadow-black/25
            rounded flex gap-4 items-center hover:text-white transition-all duration-300
            bg-gitHub text-white hover:bg-gitHub/80
            text-xs font-default font-medium
            absolute bottom-0 left-40 py-1 px-2 ${className}`}
      >
        {text} <span>{GitHubIcon}</span>
      </button>
    </a>
  );
}
