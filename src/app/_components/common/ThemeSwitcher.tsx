"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:text-white">
        <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="border border-gray-300 dark:border-gray-600 rounded-lg w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-white"
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
    </button>
  );
};
