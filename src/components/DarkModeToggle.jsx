import { useState } from "react";

const DarkModeToggle = () => {
  const storedDarkMode = localStorage.getItem("darkMode") === "dark";

  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleDarkMode = () => {

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
      setIsDarkMode(false);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-16 h-8 bg-gray-200 rounded-full shadow-inner flex items-center justify-start dark:justify-end transition-all duration-300">
      <div className="absolute left-1 top-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity duration-300 dark:opacity-0">
        🌞
      </div>
      <div className="absolute right-1 top-1 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-secondaryColor shadow-lg transition-opacity duration-300 opacity-0 dark:opacity-100">
        🌙
      </div>
    </button>
  );
};

export default DarkModeToggle;
