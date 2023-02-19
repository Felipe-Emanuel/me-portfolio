import { Layout } from "@layout/Layout";
import { useAuth } from "@hook/useAuth";

export default function About() {
  const { user } = useAuth()
  const userName = user?.name === undefined ? 'usuário!' : user?.name

  return (
    <Layout pageTitle="Sobre Felipe Emanuel | Entre em contato" title={`Olá, ${userName}!`} subtitle="Entre em contato comigo...">
      
      <h3>Conteúdo</h3>
    </Layout>
  );
}
