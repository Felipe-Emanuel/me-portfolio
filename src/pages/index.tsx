import api from "@/data/services/api";
import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import { KeepNavigation } from "@sections/keepNavigate/KeepNavigation";
import { RenderSlider } from "@sliderAnimation/mainSlider/RenderSlider";
import { LastProject } from "@sections/LastProject/LastProject";
import { useEffect, useState } from "react";

type Data = {
  images: any
} 

export default function Home() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    const req = async () => {
      const res = await api.get("api/projects", {
        params: {
          limit: 1,
        },
      });
  
      const data = await res.data
      setData(data)
    }
  
    req()
  }, [])
  
  return (
    <Layout pageTitle="Projetos | Portfólio">
      <RenderSlider />
      <Section id="continue-your-navigation">
        <KeepNavigation />
      </Section>
      <Section id="last-project">
        <LastProject data={data?.images} />
      </Section>
    </Layout>
  );
}
