import React, { useState, useEffect, useContext, createContext } from "react";

export const useThemeContext = () => useContext(ThemeContext);

const defaultValues = { theme: "light" };
export const ThemeContext = createContext(defaultValues);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    if (theme == "light") {
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
