import { useLottie } from "lottie-react";
import LogoJson from "./LogoJson.json";

export function LogoAnimation() {
  const options = {
    animationData: LogoJson,
    autoplay: true,
    loop: 0,
  };

  const { View } = useLottie(options);
  return (
    <div className="flex justify-center items-center h-20 w-16 text-white">{View}</div>
  );
}
