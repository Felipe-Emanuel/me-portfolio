import { GitHubIcon } from "@/components/icons";
import { Title } from "@utils/Title";
import { GitHubButton } from "@utils/GitHubButton";
import { Paragraph } from "@utils/Paragraph";

interface LastProjectProps {
  data: {
    images: any[];
  };
}

type Data = {
  acessLlink: string;
  gitLlink: string;
  id: number;
  image: string;
  name: string;
  description: string;
};

export function LastProject(data: LastProjectProps) {
  const lastProject: Data = data.data.images[0];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:pt-10">
      <div className="h-[31rem] sm:h-[22.8rem] flex flex-col justify-between">
        <div>
          <Title
            as="h2"
            title="Último Projeto"
            className="text-sm text-black/75 dark:text-white/75 leading-8"
          />
          <Title
            as="h3"
            title={lastProject.name}
            className="text-4xl leading-[3.75rem]"
          />
        </div>

        <Paragraph className="max-w-[27rem] leading-5 pb-4">
          {lastProject.description}
        </Paragraph>
        <div className="w-full lg:w-28">
          <GitHubButton
            GitHubIcon={<GitHubIcon />}
            gitLink={lastProject.gitLlink}
            text='GitHub'
            className="w-full lg:w-28 relative bottom-0 justify-center -left-0"  
          />
        </div>
      </div>
      <a href={lastProject.acessLlink} className="flex m-auto" target="_blank">
        <img
          className="w-[50rem] h-full rounded-lg
          border-[3px] p-[0.10rem] border-transparent
          hover:border-blueLight dark:hover:border-orangeDark
          transition-all duration-150 ease-in"
          src={lastProject.image}
          alt={lastProject.image}
        />
      </a>
    </div>
  );
}
