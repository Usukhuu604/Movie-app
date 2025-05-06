"use client";

import { Film } from "lucide-react";
import { useNavigateHomePage } from "@/app/_hooks/useNavigateHomePage";

export const PageTitleMovieZ = () => {
  const handleClickNavigateHomePage = useNavigateHomePage();

  return (
    <div
      className="flex gap-x-2 text-2xl text-center font-bold italic text-[#4338CA] cursor-pointer px-10 py-3"
      onClick={() => handleClickNavigateHomePage()}
    >
      <Film className="" />
      <p>Movie Z</p>
    </div>
  );
};
