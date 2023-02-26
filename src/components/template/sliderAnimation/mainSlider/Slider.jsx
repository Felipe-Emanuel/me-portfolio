import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Image from "next/image";
import { BlackOverlay } from "./BlackOverlay";
import { useData } from "@/data/hook/useData";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = (cards = []) => {
  const { postFireBaseLastViews } = useData();

  function renderImage() {
    return cards.map((card) => {
      return (
        <div key={card.id} data-src={card.image}>
          <BlackOverlay
            infoArea
            handleInfo={() => postFireBaseLastViews(card)}
            acessLink={card.acessLlink}
            text={card.name}
            gitLink={card.gitLlink}
          />
        </div>
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
      bullets={true}
    >
      {renderImage()}
    </AutoplaySlider>
  );
};
