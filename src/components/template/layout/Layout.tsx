import { useEffect, useCallback } from "react";
import { AuthForce } from "@auth/AuthForce";
import { useAppData } from "@hook/useAppData";
import { TopBar } from "@Menu/TopBar";
import { Title } from "../utils/Title";
import { useMobileMenu } from "@/data/hook/useMobileMenu";
import { MenuAnimation } from "@/components/animations/menu/MenuAnimation";
import { Overlay } from "../sliderAnimation/mainSlider/BlackOverlay";
import Head from "next/head";

interface LayoutProps {
  pageTitle: string;
  title?: string;
  subtitle?: string;
  children?: any;
}

export function Layout({ title, subtitle, children, pageTitle }: LayoutProps) {
  const { isOverlayActive, openMenu, isMenuOpen } = useMobileMenu();
  const { theme } = useAppData();

  const checkOverlay =
    isOverlayActive === true
      ? "overflow-hidden"
      : "overflow-y-auto overflow-x-hidden";

  return (
    <AuthForce>
      <div
        className={` ${theme}
        flex flex-col h-screen w-screen
        `}
      >
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <div
          className={`flex flex-col p-10 relative
            bg-light dark:bg-dark ${checkOverlay}
          `}
        >
          {isOverlayActive && <Overlay />}
          <div className="absolute pb-10 z-50">
            <TopBar
              hamburger={
                <MenuAnimation
                  isClose={isMenuOpen}
                  onClick={() => openMenu()}
                />
              }
            />
          </div>
          {title && (
            <div className="py-14">
              <Title title={title} subtitle={subtitle} />
            </div>
          )}
          {children}
        </div>
      </div>
    </AuthForce>
  );
}
