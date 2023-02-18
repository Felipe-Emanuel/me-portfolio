import { useEffect, useState } from "react";
import { Slider } from "@/components/template/sliderAnimation/mainSlider/Slider";
import loadingImage from "../../../../../public/images/loadingImage.gif";
import Image from "next/image";
import { useData } from "@/data/hook/useData";

export function RenderSlider() {
  const [loadData, setLoadData] = useState(true);
  const { dataGet, getData } = useData();
  
  useEffect(() => {
    setLoadData(true);
    getData("images", 5)
    setLoadData(false);
  }, []);

  const topDarkOverlay = {
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%)",
  };

  return (
    <div className="relative -top-10 -left-10 w-screen h-auto bg-light dark:bg-dark">
      <div
        className="flex flex-col
      relative min-w-[280px] max-w-full z-10 right-0 h-full xl:max-h-[1080px] bg-contain -top-0
      sm:left-0 sm:top-0"
      >
        {loadData && <Image src={loadingImage} alt="loading" />}

        {Slider(dataGet.map((cards: string) => cards))}
      </div>
      <div
        style={topDarkOverlay}
        className="w-screen left-0 relative h-full pb-16"
      />
    </div>
  );
}
