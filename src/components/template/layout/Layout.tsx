import { AuthForce } from "@auth/AuthForce";
import { useAppData } from "@hook/useAppData";
import { TopBar } from "@Menu/TopBar";
import { SideMenu } from "@Menu/SideMenu";
import { Content } from "@layout/Content";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export function Layout({ title, subtitle, children }: LayoutProps) {
  const { theme } = useAppData();

  return (
    <AuthForce>
      <div
        className={` ${theme}
        flex h-screen w-screen
        `}
      >
        <SideMenu />
        <div
          className={`
            flex flex-col w-full p-7
            bg-light dark:bg-dark`}
          >
          <TopBar title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </div>
      </div>
    </AuthForce>
  );
}
