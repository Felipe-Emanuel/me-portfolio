import { useLottie } from "lottie-react";
import { useEffect } from "react";
import MenuJson from "./MenuJson.json";

interface MenuAnimationProps {
  isClose?: boolean;
  onClick?: () => void;
}

export function MenuAnimation({ isClose, onClick }: MenuAnimationProps) {
  useEffect(() => {
    isClose === false ? setDirection(-1) : setDirection(1);
    play();
    setSpeed(3)
  }, [isClose]);

  const options = {
    animationData: MenuJson,
    autoplay: false,
    loop: 0,
  };

  const { View, play, setDirection, setSpeed } = useLottie(options);

  return (
    <button
      onClick={() => {
        onClick!();
      }}
      aria-label="Menu Mobile"
      className={`flex justify-center items-center w-8 bg-inherit`}
    >
      <span className="hue-rotate-15 dark:hue-rotate-180">{View}</span>
    </button>
  );
}
