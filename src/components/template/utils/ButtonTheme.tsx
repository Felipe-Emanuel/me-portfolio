import { MoonIcon, SunIcon } from "@icons/index";

interface ButtonThemeProps {
  theme: string;
  changeTheme: () => void;
}

export function ButtonTheme({ theme, changeTheme }: ButtonThemeProps) {
  return theme === "dark" ? (
    <div onClick={changeTheme}
        className={`
                flex items-center justify-center pr-10
                text-yellow-300 hover:text-yellow-200 cursor-pointer transition-all
            `}
      >
        {SunIcon()}
      </div>

  ) : (
    <div onClick={changeTheme}
        className={`
                flex items-center justify-center pr-10
                text-gray-600 hover:text-gray-500 cursor-pointer transition-all
            `}
      >
        {MoonIcon()}
      </div>
  );
}
