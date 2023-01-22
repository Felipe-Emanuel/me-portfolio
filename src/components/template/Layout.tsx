import { useAppData } from "@/data/hook/useAppData";
import { AuthForce } from "../auth/AuthForce";
import { Content } from "./Content";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

interface LayoutProps {
  title: string;
  subtitle: string;
  children: any;
}

export function Layout({ title, subtitle, children }: LayoutProps) {
  const { theme, changeTheme } = useAppData();

  return (
    <AuthForce >

    <div
      className={` ${theme}
        flex h-screen w-screen
        `}
        >
      <SideMenu />
      <div
        className={`
        flex flex-col w-full p-7
        bg-gray-300 dark:bg-gray-800`}
        >
        <TopBar title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
        </AuthForce>
  );
}
