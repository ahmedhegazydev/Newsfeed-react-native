import React, { useState, useContext, createContext, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const useThemeContext = (): ThemeContextProps =>
  useContext<ThemeContextProps>(ThemeContext);

const defaultValues: ThemeContextProps = {
  theme: "light",
  toggleTheme: () => {},
};
export const ThemeContext = createContext<ThemeContextProps>(defaultValues);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      console.log("dark");
    } else {
      setTheme("light");
      console.log("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
