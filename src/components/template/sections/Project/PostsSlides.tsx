import { useWindow } from "@/data/hook/useWindow";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@sliderAnimation/swiper";
import { Paragraph } from "@utils/Paragraph";
import { ProjectDataProps } from "./type";

export function PostsSlides({ data }: ProjectDataProps) {
  const { width } = useWindow();

  function widthValidation(): number {
    if (width <= 300) {
      return 1.5;
    } else if (width <= 500) {
      return 2.5;
    } else if (width <= 1280) {
      return 3.5;
    } else {
      return 4.5;
    }
  }

  const settings: SwiperProps = {
    spaceBetween: width < 820 ? 5 : 50,
    slidesPerView: widthValidation(),
    navigation: false,
  };

  return (
    <>
      {width <= 640 && (
        <Paragraph
          className="
            relative px-10 pb-4 -left-10 flex items-center
            justify-center m-auto text-center font-default leading-5 text-[9px]
          "
        >
          "{data.goal}"
        </Paragraph>
      )}

      <SwiperComponent settings={settings}>
        {width > 640 && (
          <SwiperSlide className="hidden sm:flex">
            <Paragraph
              className="
                flex items-center justify-center gap-4 max-w-xs h-56 font-default
                leading-4 text-[10px] lg:text-xs py-4
              "
            >
              "{data.goal}"
            </Paragraph>
          </SwiperSlide>
        )}
        {data.posters.map((post: string, i: number) => {
          return (
            <SwiperSlide key={i} className="w-screen">
              <img
                src={post}
                className="
                      h-28 w-36 sm:h-52 sm:w-56 lg:w-72 2xl:w-80 rounded-lg
                      border-[3px] p-[0.10rem] border-transparent
                      hover:border-blueLight dark:hover:border-orangeDark
                      transition-all duration-150 ease-in hover:brightness-110"
              />
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </>
  );
}
