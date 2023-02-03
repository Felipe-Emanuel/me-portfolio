import { useEffect, useCallback } from "react";
import { AuthForce } from "@auth/AuthForce";
import { useAppData } from "@hook/useAppData";
import { TopBar } from "@Menu/TopBar";
import { Content } from "@layout/Content";
import { Title } from "../utils/Title";
import { useMobileMenu } from "@/data/hook/useMobileMenu";
import { MenuAnimation } from "@/components/animations/menu/MenuAnimation";
import { Overlay } from "../sliderAnimation/BlackOverlay";

interface LayoutProps {
  title?: string;
  subtitle?: string;
  children?: any;
}

export function Layout({ title, subtitle, children }: LayoutProps) {
  const { isOverlayActive, openMenu, isMenuOpen } = useMobileMenu();
  const { theme } = useAppData();

  return (
    <AuthForce>
      <div
        className={` ${theme}
        flex flex-col h-screen w-screen 
        `}
      >
        <div
          className={`w-full flex flex-col p-10 relative
            bg-light dark:bg-black h-auto
            `}
        >
          {isOverlayActive && <Overlay />}
          <div className="pb-8 fixed z-50">
            <TopBar
              hamburger={
                <MenuAnimation
                  isClose={isMenuOpen}
                  onClick={() => openMenu()}
                />
              }
            />
          </div>
          <Title title={title} subtitle={subtitle} />
          {children}
        </div>
      </div>
    </AuthForce>
  );
}
