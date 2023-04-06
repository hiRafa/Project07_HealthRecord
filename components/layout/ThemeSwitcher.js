import { useState, useEffect, Fragment } from "react";
import ProfileTop from "../../components/account/ProfileTop";

const ThemeSwitcher = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      //   root.style.setProperty("--color-primary-main", "#48e0bf");
      root.style.setProperty("--color-primary-dark", "#fff");
      root.style.setProperty("--color-primary-light", "#1e546e");
      root.style.setProperty("--color-white", "#1e546e");
      root.style.setProperty("--color-black", "#fff");
    } else {
      //   root.style.setProperty("--color-primary-main", "#48e0bf");
      root.style.setProperty("--color-primary-dark", "#1e6e6e");
      root.style.setProperty("--color-primary-light", "#84e5d0");
      root.style.setProperty("--color-white", "#fff");
      root.style.setProperty("--color-black", "#000");
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Fragment>
      <button onClick={toggleTheme} className={className}>
        Switch Mode
      </button>
    </Fragment>
  );
};

export default ThemeSwitcher;
