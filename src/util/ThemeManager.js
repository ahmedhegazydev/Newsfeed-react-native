import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

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
