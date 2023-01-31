import { useAppData } from "@/data/hook/useAppData";

interface BlackOverlayProps {
    high?: boolean;
}

export function BlackOverlay({high}: BlackOverlayProps) {
  const { theme } = useAppData();

  const checkTheme = `${theme === "dark" ? `to-dark` : `to-light`}`;

  return (
    <>
      <div
        className={`absolute left-0 top-0 h-full xl:h-[80vh] w-full
      bg-gradient-to-b from-transparent ${checkTheme}`}
      />
      {high && (
        <div
          className={`absolute left-0 top-0 h-full xl:h-[80vh] w-full
        bg-gradient-to-b from-transparent ${checkTheme}`}
        />
      )}
    </>
  );
}
