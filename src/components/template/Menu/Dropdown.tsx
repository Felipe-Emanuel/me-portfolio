import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MenuItem } from "@Menu/MenuItem";
import { useAuth } from "@/data/hook/useAuth";
import { LogoOutIcon } from "@/components/icons";
import { ButtonTheme } from "@/components/template/utils/ButtonTheme";
import { useAppData } from "@/data/hook/useAppData";

export const Dropdown = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const { theme, changeTheme } = useAppData();
  const { logout, user } = useAuth();
  const userName = user?.name.split(" ")[0];

  const linkStyle = ` w-full transition-all duration-300 ease-in-out
                      text-white font-default font-semibold
                      hover:text-white/60`;

  const setChange = () => setChangeIcon((changeIcon) => !changeIcon);

  const iconAnimate = changeIcon ? "translate-y-0.5" : "translate-y-0";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onMouseEnter={setChange} onMouseLeave={setChange}>
        <Menu.Button className="flex gap-4 w-full justify-center items-center rounded-md">
          <p
            className={`
            cursor-pointer hidden lg:flex text-white
            text-base font-default font-medium
            `}
          >
            Olá, {userName}
          </p>
          <ChevronDownIcon
            className={`text-white h-5 w-5 hidden sm:flex transition-transform duration-300 ease-in-out ${iconAnimate}`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <div className="hidden sm:block">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="p-4 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-light dark:bg-dark/75 shadow-lg">
            <div className="py-1 flex flex-col gap-4 text-xs md:text-sm lg:text-base">
              <Menu.Item>
                <div className="flex items-center">
                  <MenuItem
                    url="/settings"
                    path="/settings"
                    text="Ajustes"
                    className={linkStyle}
                  />
                  <ButtonTheme theme={theme!} changeTheme={changeTheme!} />
                </div>
              </Menu.Item>
              <Menu.Item>
                <>
                  <hr />
                  <MenuItem
                    onClick={logout}
                    text="Sair"
                    icon={<LogoOutIcon />}
                    className={linkStyle}
                  />
                </>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};
