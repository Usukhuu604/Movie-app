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
      } rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 group`}
      onClick={() => handleNavigateToPages("detail", id)}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        {poster && (
          <img
            src={poster}
            alt={`${title} poster`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-2 sm:p-3 space-y-1">
        <p className="font-medium text-xs sm:text-sm text-yellow-600">⭐️{vote_average?.toFixed(1)}/10</p>
        <p className="font-semibold text-sm sm:text-base line-clamp-2 leading-tight">{title}</p>
      </div>
    </div>
  );
};
