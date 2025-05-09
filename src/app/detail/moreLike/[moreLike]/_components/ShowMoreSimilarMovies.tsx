"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";

type Props = {
  movieId: string;
};
export const ShowMoreSimilarMovies = ({ movieId }: Props) => {
  const { data, isLoading } = useFetchClientData(`/movie/${movieId}/similar?language=en-US`);

  return (
    <div className="mx-30 my-20 ">
      <p className="font-bold text-3xl mb-10">More Like</p>
      <div className="grid grid-cols-5  gap-10">
        {!isLoading ? (
          data?.results?.map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
            let key = movie?.id;

            return <MoviePoster key={key} poster={poster} id={movie.id} title={movie.title} vote_average={movie.vote_average} />;
          })
        ) : (
          <div className=" w-full h-auto flex items-center">
            <Skeleton className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
};
