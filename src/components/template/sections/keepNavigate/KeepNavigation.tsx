import { useState, useEffect } from "react";
import { Title } from "@utils/Title";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@/components/template/sliderAnimation/swiper";
import { useWindow } from "@hook/useWindow";
import { TrashIcon } from "@/components/icons";
import { useData } from "@/data/hook/useData";
import { useAppData } from "@/data/hook/useAppData";

type Cards = {
  lastView: {
    acessLlink: string;
    image: string;
    name: string;
  };
  id: string;
};

export function KeepNavigation() {
  const { lastViews, handleDelet, getLastViews } = useData();
  const { width } = useWindow();
  const [controllsVisivble, setControllsVisivble] = useState(false);

  useEffect(() => {
    getLastViews()
  }, [])

  const handleSetControlls = () =>
    setControllsVisivble((controllsVisivble) => !controllsVisivble);

  const widthValidation = width < 768 ? "auto" : width <= 1024 ? 3.5 : 4.5;

  const settings: SwiperProps = {
    spaceBetween: 20,
    slidesPerView: widthValidation,
    navigation:
      controllsVisivble && width >= 768 && lastViews.length > 3 ? true : false,
  };

  function renderSlide() {
    return (
      <div
        className="px-3 w-screen"
        onMouseEnter={handleSetControlls}
        onMouseLeave={handleSetControlls}
      >
        <SwiperComponent settings={settings}>
          {lastViews.length > 0 &&
            lastViews.map((cards: Cards, i: number) => {
              return (
                <SwiperSlide key={i} className="w-screen">
                  <a href={cards.lastView.acessLlink} target="_blank">
                    <div
                      className="
                        relative h-52 xl:h-72 w-52 xl:w-72
                        2xl:w-auto max-w-[25rem] p-[0.10rem]"
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelet(cards.id);
                        }}
                        className="
                          right-2 top-2 rounded z-10 flex items-center justify-center
                          absolute w-6 h-6 text-white hover:text-white/80"
                      >
                        <TrashIcon />
                      </button>
                      <img
                        src={cards.lastView.image}
                        className="
                        w-full h-full rounded-lg
                        border-[3px] p-[0.10rem] border-transparent
                        hover:border-pinkLight dark:hover:border-orangeDark
                        transition-all duration-150 ease-in"
                      />
                    </div>
                  </a>
                  <Title
                    as="h3"
                    title={cards.lastView.name}
                    className={`font-black text-xs py-4 px-2
                    font-SliderTitle`}
                  />
                </SwiperSlide>
              );
            })}
        </SwiperComponent>
      </div>
    );
  }

  return (
    <div className="pt-10">
      <Title
        as="h2"
        title={lastViews.length > 0 ? "Continue sua navegação" : "Sua navegação ficará salva aqui!"}  
        className="text-lg md:text-3xl py-4 leading-8 xl"
      />
      <div className="w-screen p-4 relative -left-8">{renderSlide()}</div>
    </div>
  );
}
