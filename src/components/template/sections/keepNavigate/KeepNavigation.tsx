import { useState, useEffect } from "react";
import { Title } from "@utils/Title";
import api from "@/data/services/api";
import { SwiperComponent, SwiperProps, SwiperSlide } from "@sections/swiper";
import { useWindow } from "@hook/useWindow";

interface KeepNavigationProps {}

export function KeepNavigation({}: KeepNavigationProps) {
  const [data, setData] = useState<any>([]);
  const [controllsVisivble, setControllsVisivble] = useState(false);
  const { width } = useWindow();

  async function renderBanner() {
    const req = await api.get("/api/images", {
      params: {
        limit: 4,
      },
    });
    const res = req;
    setData(res.data.images);
  }

  useEffect(() => {
    renderBanner();
  }, []);

  const handleSetControlls = () =>
    setControllsVisivble((controllsVisivble) => !controllsVisivble);

  function renderSlide() {
    const widthValidation = width < 768 ? "auto" : width <= 1024 ? 3.5 : 4.5;

    const settings: SwiperProps = {
      spaceBetween: 20,
      slidesPerView: widthValidation,
      navigation:
        controllsVisivble && width >= 768 && data.length > 3 ? true : false,
    };

    return (
      <div
        className="px-3 w-screen"
        onMouseEnter={handleSetControlls}
        onMouseLeave={handleSetControlls}
      >
        <SwiperComponent settings={settings}>
          {data.length > 0 &&
            data.map((cards: any) => {
              return (
                <SwiperSlide key={cards.id} className="w-screen">
                  <a href={cards.acessLlink} target="_blank">
                    <img
                      src={cards.image}
                      className="h-52 xl:h-72 w-52 xl:w-96 rounded-lg border-[3px] p-[0.10rem] border-transparent hover:border-pinkLight dark:hover:border-orangeDark transition-all duration-150 ease-in"
                    />
                  </a>
                  <Title
                    as="h3"
                    title={cards.name}
                    className={`font-black text-xs text-white py-4 px-2 font-SliderTitle`}
                  />
                </SwiperSlide>
              );
            })}
        </SwiperComponent>
      </div>
    );
  }

  return (
    <>
      <Title
        as="h2"
        title="Continue sua navegação"
        className="font-black text-lg md:text-3xl text-white py-4"
      />
      <div className="w-screen p-4 relative -left-8">{renderSlide()}</div>
    </>
  );
}
