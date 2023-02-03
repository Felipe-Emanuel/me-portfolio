import { AvatarUser } from "@layout/AvatarUser";
import { useRouter } from "next/router";
import { Logo } from "@layout/Logo";
import { NavBar } from "./NavBar";
import { useAuth } from "@/data/hook/useAuth";
import { MobileMenu } from "./MobileMenu";
import { useMobileMenu } from "@/data/hook/useMobileMenu";

interface TopBarProps {
  hamburger: any;
}

export function TopBar({ hamburger }: TopBarProps) {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const { user } = useAuth();
  const userName = user?.name.split(" ")[0];
  const router = useRouter();

  const path = router.pathname;

  const checkPathLogo = path === "/" ? "flex" : "hidden";
  const checkPathUserName = path === "/" ? "text-light" : "dark:text-light text-dark";

  function renderMenuButton() {
    return (
      <div onClick={() => openMenu()} className="flex sm:hidden z-50">
        {hamburger}
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
          className={`
          cursor-default hidden lg:flex  
          text-base font-default font-medium
          ${checkPathUserName}
        `}
        >
          Olá, {userName}
        </p>
      </div>
    );
  }

  return (
    <div
      className={` left-0 px-10 top-0
      justify-between flex items-stretch  w-full z-20 fixed`}
    >
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
