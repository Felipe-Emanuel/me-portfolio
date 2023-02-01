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
      mobileTouch
      className="w-full h-full"
      buttons={false}
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      animation="fallAnimation"
      bullets={Bullet}
    >
      {data.map((images) => {
        return (
          <Image width={100} key={images.id} data-src={images.image}>
            <BlackOverlay />
          </Image>
        );
      })}
    </AutoplaySlider>
  );
};
