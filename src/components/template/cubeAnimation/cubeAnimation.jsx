import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { useState, useEffect } from "react";
import { Title } from "../utils/Title";
import { useAppData } from "@/data/hook/useAppData";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (data = []) => {
  const { theme } = useAppData();
  const [Bullet, setIsBullet] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function updateBullets() {
    width >= 768 ? setIsBullet(true) : setIsBullet(false);
  }

  useEffect(() => {
    updateBullets();
  }, [width]);

  return (
    <AutoplaySlider
      className="h-full"
      buttons={false}
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      animation="fallAnimation"
      bullets={Bullet}
    >
      {data.map((images) => {
        return (
          <div key={images.id} data-src={images.image}>
            <div
              className={`absolute left-0 h-full w-screen bg-gradient-to-b
                from-transparent ${theme === "dark" ? `to-dark` : `to-light`}`}
            />

            <div
              className={`absolute left-0 top-0 h-full xl:h-[80vh] w-full
                bg-gradient-to-b from-transparent ${
                  theme === "dark" ? `to-dark` : `to-light`
                }`}
            />
          </div>
        );
      })}
    </AutoplaySlider>
  );
};
