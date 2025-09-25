"use client";

import { PageTitleMovieZ } from "../common/PageTitleMovieZ";
import { ThemeSwitcher } from "../common/ThemeSwitcher";
import { Genre } from "./Genre";
import { SearchBarForHome } from "./SearchBarForHome";
import { useTheme } from "next-themes";

export const HeaderContent = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-gray-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 gap-4">
          <div className="flex justify-between items-center w-full lg:w-auto order-1 lg:order-1">
            <div className="text-[#4338CA]">
              <PageTitleMovieZ />
            </div>

            <div className="lg:hidden">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center order-2 lg:order-2 w-full lg:w-auto">
            <Genre theme={resolvedTheme ?? "light"} />
            <SearchBarForHome theme={resolvedTheme ?? "light"} />
          </div>

          <div className="hidden lg:block order-3">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
