"use client";
import { useSearchParams } from "next/navigation";

export const useURLsearchParams = () => {
  const searchParams = useSearchParams();

  const selectedGenresIds =
    searchParams.get("genresIds")?.split(",").filter(Boolean) ?? [];

  const generateQueryParams = (genreId: string) => {
    const queryParams = new URLSearchParams();

    const updatedQueryParams = selectedGenresIds.includes(genreId)
      ? selectedGenresIds.filter((id) => id !== genreId)
      : [...selectedGenresIds, genreId];

    if (updatedQueryParams.length !== 0) {
      queryParams.set("genreIds", updatedQueryParams.join(","));
    }
    const newParams = queryParams.toString();

    return `/?${newParams}`;
  };
  return { selectedGenresIds, generateQueryParams };
};
