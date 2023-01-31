import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { useState, useEffect } from "react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (data = []) => {
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
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      animation="cubeAnimation"
      bullets={Bullet}
    >
      {data.map((images) => {
        return (
          <div className="cover md" key={images.id} data-src={images.image}>
            <div className="bg-black/25 absolute inset-0" />
          </div>
        );
      })}
    </AutoplaySlider>
  );
};
