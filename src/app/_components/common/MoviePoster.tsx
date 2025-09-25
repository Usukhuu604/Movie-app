"use client";

import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";
import { useTheme } from "next-themes";

type Props = {
  id: string;
  poster: string | null;
  title: string;
  vote_average: number;
};

export const MoviePoster = ({ id, poster, title, vote_average }: Props) => {
  const handleNavigateToPages = useNavigateToPages();
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`w-full ${
        resolvedTheme == "light" ? "bg-[#F4F4F5] text-black" : "bg-gray-800 text-white"
      }  rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow`}
      onClick={() => handleNavigateToPages("detail", id)}
    >
      {poster && <img src={poster} alt="poster" className=" w-full h-auto object-cover" />}
      <div className="w-full p-3 sm:p-4 md:p-5 space-y-1">
        <p className="font-medium text-sm sm:text-base">⭐️{vote_average?.toFixed(1)}/10</p>
        <p className=" font-semibold text-base sm:text-lg ">{title}</p>
      </div>
    </div>
  );
};
