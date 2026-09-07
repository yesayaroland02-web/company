import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full border-b border-gray-200 bg-white text-gray-900 transition-colors dark:border-gray-800 dark:bg-[#020617] dark:text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          One Top
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/"
            className="whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About
          </Link>

          <Link
            to="/services"
            className="whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Services
          </Link>

          <Link
            to="/teams"
            className="whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Teams
          </Link>

          <Link
            to="/blogs"
            className="whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Blog
          </Link>

          {/* Create Blog */}
          <Link
            to="/create-blog"
            className="whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
          >
            Create Blog
          </Link>

          <Link
            to="/login"
            className="whitespace-nowrap transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Login
          </Link>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Terang" : "Gelap"}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Dark Mode Mobile */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-[#020617] lg:hidden">
          <div className="flex flex-col gap-2">

            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            >
              Services
            </Link>

            <Link
              to="/teams"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            >
              Teams
            </Link>

            <Link
              to="/blogs"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            >
              Blog
            </Link>

            {/* Create Blog Mobile */}
            <Link
              to="/create-blog"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
            >
              Create Blog
            </Link>

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            >
              Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}