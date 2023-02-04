import { NavBar } from "./NavBar";
import { MobileMenu } from "./MobileMenu";
import { useMobileMenu } from "@/data/hook/useMobileMenu";

import { Dropdown } from "./Dropdown";
import { AvatarUser } from "../layout/AvatarUser";

interface TopBarProps {
  hamburger: any;
}

export function TopBar({ hamburger }: TopBarProps) {
  const { isMenuOpen, openMenu } = useMobileMenu();

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
        left-0 px-10 top-0 py-3 w-full backdrop-blur-sm
        bg-gradient-to-b from-black via-black/50 to-transparent
        justify-between flex items-center z-20 fixed
      `}
    >
      {renderMenuButton()}
      <MobileMenu isOpen={isMenuOpen} />
      {renderNavBar()}
      {renderAvatarUser()}
    </div>
  );
}
