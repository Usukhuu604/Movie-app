"use client";
import { useHandleGotoDetails } from "@/app/_hooks/useNavigateDetails";

type MoviePosterProps = {
  id: string;
  poster: string | null;
  title: string;
  vote_average: number;
  uniqueKey: string;
};

export const MoviePoster = ({ id, poster, title, vote_average, uniqueKey }: MoviePosterProps) => {
  const handleGotoDetails = useHandleGotoDetails();

  return (
    <div key={uniqueKey} className="w-full h-auto bg-[#F4F4F5] rounded-lg text-[18px]" onClick={() => handleGotoDetails(id)}>
      {poster && <img src={poster} alt="poster" className="bg-center bg-cover " />}
      <div className="w-full p-4 mb-5">
        <p>⭐️{vote_average?.toFixed(1)}/10</p>
        <p>{title}</p>
      </div>
    </div>
  );
};
