import { useState, useEffect } from "react";
import { Title } from "@utils/Title";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@/components/template/sliderAnimation/swiper";
import { useWindow } from "@hook/useWindow";
import { DoorIcon, HoveredDoorIcon, TrashIcon } from "@/components/icons";
import { useData } from "@/data/hook/useData";
import Link from "next/link";

type Cards = {
  lastView: {
    acessLlink: string;
    image: string;
    name: string;
    id: string;
  };
  id: string;
};

export function KeepNavigation() {
  const { lastViews, handleDelet, getLastViews } = useData();
  const { width } = useWindow();
  const [controllsVisivble, setControllsVisivble] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState([
    {i: 0, value: false},
    {i: 1, value: false},
    {i: 2, value: false},
    {i: 3, value: false},
    {i: 4, value: false}
  ]);

  useEffect(() => {
    getLastViews();
  }, []);

  const handleSetControlls = () =>
    setControllsVisivble((controllsVisivble) => !controllsVisivble);

  const setHoverIcon = () => setHovered((hovered) => !hovered);
  
const setHoverCard = (i: number, value: boolean) => {
  setCardHovered(cardHovered.map((card, index) => {
    if (index === i) {
      return { i: card.i, value: value };
    }
    return card;
  }));
};
  
  const widthValidation =
    width < 768 ? 1.5 : "auto" ? (width <= 1024 ? 3.5 : 4.5) : "auto";

  const settings: SwiperProps = {
    spaceBetween: width < 768 ? 50 : 20,
    slidesPerView: widthValidation,
    navigation:
      controllsVisivble && width >= 768 && lastViews.length > 3 ? true : false,
  };

  function renderDetailsButton(to: string, i: number) {
    const isDetailsButtonVisible = cardHovered[i].value === true
      ? "flex translate-y-0 opacity-100"
      : "translate-y-11 opacity-0";

      const showAtMobile = width <= 500 ? 'flex translate-y-0 opacity-100' : isDetailsButtonVisible

    return (
      <Link
        href={to}
        onMouseEnter={setHoverIcon}
        onMouseLeave={setHoverIcon}
        className={`
          shadow shadow-black/25 z-40 
          rounded flex gap-4 items-center hover:text-white transition-all duration-500
          bg-white hover:bg-pinkLight dark:hover:bg-orangeDark text-xs font-default
          font-medium absolute bottom-3 right-3 py-1 px-2  ${showAtMobile}
        `}
      >
        Detalhes{" "}
        {hovered ? (
          <span>
            <HoveredDoorIcon />
          </span>
        ) : (
          <span>
            {" "}
            <DoorIcon />
          </span>
        )}
      </Link>
    );
  }

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
                  <div
                    onMouseEnter={() => setHoverCard(i, true)}
                    onMouseLeave={() => setHoverCard(i, false)}
                    className="overflow-hidden
                      relative h-52 xl:h-72 w-52 xl:w-72
                      2xl:w-auto max-w-[25rem] p-[0.10rem]"
                  >
                    <a href={cards.lastView.acessLlink} target="_blank">
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
                        transition-all duration-150 ease-in hover:brightness-110"
                      />
                    </a>
                    {renderDetailsButton(
                        `/projectDetail/${cards.lastView.name}`, i
                      )}
                  </div>
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
    <div className="pt-5 md:pt-10">
      <Title
        as="h2"
        title={
          lastViews.length > 0
            ? "Continue sua navegação"
            : "Sua navegação ficará salva aqui!"
        }
        className="text-lg md:text-3xl py-4 leading-8 xl"
      />
      <div className="w-screen p-4 relative -left-8">{renderSlide()}</div>
    </div>
  );
}
