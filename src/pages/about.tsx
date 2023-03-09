import { Layout } from "@layout/Layout";
import { Section } from "@layout/Section";
import { AboutMe } from "@sections/About/AboutMe";
import { Skills } from "@sections/About/Skills";
import { GetUserInfo } from "@/components/functions/GetUserInfo";

export default function About() {
  const { helloUser} = GetUserInfo();

  return (
    <Layout
      pageTitle="Sobre Felipe Emanuel | Entre em contato"
      title={helloUser}
    >
      <Section id="about">
        <AboutMe />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
    </Layout>
  );
}
