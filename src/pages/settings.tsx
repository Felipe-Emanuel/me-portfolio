import { ButtonTheme } from "@/components/template/utils/ButtonTheme";
import { useAppData } from "@/data/hook/useAppData";
import { Layout } from "@layout/Layout";

export default function Settings() {
  const { theme, changeTheme } = useAppData();

  return (
    <Layout title="Configurações" subtitle="Mais Configurações">
      <ButtonTheme theme={theme!} changeTheme={changeTheme!} />

      <h3>Conteúdo</h3>

    </Layout>
  );
}
