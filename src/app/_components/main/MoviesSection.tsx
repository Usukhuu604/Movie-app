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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {label}
        </h2>

        <button
          className="flex items-center gap-2 font-medium text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
          onClick={() => handleNavigateToSeeMore(getEndpoint)}
        >
          <span className="hidden sm:inline">See more</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 ${
          label === "Top Rated" ? "mb-12" : "mb-20"
        }`}
      >
        {!isLoading ? (
          data?.results?.slice(0, 10).map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            let key = movie?.id;
            return (
              <MoviePoster
                key={key}
                poster={poster}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            );
          })
        ) : (
          <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="aspect-[2/3] w-full" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
