"use client";

import React from "react";
import { useFetchClientData } from "@/app/_utils/_hooks/useFetchDataInClient";
import { Loader, ArrowRight } from "lucide-react";

type Props = {
  label: string;
  endpoint: string;
};

export const MoviesSection = ({ label, endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);

  type Movie = {
    poster_path: string;
    title: string;
    id: string;
    vote_average: number;
  };

  return (
    <div className="h-auto px-20">
      <div className="flex justify-between mb-8 ">
        <p className="text-3xl font-semibold">{label}</p>
        <p className="w-[120px] flex justify-around items-center font-medium">
          See more <ArrowRight />
        </p>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-8">
        {!isLoading ? (
          data?.results.slice(0, 10).map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

            return (
              <div
                key={movie.id}
                className="w-full h-auto bg-[#F4F4F5]  rounded-lg text-[18px] "
              >
                <img src={poster} alt="" className="" />
                <div className="p-2">
                  <p>⭐️{movie.vote_average.toFixed(1)}/10</p>
                  <p>{movie.title}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-gray-400 items-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
