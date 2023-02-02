import { MoonIcon, SunIcon } from "@icons/index";

interface ButtonThemeProps {
  theme: string;
  changeTheme: () => void;
}

export function ButtonTheme({ theme, changeTheme }: ButtonThemeProps) {
  const sizeIcon = 4;

  return theme === "dark" ? (
    <div
      onClick={changeTheme}
      className={`
            flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-10 md:w-24 h-4 md:h-8 p-1 py-2 lg:py-0 rounded-full
        `}
    >
      <div
        className={`
                flex items-center justify-center
                bg-white text-yellow-600
                w-4 md:w-6 h-4 md:h-6 rounded-full
            `}
      >
        {SunIcon(sizeIcon)}
      </div>
      <div
        className={`
                hidden md:flex items-center ml-2
                text-white
            `}
      >
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={changeTheme}
      className={`
            flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-10 md:w-24 h-4 md:h-8 p-1 py-2 rounded-full
        `}
    >
      <div
        className={`
                hidden md:flex items-center mr-1
                text-light
            `}
      >
        <span className="text-sm">Escuro</span>
      </div>
      <div
        className={`
                flex items-center justify-center
                bg-black text-light
                w-4 md:w-6 h-4 md:h-6 rounded-full
            `}
      >
        {MoonIcon(sizeIcon)}
      </div>
    </div>
  );
}
