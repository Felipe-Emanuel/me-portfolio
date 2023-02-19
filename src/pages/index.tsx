import api from "@/data/services/api";
import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import { KeepNavigation } from "@sections/keepNavigate/KeepNavigation";
import { RenderSlider } from "@sliderAnimation/mainSlider/RenderSlider";
import { LastProject } from "@sections/LastProject/LastProject";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const req = await api.get("/api/images", {
    params: {
      limit: 1,
    },
  });

  const data = JSON.stringify(await req.data);

  return {
    props: { data },
    revalidate: 60 * 1440,
  };
};

interface HomeProps {
  data: string;
}

export default function Home(data: HomeProps) {
  console.log('Estou trabalhando para melhorar a renderização dos componentes! Espero que esteja melhor em breve...')
  const parseData = JSON.parse(data.data);

  return (
    <Layout pageTitle="Projetos | Portfólio">
      <RenderSlider />
      <Section id="continue-your-navigation">
        <KeepNavigation />
      </Section>
      <Section id="last-project">
        <LastProject data={parseData} />
      </Section>
    </Layout>
  );
}