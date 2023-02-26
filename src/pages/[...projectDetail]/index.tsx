import firebase from "../../firebase/config";
import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import { Project } from "@sections/Project/Project";
import { GetServerSideProps, GetServerSidePropsContext, Redirect } from "next";

interface Card {
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
}

interface ProjectDetailProps {
  normalizedData: string;
  normalizedGoal?: string | null;
}

interface CourseCheck {
  [key: string]: string;
}

const courseCheck: CourseCheck = {
  Udemy: "udemy-icon",
  Alura: "alura-icon",
  Practicum: "practicum-icon",
  RocketSeat: "rocketseat-icon",
  Felipe: "felipe-icon",
};

export const getServerSideProps: GetServerSideProps<ProjectDetailProps> = async (
  context: GetServerSidePropsContext
) => {
  const { projectDetail } = context.params ?? {};

  if (!projectDetail || !projectDetail[1]) {
    const redirect: Redirect = {
      destination: "/",
      permanent: false,
    };
    return { redirect };
  }

  try {
    const snapshot = await firebase
      .firestore()
      .collection("recently")
      .where("lastView.name", "==", projectDetail[1])
      .get();

    const data = snapshot.docs.map((doc) => doc.data().lastView)[0];
    const goal = data?.goal;

    const icon = () => {
      if (!goal) {
        return null;
      } else if (goal.includes("Udemy")) {
        return courseCheck["Udemy"];
      } else if (goal.includes("Alura")) {
        return courseCheck["Alura"];
      } else if (goal.includes("Practicum")) {
        return courseCheck["Practicum"];
      } else if(goal.includes("RocketSeat")){
        return courseCheck["RocketSeat"]
      } else {
        return courseCheck["Felipe"];
      }
    };

    const iconValue = icon();
    const normalizedGoal = iconValue ? iconValue.toString() : null;
    const normalizedData = JSON.stringify(data);

    return { props: { normalizedData, normalizedGoal } };
  } catch (error) {
    console.error(error);
    const redirect: Redirect = {
      destination: "/",
      permanent: false,
    };
    return { redirect };
  }
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
