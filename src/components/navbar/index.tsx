import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav className="border-b border-gray-200 bg-white text-gray-900 transition-colors dark:border-gray-800 dark:bg-[#020617] dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          One Top
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About
          </Link>

          <Link
            to="/services"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Services
          </Link>

          <Link
            to="/teams"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Teams
          </Link>

          <Link
            to="/blogs"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Blog
          </Link>

          {/* Create Blog */}
          <Link
            to="/create-blog"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
          >
            Create Blog
          </Link>

          <Link
            to="/login"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Login
          </Link>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}

            {darkMode ? "Terang" : "Gelap"}
          </button>
        </div>
      </div>
    </nav>
  );
}