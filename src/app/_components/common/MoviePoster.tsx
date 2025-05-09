"use client";

import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";

export const MoviePoster = ({ id, poster, title, vote_average }: Movie) => {
  const handleNavigateToPages = useNavigateToPages();

  return (
    <div
      className="w-full bg-[#F4F4F5] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => handleNavigateToPages("detail", id)}
    >
      {poster && <img src={poster} alt="poster" className=" w-full" />}
      <div className="w-full p-5 space-y-1">
        <p className="font-medium text-base">⭐️{vote_average?.toFixed(1)}/10</p>
        <p className="text-black font-semibold text-lg ">{title}</p>
      </div>
    </div>
  );
};
