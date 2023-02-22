import "react-awesome-button/dist/styles.css";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AwesomeButtonSocial } from "react-awesome-button";
import { Paragraph } from "@utils/Paragraph";

export const SocialMediaDropDown = () => {
  const [changeIcon, setChangeIcon] = useState(false);

  const setChange = () => setChangeIcon((changeIcon) => !changeIcon);

  const iconAnimate = changeIcon ? "translate-y-0.5" : "translate-y-0";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="m-auto" onMouseEnter={setChange} onMouseLeave={setChange}>
        <Menu.Button className="flex gap-2">
          <Paragraph hover size="xs" className="cursor-pointer">
            Contate-me
          </Paragraph>
          <ChevronDownIcon
            className={`text-black dark:text-white h-5 w-5 flex transition-transform duration-300 ease-in-out ${iconAnimate}`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <div className="block">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="p-4 absolute right-0 sm:left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-light dark:bg-dark/75 shadow-lg">
            <div className="py-1 flex flex-col gap-4 text-xs md:text-sm lg:text-base">
              <Menu.Item>
                <a href="https://github.com/Felipe-Emanuel" target="_blank">
                  <AwesomeButtonSocial
                    type="github"
                    className="w-full sm:text-base"
                  >
                    <Paragraph
                      as="span"
                      size="xs"
                      className="hidden sm:flex justify-center items-center text-white"
                    >
                      Siga-me
                    </Paragraph>
                  </AwesomeButtonSocial>
                </a>
              </Menu.Item>
              <Menu.Item>
                <>
                  <hr />
                  <a
                    href="https://www.linkedin.com/in/felipe-emanuel-/"
                    target="_blank"
                  >
                    <AwesomeButtonSocial
                      type="linkedin"
                      className="w-full sm:text-base"
                    >
                      <Paragraph
                        as="span"
                        size="xs"
                        className="hidden sm:flex justify-center items-center text-white"
                      >
                        Siga-me
                      </Paragraph>
                    </AwesomeButtonSocial>
                  </a>
                </>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};
