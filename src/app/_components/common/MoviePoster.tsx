"use client";

import { useHandleGotoDetails } from "@/app/_hooks/useNavigateDetails";

type MoviePosterProps = {
  id: string;
  poster: string | null;
  title: string;
  vote_average: number;
};

export const MoviePoster = ({ id, poster, title, vote_average }: MoviePosterProps) => {
  const handleGotoDetails = useHandleGotoDetails();

  return (
    <div
      className="w-full bg-[#F4F4F5] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => handleGotoDetails(id)}
    >
      {poster && <img src={poster} alt="poster" className=" w-full" />}
      <div className="w-full p-5 space-y-1">
        <p className="font-medium text-base">⭐️{vote_average?.toFixed(1)}/10</p>
        <p className="text-black font-semibold text-lg ">{title}</p>
      </div>
    </div>
  );
};
