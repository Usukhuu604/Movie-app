"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="border border-gray-300 rounded-lg size-[36px] flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
    </div>
  );
};
