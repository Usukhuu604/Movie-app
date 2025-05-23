"use client";

import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";

type Props = {
  endpoint: string;
};

export const ShowSearchResults = ({ endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);

  return (
    <div className="w-full">
      <p className="text-lg mb-5">{data?.results?.length} results are shown</p>

      <div className="grid grid-cols-4 gap-12">
        {data?.results
          ?.slice(0, 8)
          .map((movie: { id: string; title: string; poster_path: string; vote_average: number }) => {
            let poster = movie?.poster_path ? `https://image.tmdb.org/t/p/original${movie?.poster_path}` : null;
            let key = movie?.id;
            return (
              <MoviePoster
                key={key}
                poster={poster}
                id={movie?.id}
                title={movie?.title}
                vote_average={movie?.vote_average}
              />
            );
          })}
      </div>

      {data?.results?.length === 0 && <p>No results found</p>}
    </div>
  );
};
