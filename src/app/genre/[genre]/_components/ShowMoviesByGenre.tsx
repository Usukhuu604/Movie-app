"use client";

import React, { useState, useEffect } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Props } from "../../../../../global";
import { Genre } from "../../../../../global";

export const ShowMoviesByGenre = ({ genre_id }: Props) => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([genre_id]);
  const { resolvedTheme } = useTheme();

  const { data: genresData } = useFetchClientData("/genre/movie/list?language=en");

  const genreIds = selectedGenres.join(",");
  const { data, isLoading } = useFetchClientData(`/discover/movie?language=en&with_genres=${genreIds}&page=${page}`);

  useEffect(() => {
    if (genre_id && !selectedGenres.includes(genre_id)) {
      setSelectedGenres([genre_id]);
      setPage(1);
    }
  }, [genre_id, selectedGenres]);

  const handleGenreToggle = (genreId: string) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genreId)) {
        return prev.filter((id) => id !== genreId);
      } else {
        return [...prev, genreId];
      }
    });
    setPage(1);
  };

  const handleRemoveGenre = (genreId: string) => {
    if (selectedGenres.length > 1) {
      setSelectedGenres((prev) => prev.filter((id) => id !== genreId));
      setPage(1);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const totalPages = data?.total_pages || 1;
  const maxPages = Math.min(totalPages, 500);

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-8 sm:my-12 md:my-15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div>
            <p className="font-bold text-2xl">Search by genre</p>
            <p className="text-gray-500 mb-5">See lists of movies by genre</p>
            <div className="flex flex-wrap">
              {genresData?.genres?.map((genre: Genre) => {
                const isSelected = selectedGenres.includes(genre.id);
                return (
                  <Button
                    key={genre.id}
                    onClick={() => handleGenreToggle(genre.id)}
                    className={`my-1.5 mx-2 rounded-full border border-gray-200 ${
                      isSelected
                        ? resolvedTheme === "dark"
                          ? "text-white bg-blue-600 hover:bg-blue-700"
                          : "text-white bg-blue-600 hover:bg-blue-700"
                        : resolvedTheme === "dark"
                        ? "text-white bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-50 hover:bg-gray-400"
                    }`}
                  >
                    {genre.name}
                    {isSelected && selectedGenres.length > 1 ? (
                      <X
                        size={16}
                        className="ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveGenre(genre.id);
                        }}
                      />
                    ) : (
                      <ChevronRight size={16} className="ml-2" />
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-9">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className={`text-xl font-semibold ${resolvedTheme === "light" ? "text-gray-900" : "text-white"}`}>
                {data?.total_results ? `${data.total_results.toLocaleString()} Movies Found` : "Movies"}
              </h2>
              {data?.total_results && (
                <p className={`text-sm ${resolvedTheme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  Page {page} of {maxPages}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
            {!isLoading
              ? data?.results?.map((movie: Movie) => {
                  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

                  return (
                    <MoviePoster
                      key={movie.id}
                      poster={poster}
                      id={movie.id}
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

          {data?.results?.length === 0 && !isLoading && (
            <div className={`text-center py-12 ${resolvedTheme === "light" ? "text-gray-500" : "text-gray-400"}`}>
              <p className="text-lg mb-2">No movies found</p>
              <p className="text-sm">Try selecting different genres or check back later</p>
            </div>
          )}

          {data?.results && data.results.length > 0 && maxPages > 1 && (
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page - 1);
                        }}
                      />
                    </PaginationItem>
                  )}

                  {page > 3 && (
                    <>
                      <PaginationItem>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(1);
                          }}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      {page > 4 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                    </>
                  )}

                  {page > 1 && page <= 3 && (
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page - 1);
                        }}
                      >
                        {page - 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      {page}
                    </PaginationLink>
                  </PaginationItem>

                  {page < maxPages && page >= maxPages - 2 && (
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page + 1);
                        }}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}

                  {page < maxPages - 2 && (
                    <>
                      {page < maxPages - 3 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                      <PaginationItem>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(maxPages);
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
                          handlePageChange(page + 1);
                        }}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
