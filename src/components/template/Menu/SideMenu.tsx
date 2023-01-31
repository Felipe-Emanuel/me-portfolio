import { useAuth } from "@/data/hook/useAuth";
import { SettingsIcon, HomeIcon, BellIcon, LogoOutIcon, ComputerIcon, AboutIcon } from "@icons/index";
import { AvatarUser } from "../layout/AvatarUser";
import { Logo } from "../layout/Logo";
import { MenuItem } from "./MenuItem";


export function SideMenu({}) {
  const { logout } = useAuth()

  const pathsArray = ['/', '/settings', '/news', '/projects', '/about']

  return (
    <aside className="
      flex flex-col z-10
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
        <MenuItem path={pathsArray[2]} url="/news" text="Notificações" icon={<BellIcon />} />
        <MenuItem path={pathsArray[3]} url="/projects" text="Projetos" icon={<ComputerIcon />} />
        <MenuItem path={pathsArray[4]} url="/about" text="Sobre" icon={<AboutIcon />} />
      </ul>
      <ul>
        <li>
          <AvatarUser path='/profile' className="ml-4 md:hidden flex"/>
        </li>
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
