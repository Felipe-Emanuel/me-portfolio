import { useAppData } from "@hook/useAppData";

export function BlackOverlay() {
  const { theme } = useAppData();

  const checkTheme = `${theme === "dark" ? `to-dark` : `via-transparent to-light`}`;

  return (
    <>
      <div
        className={`absolute left-0 top-0 h-full xl:h-[80vh] w-full
      bg-gradient-to-b from-transparent ${checkTheme}`}
      />
    </>
  );
}
