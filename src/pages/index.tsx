import { Section } from "@layout/Section";
import { RenderSlider } from "@sliderAnimation/RenderSlider";
import { Layout } from "@layout/Layout";
import { KeepNavigation } from "@sections/keepNavigate/KeepNavigation";

export default function Home() { 
  return (
    <Layout>
      <RenderSlider />
      <Section id="continue-your-navigation">
        <KeepNavigation />
      </Section>
    </Layout>
  );
}
