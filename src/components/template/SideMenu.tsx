import { useAuth } from "@/data/hook/useAuth";
import { SettingsIcon, HomeIcon, BellIcon, LogoOutIcon } from "@icons/index";
import { useState } from "react";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";


export function SideMenu({}) {
  const { logout } = useAuth()

  const pathsArray = ['/', '/settings', '/news']

  return (
    <aside className="
      flex flex-col
      bg-gray-200 text-gray-200
      dark:bg-gray-900 
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
