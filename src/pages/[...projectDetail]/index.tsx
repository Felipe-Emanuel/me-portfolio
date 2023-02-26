import firebase from "../../firebase/config";
import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import { Project } from "@sections/Project/Project";
import { GetServerSideProps } from "next";

interface ProjectDetailProps {
  normalizedData: string;
}

type Card = {
  acessLlink: string;
  gitLlink: string;
  id: string;
  image: string;
  name: string;
  subtitle: string;
  techs: string[];
  original: boolean;
  responsive: boolean;
  goal: string;
  collaborators: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { projectDetail } = context.params!;

  if (!projectDetail![1]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data = await firebase
    .firestore()
    .collection("recently")
    .where("lastView.name", "==", projectDetail![1])
    .get()
    .then((snapshot) => {
      const data: any = snapshot.docs.map((doc) => doc.data().lastView);
      return data[0];
    });

  const normalizedData = JSON.stringify(data);

  return { props: { normalizedData } };
};

export default function ProjectDetail({ normalizedData }: ProjectDetailProps) {
  const data: Card = JSON.parse(normalizedData);
  
  return (
    <Layout pageTitle={`Projeto - ${data.name}`}>
      <Section id="project">
        <Project data={data} />
      </Section>
    </Layout>
  );
}
