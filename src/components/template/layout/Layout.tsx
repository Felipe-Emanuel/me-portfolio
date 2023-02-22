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

  const darkMode = {
    background:
      "linear-gradient(106.06deg, #000000 59.02%, rgba(4, 1, 6, 0.981065) 65.78%, rgba(9, 1, 13, 0.958322) 70.67%, rgba(13, 2, 20, 0.93597) 75.49%, rgba(18, 2, 27, 0.915437) 79.62%, rgba(23, 3, 35, 0.91) 81.86%, rgba(19, 2, 29, 0.900826) 83.83%, rgba(15, 2, 23, 0.911299) 86.41%, rgba(10, 1, 15, 0.924743) 90.61%, rgba(0, 0, 0, 0.95) 105.7%)",
  };
  const lightMode = {
    background:
      "linear-gradient(113.02deg, #BBBBBB 0%, #FFFFFF 62.35%, #FFFFFF 67.49%, #BBBBBB 122.42%, rgba(187, 187, 187, 0.76) 122.42%)",
  };

  const checkTheme = theme === "dark" ? darkMode : lightMode;

  return (
    <AuthForce>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {isOverlayActive && <Overlay />}
        <main className={theme}>
          <div
            style={checkTheme}
            className={` 
            p-10 relative flex flex-col h-screen w-screen
             ${checkOverlay}
          `}
          >

            <TopBar
              hamburger={
                <MenuAnimation
                  isClose={isMenuOpen}
                  onClick={() => openMenu()}
                />
              }
            />
            {title && (
              <div className="pt-14 pb-7">
                <Title title={title} subtitle={subtitle} />
              </div>
            )}
            {children}
          </div>
        </main>
    </AuthForce>
  );
}
