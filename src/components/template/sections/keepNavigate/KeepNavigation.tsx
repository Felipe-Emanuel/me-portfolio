import { useState, useEffect } from "react";
import { Title } from "@utils/Title";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@/components/template/sliderAnimation/swiper";
import { useWindow } from "@hook/useWindow";
import { useAuth } from "@/data/hook/useAuth";
import firebase from "@/firebase/config";
import { TrashIcon } from "@/components/icons";

export function KeepNavigation() {
  const { user } = useAuth();
  const { width } = useWindow();
  const [controllsVisivble, setControllsVisivble] = useState(false);
  const [lastViews, setLastViews] = useState<any>([]);

  async function getLastViews() {
    const recentlyView = await firebase
      .firestore()
      .collection("recently")
      .where("lastView.userId", "==", user?.uid)
      .get();

    const data = recentlyView.docs.map((u) => {
      return {
        id: u.id,
        ...u.data(),
      };
    });

    setLastViews(data);
  }

  useEffect(() => {
    getLastViews();
  }, []);

  const handleSetControlls = () =>
    setControllsVisivble((controllsVisivble) => !controllsVisivble);

  function renderSlide() {
    const widthValidation = width < 768 ? "auto" : width <= 1024 ? 3.5 : 4.5;

    const settings: SwiperProps = {
      spaceBetween: 20,
      slidesPerView: widthValidation,
      navigation:
        controllsVisivble && width >= 768 && lastViews.length > 3
          ? true
          : false,
    };

    async function handleDelet(id: string) {
      await firebase
        .firestore()
        .collection("recently")
        .doc(id)
        .delete()
        .then(() => {
          const deletedLastView = lastViews.filter((item: { id: string }) => {
            return item.id !== id;
          });

          setLastViews(deletedLastView);
        })
        .catch((err) => console.log(err));
    }

    return (
      <div
        className="px-3 w-screen"
        onMouseEnter={handleSetControlls}
        onMouseLeave={handleSetControlls}
      >
        <SwiperComponent settings={settings}>
          {lastViews.length > 0 &&
            lastViews.map((cards: any, i: number) => {
              return (
                <SwiperSlide key={i} className="w-screen">
                  <a href={cards.lastView.acessLlink} target="_blank">
                    <div
                      className="relative h-52 xl:h-72 w-52 xl:w-72 2xl:w-auto max-w-[25rem] p-[0.10rem]"
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelet(cards.id);
                        }}
                        className="
                          right-2 top-2 rounded z-10 flex items-center justify-center
                          absolute w-6 h-6 text-white hiver:text-white/8"
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
                    className={`font-black text-xs text-white py-4 px-2
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
    <>
      <Title
        as="h2"
        title="Continue sua navegação"
        className={`font-black text-lg md:text-3xl text-white py-4 ${
          lastViews.length > 0 ? "flex" : "hidden"
        }`}
      />
      <div className="w-screen p-4 relative -left-8">{renderSlide()}</div>
    </>
  );
}
