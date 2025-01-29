import { useEffect } from "react";
import { useTheme } from "./context/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <header className="app-header">
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
};
