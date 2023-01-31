import { Layout } from "@/components/template/layout/Layout";
import { useAuth } from "@/data/hook/useAuth";

export default function About() {
  const { user } = useAuth()
  const userName = user?.name === undefined ? 'usuário!' : user?.name

  return (
    <Layout title={`Olá, ${userName}!`} subtitle="Entre em contato comigo...">
      <h3>Conteúdo</h3>
    </Layout>
  );
}
