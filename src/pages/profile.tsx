import { LogoOutIcon } from "@/components/icons";
import { MenuItem } from "@/components/template/Menu/MenuItem";
import { useAuth } from "@/data/hook/useAuth";
import { Layout } from "@layout/Layout";

export default function Profile() {
  const { logout } = useAuth();
  return (
    <Layout subtitle="teste  profile" title="teste profile">
      <h3>Profile</h3>
        <MenuItem
          onClick={logout}
          text="Sair"
          icon={<LogoOutIcon />}
          className={`
            text-red-600 dark:text-red-400 
            hover:bg-red-400 hover:text-white dark:hover:text-white 
          `}
        />
    </Layout>
  );
}
