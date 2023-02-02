import { createContext, useEffect, useState } from "react";

// type Theme = "dark" | "";

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}

export const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children }: any) {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    const newTheme = theme === "" ? "dark" : ""
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const themevalue = localStorage.getItem('theme')
    setTheme(themevalue!)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
