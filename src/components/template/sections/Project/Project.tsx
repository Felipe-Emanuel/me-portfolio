import { useWindow } from "@/data/hook/useWindow";
import { Title } from "@utils/Title";
import { BlackOverlay } from "@sliderAnimation/mainSlider/BlackOverlay";
import { TechList } from "./TechList";
import { RenderButtons } from "./RenderButtons";
import { PostsSlides } from "./PostsSlides";
import { ProjectDataProps } from "./type";

export function Project({ data, normalizedGoal }: ProjectDataProps) {
  const { width } = useWindow();

  const topDarkOverlay = {
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%)",
  };

  const checkTitleWidth =
    width === 500 ? "text-4xl" : "text-3xl sm:text-5xl 2xl:text-9xl";

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
        <div style={topDarkOverlay} className="w-screen -left-10">
          <Title
            title={data.name}
            className={`pointer-events-none transition-all font-SliderTitle ${checkTitleWidth} text-white absolute left-10 bottom-9`}
          />
          <Title
            as="h2"
            title={data.subtitle}
            className="px-0.5 2xl:pl-2.5 font-SecondarySans font-thin text-white/50 dark:text-white/50 relative left-10 -top-8 text-xs w-96 sm:text-sm 2xl:text-base pr-44 sm:pr-0"
          />
          <RenderButtons data={data} normalizedGoal={normalizedGoal} />
          <div className="relative left-10 top-12 w-64 ml-0.5 2xl:ml-2.5">
            <TechList techs={data.techs} />
          </div>
          <div className="relative left-10 top-14 w-full">
            <PostsSlides data={data} />
          </div>
        </div>
      </div>
    </article>
  );
}
