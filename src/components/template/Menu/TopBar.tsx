import { AvatarUser } from "@layout/AvatarUser";
import { useRouter } from "next/router";
import { Logo } from "@layout/Logo";
import { NavBar } from "./NavBar";
import { useAuth } from "@/data/hook/useAuth";
import { MobileMenu } from "./MobileMenu";
import { useMobileMenu } from "@/data/hook/useMobileMenu";
import { MenuAnimation } from "@/components/animations/menu/MenuAnimation";

export function TopBar() {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const { user } = useAuth();
  const userName = user?.name.split(" ")[0];
  const router = useRouter();

  const path = router.pathname;

  const checkPathLogo = path === "/" ? "flex" : "hidden";

  function renderMenuButton() {
    return (
      <div className="flex sm:hidden z-50">
        <MenuAnimation isClose={isMenuOpen} onClick={() => openMenu()} />
      </div>
    );
  }

  function renderNavBar() {
    return (
      <div className="hidden sm:flex gap-4 items-center">
        <NavBar />
      </div>
    );
  }

  function renderAvatarUser() {
    return (
      <div className={`flex justify-center gap-4 items-center w-fit`}>
        <AvatarUser path="/profile" />
        <p
          className="
            cursor-default hidden lg:flex text-dark dark:text-light 
            text-base font-default font-medium
          "
        >
          Olá, {userName}
        </p>
      </div>
    );
  }

  return (
    <div className={`justify-between flex items-center z-10 relative h-4 lg:h-10`}>
      {renderMenuButton()}
      <MobileMenu isOpen={isMenuOpen} />
      {renderNavBar()}
      <div className={`${checkPathLogo} w-fit`}>
        <Logo />
      </div>
      {renderAvatarUser()}
    </div>
  );
}
