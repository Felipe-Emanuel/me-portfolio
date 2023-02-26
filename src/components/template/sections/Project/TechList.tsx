import {
  CssIcon,
  FirebaseIcon,
  HtmlIcon,
  JavascriptIcon,
  NextJstIcon,
  ReactIcon,
  StyledComponentstIcon,
  SupabaseIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "@/components/icons";

interface TechListProps {
  techs: string[];
}

export function TechList({ techs }: TechListProps) {
  const techIconMap: { [key: string]: JSX.Element } = {
    ReactJs: <ReactIcon />,
    Typescript: <TypescriptIcon />,
    JavaScript: <JavascriptIcon />,
    TailwindCss: <TailwindcssIcon />,
    NextJS: <NextJstIcon />,
    Firebase: <FirebaseIcon />,
    SupaBase: <SupabaseIcon />,
    CSS3: <CssIcon />,
    Html: <HtmlIcon />,
    "Styled-Components": <StyledComponentstIcon />,
  };

  function renderTechList(){
    console.log(techs);

    if(!techs) {
      return null
    } else {
      return (
        <>
        {techs.length > 0 && techs?.map((tech) => {
        const icon = techIconMap[tech];
        return (
          <li
            title={tech}
            key={tech}
            className="hover:scale-110 transition-all"
          >
            {icon}
          </li>
        );
      })}
        </>
      )
    }
  }

  return (
    <ul className="relative flex m-auto justify-start gap-4 items-center dark:text-white flex-wrap z-30">
      {renderTechList()}
    </ul>
  );
}
