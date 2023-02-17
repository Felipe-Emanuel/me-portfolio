import { useAppData } from "@hook/useAppData";
import { InfoSliderArea } from "./InfoSliderArea";

interface BlackOverlay {
  text: string;
  gitLink: string;
  acessLink: string;
  handleInfo: any
}

export function BlackOverlay({
  text,
  gitLink,
  acessLink,
  handleInfo
}: BlackOverlay) {
  const blackOverlay = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%)",
  };
  const topDarkOverlay = {
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%)",
  };

  return (
    <>
      <div
        style={topDarkOverlay}
        className="absolute left-0 top-0 h-full w-full"
      />
      <div style={blackOverlay} className="absolute left-0 top-0 h-full w-full">
        <InfoSliderArea
          handleInfo={handleInfo}
          gitLink={gitLink}
          acessLink={acessLink}
          text={text}
        />
      </div>
    </>
  );
}

export function Overlay() {
  const { theme } = useAppData();

  const gradientLight = {
    background:
      "radial-gradient(120.72% 120.72% at 50% 49.92%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 65.27%)",
  };
  const gradientDark = {
    background:
      "radial-gradient(120.72% 120.72% at 50% 49.92%, rgba(0, 0, 0, 0) 10%, #000 65.27%)",
  };
  const checkBottomTheme = theme === "dark" ? gradientDark : gradientLight;

  return (
    <div
      style={checkBottomTheme}
      className={`
      absolute z-50 inset-0`}
    />
  );
}
