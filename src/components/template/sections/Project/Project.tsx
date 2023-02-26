import { useState } from "react";
import { useWindow } from "@/data/hook/useWindow";
import { Title } from "@utils/Title";
import { BlackOverlay } from "@sliderAnimation/mainSlider/BlackOverlay";
import {
  AluraIcon,
  DoorIcon,
  GitHubIcon,
  HoveredDoorIcon,
  PracticumIcon,
  RocketSeatIcon,
  UdemyIcon,
} from "@/components/icons";
import { TechList } from "./TechList";
import { Paragraph } from "@utils/Paragraph";
import Me from "../../../../../public/images/About/perfil.jpeg";
import Image from "next/image";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@sliderAnimation/swiper";
import { RenderButtons } from "./RenderButtons";

interface ProjectProps {
  normalizedGoal?: string | null;
  data: {
    acessLlink: string;
    gitLlink: string;
    id: string;
    image: string;
    name: string;
    subtitle: string;
    techs: string[];
    original: boolean;
    goal: string;
    collaborators: string;
  };
}

export function Project({ data, normalizedGoal }: ProjectProps) {
  const { width } = useWindow();
  const [controllsVisivble, setControllsVisivble] = useState(false);

  const topDarkOverlay = {
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%)",
  };

  const checkTitleWidth =
    width === 500 ? "text-4xl" : "text-3xl sm:text-5xl 2xl:text-9xl";

  const widthValidation = width <= 768 ? 1.5 : 3.5;

  const settings: SwiperProps = {
    spaceBetween: 20,
    slidesPerView: widthValidation,
    navigation: controllsVisivble && width >= 640 ? true : false,
  };

  const handleSetControlls = () =>
    setControllsVisivble((controllsVisivble) => !controllsVisivble);

  return (
    <article className="relative flex flex-col w-screen h-screen -top-14 -left-10">
      <div className="h-full absolute">
        <div
          className={`w-screen relative h-auto md:max-h-[65%] overflow-hidden`}
        >
          <img
            src={data.image}
            alt={`Imagem do projeto ${data.name}`}
            className="w-screen h-full"
          />
          <BlackOverlay />
        </div>
        <div style={topDarkOverlay} className="w-screen -left-10 h-fit">
          <Title
            title={data.name}
            className={`pointer-events-none transition-all font-SliderTitle ${checkTitleWidth} text-white absolute left-10 bottom-9`}
          />
          <Title
            as="h2"
            title={data.subtitle}
            className="px-0.5 2xl:pl-2.5 font-SecondarySans font-thin text-white/50 dark:text-white/50 relative left-10 -top-8 text-xs w-96 sm:text-sm 2xl:text-base pr-44 sm:pr-0"
          />
          <RenderButtons data={data} normalizedGoal={normalizedGoal}/>
          <div className="relative left-10 top-12 w-64 ml-0.5 2xl:ml-2.5">
            <TechList techs={data.techs} />
          </div>

          <div
            className="relative left-10 top-20 w-screen h-56 overflow-hidden"
            onMouseEnter={handleSetControlls}
            onMouseLeave={handleSetControlls}
          >
            <SwiperComponent settings={settings}>
              <SwiperSlide className="w-screen">
                <Paragraph className="flex items-center justify-center gap-4 max-w-xs h-56 font-default leading-4 text-[10px] md:text-xs py-4">
                  "{data.goal}"
                </Paragraph>
              </SwiperSlide>
              <SwiperSlide className="w-screen">
                <img
                  src={data.image}
                  className="
                        max-w-xs h-52 rounded-lg
                        border-[3px] p-[0.10rem] border-transparent
                        hover:border-pinkLight dark:hover:border-orangeDark
                        transition-all duration-150 ease-in hover:brightness-110"
                />
              </SwiperSlide>
            </SwiperComponent>
          </div>
        </div>
      </div>
    </article>
  );
}
