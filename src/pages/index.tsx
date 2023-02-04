import { RenderSlider } from "@/components/template/sliderAnimation/RenderSlider";
import { Layout } from "@layout/Layout";

export default function Home() { 
  return (
    <Layout>
      <RenderSlider />
      <section className="h-screen z-10">
        <h3 className="text-2xl text-red-800">teste</h3>
      </section>
    </Layout>
  );
}
