import { Section } from "@layout/Section";
import { Layout } from "@layout/Layout";
import { KeepNavigation } from "@sections/keepNavigate/KeepNavigation";
import { RenderSlider } from "@/components/template/sliderAnimation/mainSlider/RenderSlider";

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
