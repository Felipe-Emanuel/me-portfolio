import firebase from "../../firebase/config";
import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import { Project } from "@sections/Project/Project";
import { GetServerSideProps } from "next";
import { AluraIcon, PracticumIcon, UdemyIcon } from "@/components/icons";
import Image from "next/image";
import Me from "../../../public/images/About/perfil.jpeg";

interface ProjectDetailProps {
  normalizedData: string;
  normalizedGoal: string;
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

  const goal = data?.goal;

  const courseCheck = {
    Udemy: "udemy-icon",
    Alura: "alura-icon",
    Practicum: "practicum-icon",
    Felipe: "felipe-icon",
  };

  const icon = () => {
    if (!goal) {
      return null;
    } else if (goal.includes("Udemy")) {
      return courseCheck["Udemy"];
    } else if (goal.includes("Alura")) {
      return courseCheck["Alura"];
    } else if (goal.includes("Practicum")) {
      return courseCheck["Practicum"];
    } else {
      return courseCheck["Felipe"];
    }
  };

  const normalizedData = JSON.stringify(data);

  const iconValue = icon();
  const normalizedGoal = iconValue ? iconValue.toString() : null;

  return { props: { normalizedData, normalizedGoal } };
};

export default function ProjectDetail({
  normalizedData,
  normalizedGoal,
}: ProjectDetailProps) {
  const data: Card = JSON.parse(normalizedData);

  return (
    <Layout pageTitle={`Projeto - ${data.name}`}>
      <Section id="project">
        <Project data={data} normalizedGoal={normalizedGoal} />
      </Section>
    </Layout>
  );
}
