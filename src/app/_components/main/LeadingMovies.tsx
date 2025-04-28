"use client";

import React from "react";
import { useFetchClientData } from "@/app/_utils/_hooks/useFetchDataInClient";

type Props = {
  endpoint: string;
};

export const LeadingMovies = ({ endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);
  console.log(data);

  type Movie = {
    backdrop_path: string;
    id: string;
  };

  return (
    <div className="w-screen  bg-gray-300 my-3 flex overflow-x-scroll  snap-x snap-mandatory snap">
      {!isLoading ? (
        data?.results.slice(0, 3).map((movie: Movie) => {
          let leadingMovie =
            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

          return (
            <div className="shrink-0 snap-center w-screen " key={movie.id}>
              <img src={leadingMovie} alt="" />
            </div>
          );
        })
      ) : (
        <div>Working</div>
      )}
      ``
    </div>
  );
};
