import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
    >
      {darkMode ? (
        <>
          <Sun size={18} />
          Mode Terang
        </>
      ) : (
        <>
          <Moon size={18} />
          Mode Gelap
        </>
      )}
    </button>
  );
}