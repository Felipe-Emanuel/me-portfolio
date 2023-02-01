import {
  SettingsIcon,
  HomeIcon,
  LogoOutIcon,
  AboutIcon } from "@icons/index";
import { useAuth } from "@hook/useAuth";
import { AvatarUser } from "@layout/AvatarUser";
import { Logo } from "@layout/Logo";
import { MenuItem } from "@Menu/MenuItem";


export function SideMenu({}) {
  const { logout } = useAuth()

  const pathsArray = ['/', '/settings', '/about' ]

  return (
    <aside className="
      hidden lg:flex flex-col z-10
      bg-gray-200 text-gray-200
      dark:bg-darkSecondary 
    ">
      <div
        className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20
        `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem path={pathsArray[0]} url="/" text="Início" icon={<HomeIcon />} />
        <MenuItem path={pathsArray[1]} url="/settings" text="Ajustes" icon={<SettingsIcon />} />
        <MenuItem path={pathsArray[2]} url="/about" text="Sobre" icon={<AboutIcon />} />
      </ul>
      <ul>
        <MenuItem
          onClick={logout}
          text="Sair"
          icon={<LogoOutIcon />}
          className={`
            text-red-600 dark:text-red-400 
            hover:bg-red-400 hover:text-white dark:hover:text-white 
          `}
        />
      </ul>
    </aside>
  );
}
