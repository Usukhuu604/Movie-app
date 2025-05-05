"use client";

import { ShowFullDetailsOfSkeleton } from "../details-skeleton/ShowFullDetailsOfSkeleton";
import { useRouter } from "next/navigation";

type Movie = {
  poster_path: string | null;
  title: string;
  id: string;
  vote_average: number;
};

type similarMovies = {
  relatedMovies: Movie[];
  isLoading: boolean;
};

export const MoreLikeThis = ({ relatedMovies, isLoading }: similarMovies) => {
  const router = useRouter();

  const handleClickgotoDetail = (movieId: string) => () => {
    router.replace(`/detail/${movieId}`);
  };
  return (
    <div className="grid grid-cols-5 grod-rows-4 gap-8">
      {!isLoading ? (
        relatedMovies?.map((movie: Movie) => {
          let poster = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : null;

          return (
            <div key={movie.id} className="w-full h-auto bg-[#F4F4F5] rounded-lg text-[18px]" onClick={handleClickgotoDetail(movie.id)}>
              {poster && <img src={poster} alt="Movie Poster" />}
              <div className="w-full p-4 mb-5">
                <p>⭐️{movie?.vote_average?.toFixed(1)}/10</p>
                <p>{movie.title}</p>
              </div>
            </div>
          );
        })
      ) : (
        <ShowFullDetailsOfSkeleton />
      )}
    </div>
  );
};
