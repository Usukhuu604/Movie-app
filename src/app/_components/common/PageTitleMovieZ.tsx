"use client";

import { Film } from "lucide-react";
import { useNavigateHomePage } from "@/app/_hooks/useNavigateHomePage";

export const PageTitleMovieZ = () => {
  const handleClickNavigateHomePage = useNavigateHomePage();

  return (
    <div
      className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold italic cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => handleClickNavigateHomePage()}
    >
      <Film className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      <span>Movie Z</span>
    </div>
  );
};
