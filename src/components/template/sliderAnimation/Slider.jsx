import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { useState, useEffect } from "react";
import { BlackOverlay } from "@/components/template/sliderAnimation/BlackOverlay";
import Image from "next/image";
import { useWindow } from "@hook/useWindow";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = (data = []) => {
  const { width } = useWindow();
  const [Bullet, setIsBullet] = useState(false);

  function updateBullets() {
    width >= 768 ? setIsBullet(true) : setIsBullet(false);
  }

  useEffect(() => {
    updateBullets();
  }, [width]);
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
      {data.map((images) => {
        return (
          <Image width={100} key={images.id} data-src={images.image}>
            <BlackOverlay
              acessLink={images.acessLlink}
              text={images.name}
              gitLink={images.gitLlink}
            />
          </Image>
        );
      })}
    </AutoplaySlider>
  );
};
