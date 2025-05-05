"use client";

import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useHandleGotoDetails } from "@/app/_hooks/useHandleGotoDetails";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  endpoint: string;
};

export const ShowSearchResults = ({ endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);
  const handleClickgotoDetail = useHandleGotoDetails();

  return (
    <div>
      <p className="text-lg">{data?.results?.length} results are shown</p>

      <div className="grid grid-cols-4 gap-4">
        {isLoading && <Skeleton />}
        {data?.results?.map((movie: { id: string; title: string; poster_path: string; vote_average: number }) => {
          let poster = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : null;

          return (
            <div
              key={movie.id}
              className="w-50 h-auto bg-[#F4F4F5] rounded-lg text-[18px] shadow-md"
              onClick={() => handleClickgotoDetail(movie.id)}
            >
              {poster && <img src={poster} alt="" className="bg-cover" />}
              <div className="w-full p-4 mb-5">
                <p>⭐️{movie?.vote_average?.toFixed(1)}/10</p>
                <p>{movie.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {data?.results?.length === 0 && <p>No results found</p>}
    </div>
  );
};
