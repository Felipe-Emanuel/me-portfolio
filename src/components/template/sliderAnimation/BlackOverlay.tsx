import { useAppData } from "@hook/useAppData";

export function BlackOverlay() {
  const { theme } = useAppData();

  const lightOverlay = {background: "linear-gradient(rgba(0, 0, 0, 0), rgba(187, 187, 187, 0.008) 52.42%, rgba(187, 187, 187, 0.035) 55.82%, rgba(187, 187, 187, 0.082) 59.22%, rgba(187, 187, 187, 0.15) 62.62%, rgba(187, 187, 187, 0.23) 66.02%, rgba(187, 187, 187, 0.333) 69.41%, rgba(187, 187, 187, 0.443) 72.81%, rgba(187, 187, 187, 0.557) 76.21%, rgba(187, 187, 187, 0.667) 79.61%, rgba(187, 187, 187, 0.77) 83.01%, rgba(187, 187, 187, 0.85) 86.41%, rgba(187, 187, 187, 0.918) 89.8%, rgba(187, 187, 187, 0.965) 93.2%, rgba(187, 187, 187, 0.992) 96.6%, #bbb 100%)"}
  const blackOverlay = {background: "linear-gradient(rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%)"}
  const topOverlay = {background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 7.66%)"}

  const checkBottomTheme = theme === "dark" ? blackOverlay : lightOverlay;
  
  return (
    <>
      <div style={topOverlay}
        className="absolute left-0 top-0 h-full xl:h-[80vh] w-[1920px]"
      />
      <div style={checkBottomTheme}
        className="absolute left-0 top-0 h-full xl:h-[80vh] w-[1920px]"
      />
    </>
  );
}

