import { LogoOutIcon } from "@/components/icons";
import { useAuth } from "@/data/hook/useAuth";
import { MenuItem } from "./MenuItem";

interface MobileMenuProps {
  isOpen?: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const { logout } = useAuth();

  const pathsArray = ["/", "/settings", "/about"];

  const openNavBarAnimation = () =>
    isOpen === true ? "translate-x-0" : "-translate-x-64";

  const linkStyle = ` w-full transition-all duration-300 ease-in-out
                      text-white font-default font-semibold
                      hover:text-white/60`;

  return (
    <nav
      className={`overflow-hidden bg-light dark:bg-dark/75 -top-10
        flex sm:hidden absolute -left-10 py-24 pl-[5.5rem]
        h-screen w-72 transition-all duration-300 ease-in-out
        ${openNavBarAnimation()}
      `}
    >
      <div className={`flex flex-col leading-10 w-full justify-between`}>
        <div>
          <MenuItem
            path={pathsArray[0]}
            url="/"
            text="Início"
            className={linkStyle}
          />
          <MenuItem
            path={pathsArray[1]}
            url="/settings"
            text="Ajustes"
            className={linkStyle}
          />
          <MenuItem
            path={pathsArray[2]}
            url="/about"
            text="Sobre"
            className={linkStyle}
          />
        </div>
        <div>
          <hr className="w-screen -translate-x-[5.5rem]" />
          <MenuItem
            onClick={logout}
            text="Sair"
            icon={<LogoOutIcon />}
            className={linkStyle}
          />
        </div>
      </div>
    </nav>
  );
}
