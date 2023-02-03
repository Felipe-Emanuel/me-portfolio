import { RenderSlider } from "@/components/template/sliderAnimation/RenderSlider";
import { Layout } from "@layout/Layout";

export default function Home() {
  return (
    <Layout>
      <RenderSlider />
      <section className="h-screen ">
        <h3 className="text-2xl text-red-800 z-50">teste</h3>
      </section>
    </Layout>
  );
}
