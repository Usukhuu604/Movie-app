"use client";

import { ShowFullDetailsOfSkeleton } from "../details-skeleton/ShowFullDetailsOfSkeleton";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { ArrowRight } from "lucide-react";
import { useNavigateMoreLikeThis } from "@/app/_hooks/useNavigateMoreLikeThis";

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
  const handleGotoMoreLikeThis = useNavigateMoreLikeThis();
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-4xl font-bold">More like this</p>
        <p className="flex text-lg text-gray-700 items-center gap-2 cursor-pointer" onClick={() => handleGotoMoreLikeThis(["a"])}>
          See more <ArrowRight />
        </p>
      </div>

      <div className="grid grid-cols-5 grod-rows-4 gap-8">
        {!isLoading ? (
          relatedMovies?.slice(0, 5).map((movie: Movie) => {
            let poster = movie?.poster_path ? `https://image.tmdb.org/t/p/original${movie?.poster_path}` : null;
            return (
              <MoviePoster uniqueKey={movie.id} poster={poster} id={movie?.id} title={movie?.title} vote_average={movie?.vote_average} />
            );
          })
        ) : (
          <ShowFullDetailsOfSkeleton />
        )}
      </div>
    </div>
  );
};
