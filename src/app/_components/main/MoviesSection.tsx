"use client";

import { Loader, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MoviePoster } from "../common/MoviePoster";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useNavigateToSeeMore } from "@/app/_hooks/useNavigateToSeeMore";

type Props = {
  label: string;
  endpoint: string;
};

export const MoviesSection = ({ label, endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);

  const handleNavigateToSeeMore = useNavigateToSeeMore();
  const getEndpoint = endpoint.slice(7, endpoint.indexOf("?")).trim();

  if (isLoading) return <Loader />;

  return (
    <div className="h-auto px-20">
      <div className="flex justify-between mb-8 ">
        <p className="text-3xl font-semibold">{label}</p>
        <p
          className="w-[120px] flex justify-around items-center font-medium  cursor-pointer"
          onClick={() => handleNavigateToSeeMore(getEndpoint)}
        >
          See more <ArrowRight />
        </p>
      </div>

      <div className="grid grid-cols-5 grid-rows-2 gap-8">
        {!isLoading ? (
          data?.results?.slice(0, 10).map((movie: Movie) => {
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
