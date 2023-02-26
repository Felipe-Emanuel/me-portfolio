import {
  GitHubIcon,
  GitIcon,
  JavascriptIcon,
  NextJstIcon,
  ReactIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "@/components/icons";
import { Title } from "../../utils/Title";

export function Skills() {
  return (
    <div className="pt-10">
      <Title as="h2" title="Principais Habilidades" className="text-center" />
      <ul className="flex m-auto items-center justify-evenly max-w-[1280px] dark:text-white flex-wrap">
        <li>
          <JavascriptIcon />
        </li>
        <li>
          <TypescriptIcon />
        </li>
        <li>
          <ReactIcon />
        </li>
        <li>
          <TailwindcssIcon />
        </li>
        <li>
          <NextJstIcon />
        </li>
        <li>
          <GitHubIcon />
        </li>
        <li>
          <GitIcon />
        </li>
      </ul>
    </div>
  );
}
