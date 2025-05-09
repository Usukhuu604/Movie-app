"use client";

import React, { useState } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

type Props = {
  genre_id: string;
};

export const ShowMoviesByGenre = ({ genre_id }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchClientData(`/discover/movie?language=en&with_genres=${genre_id}&page=${page}`);

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };
  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <div className="mx-30 my-20 ">
      {/* <p className="font-bold text-3xl mb-10">{toCapitalize(section)}</p> */}
      <div className="grid grid-cols-5  gap-8"></div>

      <div className="grid grid-cols-5 gap-8">
        {!isLoading ? (
          data?.results?.slice(0, 100).map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            let key = movie?.id;

            return <MoviePoster key={key} poster={poster} id={movie.id} title={movie.title} vote_average={movie.vote_average} />;
          })
        ) : (
          <div className=" w-full h-auto flex items-center">
            <Skeleton className="w-full h-full" />
          </div>
        )}
      </div>
      <div className="w-full border mt-10 ">
        {/* create new component in common folder */}

        {page > 1 && (
          <Button className="text-gray-400 text-2xl " onClick={handleNextPage}>
            {page - 1}
          </Button>
        )}
        <Button className="text-2xl">{page}</Button>
        {page < data?.total_pages && (
          <Button className="text-gray-400 text-2xl" onClick={handleNextPage}>
            {page + 1}
          </Button>
        )}
      </div>
    </div>
  );
};
