"use client";

import { PageTitleMovieZ } from "../common/PageTitleMovieZ";
import { ThemeSwitcher } from "../common/ThemeSwitcher";
import { Genre } from "./Genre";
import { SearchBarForHome } from "./SearchBarForHome";
import { useTheme } from "next-themes";

export const HeaderContent = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-3 gap-y-4">
      <div className="text-[#4338CA]">
        <PageTitleMovieZ />
      </div>

      <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-4 items-center">
        <Genre theme={resolvedTheme ?? "light"} />
        <SearchBarForHome theme={resolvedTheme ?? "light"} />
      </div>

      <ThemeSwitcher />
    </div>
  );
};
