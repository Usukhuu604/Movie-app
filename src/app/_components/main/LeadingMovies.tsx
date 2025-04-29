"use client";

import React, { useState } from "react";
import { useFetchClientData } from "@/app/_utils/_hooks/useFetchDataInClient";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  endpoint: string;
};

export const LeadingMovies = ({ endpoint }: Props) => {
  const [page, setPage] = useState(0);

  const { data, isLoading } = useFetchClientData(endpoint);
  console.log(data);

  type Movie = {
    backdrop_path: string;
    id: string;
    title: string;
    vote_average: number;
    overview: string;
  };

  return (
    <div className="   my-3 flex h-200 overflow-x-scroll snap-x snap-mandatory relative">
      {!isLoading ? (
        data?.results.slice(0, 3).map((movie: Movie) => {
          let leadingMovie =
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path;

          return (
            <div className="w-screen h-200 shrink-0 snap-center">
              <div className="absolute text-white top-1/2 ml-20 transform -translate-y-1/2 w-100 h-66">
                <p>Now Playing</p>
                <p className="font-bold text-4xl">{movie.title}</p>
                <p className="text-2xl font-semibold">
                  ⭐️{movie.vote_average.toFixed(1)}
                  <span className="text-gray-400">/10</span>
                </p>
                <p>{movie.overview}</p>
                <Button className="bg-white border-2 rounded-lg text-black">
                  Watch Trailer
                </Button>
              </div>
              <img
                src={leadingMovie}
                alt=""
                className="w-full h-full bg-cover bg-center "
                key={movie.id}
              />
            </div>
          );
        })
      ) : (
        <div className="w-screen h-full">
          <Skeleton />
        </div>
      )}
    </div>
  );
};
