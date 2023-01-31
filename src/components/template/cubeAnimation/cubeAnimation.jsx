import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { useState, useEffect } from "react";
import { BlackOverlay } from "@cubeAnimation/BlackOverlay";
// import { useWindow } from "@hook/useWindow";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = (data = []) => {
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
          <div key={images.id} data-src={images.image}>
            <BlackOverlay high />
          </div>
        );
      })}
    </AutoplaySlider>
  );
};
