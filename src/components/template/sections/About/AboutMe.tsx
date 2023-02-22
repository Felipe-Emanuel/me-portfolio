import "react-awesome-button/dist/styles.css";
import { Title } from "@utils/Title";
import { Paragraph } from "@utils/Paragraph";
import { SocialMediaDropDown } from "./SocialMediaDropDown";
import { AwesomeButtonSocial } from "react-awesome-button";

export function AboutMe() {
  function renderParagraph() {
    return (
      <>
        <Paragraph size="xs" className="leading-5 pt-2 sm:pt-4">
          Ei, eu sou Felipe Emanuel e sou apaixonado por minhas principais
          habilidades: JavaScript, TypeScript, ReactJS, NextJS e TailwindCSS.
        </Paragraph>
        <Paragraph size="xs" className="leading-5 pt-2 sm:pt-4">
          Atualmente, estou trabalhando em um projeto empolgante com uma equipe
          incrível, e participando do bootcamp da Practicum, onde estou me
          desafiando e adquirindo novas habilidades.
        </Paragraph>
        <Paragraph size="xs" className="leading-5 pt-2 sm:pt-4">
          Se você está procurando um desenvolvedor frontend com paixão e
          determinação, parabéns por me encontrar! Estou sempre aberto a novas
          oportunidades emocionantes no mundo do desenvolvimento frontend, então
          não hesite em entrar em contato através das minhas redes sociais.
        </Paragraph>
      </>
    );
  }

  function renderButtons() {
    return (
      <div
        className="gap-4 hidden sm:flex sm:flex-col justify-center pt-4"
        aria-label="Botão de redes sociais"
      >
        <a href="https://github.com/Felipe-Emanuel" target="_blank">
          <AwesomeButtonSocial type="github" className="w-full sm:text-base">
            <Paragraph
              as="span"
              size="xs"
              className="hidden sm:flex justify-center items-center text-white"
            >
              Siga-me
            </Paragraph>
          </AwesomeButtonSocial>
        </a>
        <a href="https://www.linkedin.com/in/felipe-emanuel-/" target="_blank">
          <AwesomeButtonSocial type="linkedin" className="w-full sm:text-base">
            <Paragraph
              as="span"
              size="xs"
              className="hidden sm:flex justify-center items-center text-white"
            >
              Siga-me
            </Paragraph>
          </AwesomeButtonSocial>
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex gap-1 sm:gap-4">
        <article
          className="
            w-20 h-20 sm:w-56 md:w-80 sm:h-56 md:h-80 rounded-full md:rounded-lg
            border-[3px] p-[0.10rem] border-transparent
            border-pinkLight dark:border-orangeDark
            transition-all duration-300 ease-in"
        >
          <img
            className="h-full w-full rounded-full md:rounded transition-all duration-300 ease-in"
            src="/images/About/perfil.jpeg"
            alt="Foto do desenvolvedor Felipe Emanuel"
          />
          {renderButtons()}
        </article>

        <div className="sm:relative w-[50%] m-auto sm:m-0">
          <div className="flex flex-col gap-1 sm:gap-4 m-auto sm:absolute top-1 left-1">
            <Title
              as="h3"
              title="Felipe Emanuel"
              className="text-xs sm:text-3xl"
              aria-label="Nome do desenvolvedor"
            />
            <Title
              as="h4"
              title="Desenvolvedor Frontend"
              className="font-SecondarySans text-[10px] sm:text-lg"
              aria-label="Cargo do desenvolvedor"
            />
            <div className="hidden sm:block max-w-xl">{renderParagraph()}</div>
          </div>
        </div>
      </div>
      <article className="flex sm:hidden justify-end sm:justify-center md:justify-start pt-2">
        <SocialMediaDropDown aria-label="Botão de redes sociais" />
      </article>
      <div className="block sm:hidden max-w-xl">{renderParagraph()}</div>
    </div>
  );
}
