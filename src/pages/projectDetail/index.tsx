import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import Project from "@sections/Project/Project";

export default function ProjectDetail(){

    return (
        <Layout pageTitle="Nome do projeto" title="Nome do Projeto">
            <Section id="project">
                <Project />
            </Section>
        </Layout>
    )
}