import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { useState, useEffect } from "react";
import { Title } from "../utils/Title";
import { useAppData } from "@/data/hook/useAppData";
import { BlackOverlay } from "./BlackOverlay";
import { useWindow } from "@/data/hook/useWindow";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (data = []) => {
  const [Bullet, setIsBullet] = useState(false);

  const { width } = useWindow();

  function updateBullets() {
    width >= 768 ? setIsBullet(true) : setIsBullet(false);
  }

  useEffect(() => {
    updateBullets();
  }, [width]);

  return (
    <AutoplaySlider
      fillParent
      buttons={false}
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      animation="fallAnimation"
      bullets={Bullet}
    >
      {data.map((images) => {
        return (
          <div className="bg-cover" key={images.id} data-src={images.image}>
            <BlackOverlay high />
          </div>
        );
      })}
    </AutoplaySlider>
  );
};
