import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindow } from "@hook/useWindow";
import { BlackOverlay } from "./BlackOverlay";
import { useData } from "@/data/hook/useData";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = (cards = []) => {
  const { postFireBaseLastViews } = useData();
  const { width } = useWindow();
  const [Bullet, setIsBullet] = useState(false);

  function updateBullets() {
    width >= 640 ? setIsBullet(true) : setIsBullet(false);
  }

  useEffect(() => {
    updateBullets();
  }, [width]);

  function renderImage() {
    return cards.map((card) => {
      return (
        <Image width={100} key={card.id} data-src={card.image}>
          <BlackOverlay
            handleInfo={() => postFireBaseLastViews(card)}
            acessLink={card.acessLlink}
            text={card.name}
            gitLink={card.gitLlink}
          />
        </Image>
      );
    });
  }

  return (
    <AutoplaySlider
      mobileTouch
      className="w-full h-full"
      buttons={false}
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      animation="fallAnimation"
      bullets={Bullet}
    >
      {renderImage()}
    </AutoplaySlider>
  );
};
