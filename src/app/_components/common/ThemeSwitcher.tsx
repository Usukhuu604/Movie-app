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
      <div className="border border-gray-300 rounded-lg size-[36px] flex items-center justify-center cursor-pointer">
        <Sun />
      </div>
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="border border-gray-300 rounded-lg size-[36px] flex items-center justify-center cursor-pointer "
    >
      {isDark ? <Sun /> : <Moon />}
    </div>
  );
};
