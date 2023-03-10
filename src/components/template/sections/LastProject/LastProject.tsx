
import { GitHubIcon } from "@/components/icons";
import { Title } from "@utils/Title";
import { GitHubButton } from "@utils/GitHubButton";
import { Paragraph } from "@utils/Paragraph";
import { useWindow } from "@/data/hook/useWindow";

type Data = {
  data: { acessLink: string; gitLink: string; id: number; image: string; name: string; description: string; }[]
} 

export function LastProject({data}: Data) {
  const { width } = useWindow()

  const checkWidth = width < 414 ? 'h-31rem' : 'h-[20rem] sm:h-[22.8rem]'

  return data && (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:pt-10">
      <div className={`flex flex-col justify-between ${checkWidth}`}>
        <div>
          <Title
            as="h2"
            title="Último Projeto"
            className="text-sm text-black/75 dark:text-white/75 leading-8"
          />
          <Title
            as="h3"
            title={data[0].name}
            className="text-4xl leading-[3.75rem]"
          />
        </div>

        <Paragraph className="max-w-[27rem] leading-5 md:pb-4">
          {data[0].description}
        </Paragraph>
        <div className="w-full lg:w-28 py-4 sm:pt-0">
          <GitHubButton
            GitHubIcon={<GitHubIcon />}
            gitLink={data[0].gitLink}
            text='GitHub'
            className="w-full lg:w-28 relative bottom-0 justify-center -left-0"  
          />
        </div>
      </div>
      <a href={data[0].acessLink} className="flex m-auto" target="_blank">
        <img
          className="w-[50rem] h-full rounded-lg
          border-[3px] p-[0.10rem] border-transparent
          hover:border-blueLight dark:hover:border-orangeDark
          transition-all duration-150 ease-in"
          src={data[0].image}
          alt={data[0].image}
        />
      </a>
    </div>
  );
}
