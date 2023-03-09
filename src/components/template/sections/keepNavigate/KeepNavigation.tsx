import { useState, useEffect } from "react";
import { Title } from "@utils/Title";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@/components/template/sliderAnimation/swiper";
import { useWindow } from "@hook/useWindow";
import {
  DoorIcon,
  HoveredDoorIcon,
  ResponsiveIcon,
  TrashIcon,
} from "@/components/icons";
import { useData } from "@/data/hook/useData";
import Link from "next/link";
import { AcessButton } from "../../utils/AcessButton";
import { Paragraph } from "../../utils/Paragraph";

type Cards = {
  lastView: {
    acessLlink: string;
    image: string;
    name: string;
    id: string;
    responsive: boolean;
  };
  id: string;
};

export function KeepNavigation() {
  const { lastViews, handleDelet, getLastViews } = useData();
  const { width } = useWindow();
  const [controllsVisivble, setControllsVisivble] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState([
    { i: 0, value: false },
    { i: 1, value: false },
    { i: 2, value: false },
    { i: 3, value: false },
    { i: 4, value: false },
  ]);

  useEffect(() => {
    getLastViews();
  }, []);

  const handleSetControlls = () =>
    setControllsVisivble((controllsVisivble) => !controllsVisivble);

  const setHoverIcon = () => setHovered((hovered) => !hovered);

  const setHoverCard = (i: number, value: boolean) => {
    setCardHovered(
      cardHovered.map((card, index) => {
        if (index === i) {
          return { i: card.i, value: value };
        }
        return card;
      })
    );
  };

  const settings: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: width < 300 ? 1 : 1.5,
    navigation:
      controllsVisivble && width >= 768 && lastViews.length > 3 ? true : false,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  function renderTrashIcon(cardId: string, i: number) {
    const isDetailsButtonVisible =
      cardHovered[i].value === true ? "flex" : "hidden";

    const showAtMobile = width <= 500 ? "flex" : isDetailsButtonVisible;

    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDelet(cardId);
        }}
        className={`
        right-2 top-2 rounded z-10 flex items-center justify-center
        absolute w-6 h-6 text-white hover:text-white/70
        ${showAtMobile}
      `}
      >
        <TrashIcon />
      </button>
    );
  }

  function renderDetailsButton(to: string, i: number) {
    const isDetailsButtonVisible =
      cardHovered[i].value === true
        ? "flex translate-y-0 opacity-100"
        : "translate-y-11 opacity-0";

    const showAtMobile =
      width <= 500 ? "flex translate-y-0 opacity-100" : isDetailsButtonVisible;

    return (
      <AcessButton
        as={Link}
        DoorIcon={<DoorIcon />}
        HoveredDoorIcon={<HoveredDoorIcon />}
        acessLink={to}
        hovered={hovered}
        setHoverIcon={setHoverIcon}
        text="Detalhes"
        className={`absolute bottom-4 right-3 ${showAtMobile}`}
      />
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
                    <a
                      href={cards.lastView.acessLlink}
                      target="_blank"
                      className="relative"
                    >
                      {renderTrashIcon(cards.id, i)}
                      <img
                        src={cards.lastView.image}
                        className="
                        w-full h-full rounded-lg
                        border-[3px] p-[0.10rem] border-transparent
                        hover:border-blueLight dark:hover:border-orangeDark
                        transition-all duration-150 ease-in hover:brightness-110"
                      />
                    </a>
                    {renderDetailsButton(
                      `/projectDetail/${cards.lastView.name}`,
                      i
                    )}
                  </div>
                  <div className="flex items-center justify-between w-52 xl:w-72 max-w-[25rem] 2xl:w-full pr-1.5">
                    <Title
                      as="h3"
                      title={cards.lastView.name}
                      className={`font-black text-xs py-4 px-2
                      font-SliderTitle`}
                    />
                    {cards.lastView.responsive && (
                      <Paragraph as="span">
                        <ResponsiveIcon />
                      </Paragraph>
                    )}
                  </div>
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
