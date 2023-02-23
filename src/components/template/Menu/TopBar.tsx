import { NavBar } from "./NavBar";
import { MobileMenu } from "./MobileMenu";
import { useMobileMenu } from "@/data/hook/useMobileMenu";
import { ReactNode } from "react";
import { Dropdown } from "./Dropdown";
import { AvatarUser } from "../layout/AvatarUser";
import { useRouter } from "next/router";

interface TopBarProps {
  hamburger: ReactNode;
}

export function TopBar({ hamburger }: TopBarProps) {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const path = useRouter()

  const checkPath = path.asPath === '/' ? 'bg-transparent' : 'bg-light/50'

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
          <Dropdown />
      </div>
    );
  }

  return (
    <div
      className={`
        left-0 px-10 top-0 py-3 w-full backdrop-blur-sm dark:bg-transparent
        justify-between flex items-center z-50 fixed ${checkPath}
      `}
    >
      {renderMenuButton()}
      <MobileMenu isOpen={isMenuOpen} />
      {renderNavBar()}
      {renderAvatarUser()}
    </div>
  );
}
