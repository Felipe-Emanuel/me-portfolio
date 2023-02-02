import { AuthForce } from "@auth/AuthForce";
import { useAppData } from "@hook/useAppData";
import { TopBar } from "@Menu/TopBar";
import { Content } from "@layout/Content";
import { Title } from "../utils/Title";

interface LayoutProps {
  title?: string;
  subtitle?: string;
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
        <div
          className={`
            flex flex-col w-full p-10 overflow-hidden
            bg-light dark:bg-black`}
        >
          <TopBar />
          <Title title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </div>
      </div>
    </AuthForce>
  );
}
