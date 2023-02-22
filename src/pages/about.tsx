import { Layout } from "@layout/Layout";
import { useAuth } from "@hook/useAuth";
import { Section } from "@layout/Section";
import { AboutMe } from "@sections/About/AboutMe";
import { Skills } from "@sections/About/Skills";

export default function About() {
  const { user } = useAuth();
  const userName = user?.name !== null && user?.name;

  return (
    <Layout
      pageTitle="Sobre Felipe Emanuel | Entre em contato"
      title={
        user?.name === null || false || undefined ? "Olá!" : `Olá, ${userName}!`
      }
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
