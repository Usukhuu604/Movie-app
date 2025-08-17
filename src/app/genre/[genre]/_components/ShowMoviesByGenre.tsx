"use client";

import React, { useState, useEffect } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import { X } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  genre_id: string;
};

type Genre = {
  id: string;
  name: string;
};

type Movie = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
};

export const ShowMoviesByGenre = ({ genre_id }: Props) => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([parseInt(genre_id)]);
  const { resolvedTheme } = useTheme();

  // Fetch genres for names
  const { data: genresData } = useFetchClientData("/genre/movie/list?language=en");

  // Build endpoint with selected genres
  const genreIds = selectedGenres.join(",");
  const { data, isLoading } = useFetchClientData(`/discover/movie?language=en&with_genres=${genreIds}&page=${page}`);

  // Update selected genres when genre_id prop changes
  useEffect(() => {
    if (genre_id && !selectedGenres.includes(parseInt(genre_id))) {
      setSelectedGenres([parseInt(genre_id)]);
      setPage(1);
    }
  }, [genre_id]);

  const handleGenreToggle = (genreId: number) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genreId)) {
        return prev.filter((id) => id !== genreId);
      } else {
        return [...prev, genreId];
      }
    });
    setPage(1);
  };

  const handleRemoveGenre = (genreId: number) => {
    if (selectedGenres.length > 1) {
      // Keep at least one genre
      setSelectedGenres((prev) => prev.filter((id) => id !== genreId));
      setPage(1);
    }
  };

  const handleNextPage = (pageNumber?: number) => {
    if (pageNumber) {
      setPage(pageNumber);
    } else {
      setPage((page) => page + 1);
    }
  };

  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };

  const totalPages = data?.total_pages || 20;
  const maxPages = Math.min(totalPages, 20);

  return (
    <div className="mx-30 my-15">
      <div className="grid grid-cols-12 gap-8">
        {/* Genre Suggestions Sidebar */}
        <div className="col-span-3">
          {/* Selected Genres */}
          <div className="mt-6">
            <h3 className={`font-bold text-lg mb-3 ${resolvedTheme === "light" ? "text-gray-900" : "text-white"}`}>
              Selected Genres
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedGenres.map((genreId) => {
                const genre = genresData?.genres?.find((g: Genre) => g.id === genreId);
                return (
                  <div
                    key={genreId}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      resolvedTheme === "light" ? "bg-blue-100 text-blue-800" : "bg-blue-900 text-blue-200"
                    }`}
                  >
                    {genre?.name}
                    {selectedGenres.length > 1 && (
                      <X
                        size={14}
                        className="cursor-pointer hover:opacity-70"
                        onClick={() => handleRemoveGenre(genreId)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Genre Selection */}
          <div className="mt-6">
            <h3 className={`font-bold text-lg mb-3 ${resolvedTheme === "light" ? "text-gray-900" : "text-white"}`}>
              Genres
            </h3>
            <div className="grid grid-cols-1 gap-2  overflow-y-auto">
              {genresData?.genres
                ?.filter((genre: Genre) => !selectedGenres.includes(genre.id))
                ?.map((genre: Genre) => (
                  <button
                    key={genre.id}
                    onClick={() => handleGenreToggle(genre.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                      resolvedTheme === "light"
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    + {genre.name}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="col-span-9">
          <div className="mb-6">
            <h2 className={`text-2xl font-bold mb-2 ${resolvedTheme === "light" ? "text-gray-900" : "text-white"}`}>
              Movies ({data?.total_results || 0} results)
            </h2>
            <p className={`text-sm ${resolvedTheme === "light" ? "text-gray-600" : "text-gray-400"}`}>
              Page {page} of {maxPages}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-10">
            {!isLoading
              ? data?.results?.map((movie: Movie) => {
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
              : Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="w-full h-auto flex items-center">
                    <Skeleton className="w-full h-[400px]" />
                  </div>
                ))}
          </div>

          {/* No Results */}
          {data?.results?.length === 0 && !isLoading && (
            <p className={`text-center text-lg ${resolvedTheme === "light" ? "text-gray-500" : "text-gray-400"}`}>
              No movies found for the selected genres
            </p>
          )}

          {/* Pagination */}
          {data?.results && data.results.length > 0 && (
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePreviousPage();
                      }}
                    />
                  </PaginationItem>
                )}

                {/* Show first page if not on first few pages */}
                {page > 3 && (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNextPage(1);
                        }}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  </>
                )}

                {/* Show previous page */}
                {page > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNextPage(page - 1);
                      }}
                    >
                      {page - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* Current page */}
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {page}
                  </PaginationLink>
                </PaginationItem>

                {/* Show next page */}
                {page < maxPages && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNextPage(page + 1);
                      }}
                    >
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* Show last page if not on last few pages */}
                {page < maxPages - 2 && (
                  <>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNextPage(maxPages);
                        }}
                      >
                        {maxPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                {page < maxPages && (
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNextPage();
                      }}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};
