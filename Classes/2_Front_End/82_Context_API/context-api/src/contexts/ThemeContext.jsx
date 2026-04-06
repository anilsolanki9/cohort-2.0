import { createContext, useState } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};
