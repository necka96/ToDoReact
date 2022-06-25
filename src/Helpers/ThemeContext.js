import { createContext, useContext, useEffect, useState } from "react";
import colorThemes from "../colorThemes";
const Theme = createContext();
const UpdateTheme = createContext();
export const useTheme = () => {
  return useContext(Theme);
};
export const useUpdateTheme = () => {
  return useContext(UpdateTheme);
};
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(
    0 || JSON.parse(localStorage.getItem("DarkMode"))
  );
  const themes = colorThemes[theme];

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(theme));
  }, [theme]);
  return (
    <Theme.Provider value={themes}>
      <UpdateTheme.Provider value={setTheme}>{children}</UpdateTheme.Provider>
    </Theme.Provider>
  );
};

export default ThemeContext;
