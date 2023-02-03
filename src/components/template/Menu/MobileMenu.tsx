import { useMobileMenu } from "@/data/hook/useMobileMenu";
import { MenuItem } from "./MenuItem";

interface MobileMenuProps {
  isOpen?: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const pathsArray = ["/", "/settings", "/about"];

  const openNavBarAnimation = () =>
    isOpen === true ? "translate-x-0" : "-translate-x-64";

  const linkStyle = `hover:bg-white/95 w-full text-center transition-all duration-300 ease-in-out
                      dark:hover:bg-dark/50 text-dark dark:text-light`;

  return (
    <nav
      className={`
        flex sm:hidden absolute -left-20  
        h-screen w-72 transition-all duration-300 ease-in-out bg-white/75 dark:bg-dark/75
        ${openNavBarAnimation()}
      `}
    >
      <div
        className={`flex flex-col justify-center items-center leading-10 w-full `}
      >
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
    </nav>
  );
}
