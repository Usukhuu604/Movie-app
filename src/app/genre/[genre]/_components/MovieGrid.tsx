"use client";

import { useTheme } from "next-themes";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

type MovieGridProps = {
  movies: Movie[] | undefined;
  isLoading: boolean;
  totalResults?: number;
  currentPage: number;
  maxPages: number;
};

export const MovieGrid = ({
  movies,
  isLoading,
  totalResults,
  currentPage,
  maxPages,
}: MovieGridProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2
            className={`text-xl font-semibold ${
              resolvedTheme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {totalResults
              ? `${totalResults.toLocaleString()} Movies Found`
              : "Movies"}
          </h2>
          {totalResults && (
            <p
              className={`text-sm ${
                resolvedTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Page {currentPage} of {maxPages}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {!isLoading
          ? movies?.map((movie: Movie) => {
              const poster = movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : null;

              return (
                <MoviePoster
                  key={movie.id}
                  poster={poster}
                  id={movie.id.toString()}
                  title={movie.title}
                  vote_average={movie.vote_average}
                />
              );
            })
          : Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="w-full h-auto flex items-center">
                <Skeleton className="w-full h-[300px] sm:h-[400px]" />
              </div>
            ))}
      </div>

      {movies?.length === 0 && !isLoading && (
        <div
          className={`text-center py-12 ${
            resolvedTheme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <p className="text-lg mb-2">No movies found</p>
          <p className="text-sm">
            Try selecting different genres or check back later
          </p>
        </div>
      )}
    </>
  );
};
