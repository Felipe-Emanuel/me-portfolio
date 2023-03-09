import { Layout } from "@layout/Layout";
import { Section } from "@/components/template/layout/Section";
import { ProfileInfo } from "@/components/template/sections/ProfileInfo/ProfileInfo";
import { useProfile } from "@/data/hook/useProfile";
import { GetUserInfo } from "@/components/functions/GetUserInfo";

export default function Profile() {
  const { userName } = useProfile();
  const { helloUser} = GetUserInfo();

  return (
    <Layout
      pageTitle="Perfil do Usuário"
      subtitle="Verifique suas informações"
      title={helloUser}
    >
      <Section id="profile">
        <ProfileInfo userName={userName} />
      </Section>
    </Layout>
  );
}
