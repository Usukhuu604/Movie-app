"use client";

import React, { useState, useEffect } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { Props } from "../../../../../global";
import { GenreFilter } from "./GenreFilter";
import { MovieGrid } from "./MovieGrid";
import { MoviePagination } from "./MoviePagination";

export const ShowMoviesByGenre = ({ genre_id }: Props) => {
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([genre_id]);

  const { data: genresData } = useFetchClientData(
    "/genre/movie/list?language=en"
  );

  const genreIds = selectedGenres.join(",");
  const { data, isLoading } = useFetchClientData(
    `/discover/movie?language=en&with_genres=${genreIds}&page=${page}`
  );

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

  const movies = data?.results || [];
  const totalResults = data?.total_results || 0;

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-8 sm:my-12 md:my-15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <GenreFilter
          genres={genresData?.genres || []}
          selectedGenres={selectedGenres}
          onGenreToggle={handleGenreToggle}
          onRemoveGenre={handleRemoveGenre}
        />

        <div className="lg:col-span-9">
          <MovieGrid
            movies={movies}
            isLoading={isLoading}
            totalResults={totalResults}
            currentPage={page}
            maxPages={maxPages}
          />

          <MoviePagination
            currentPage={page}
            maxPages={maxPages}
            onPageChange={handlePageChange}
            hasResults={movies.length > 0}
          />
        </div>
      </div>
    </div>
  );
};
