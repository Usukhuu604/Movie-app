"use client";

import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { toHours } from "../_utils/toHours";

export const useGetDetails = (endpoint: string) => {
  const { data, isLoading } = useFetchClientData(endpoint);

  console.log(endpoint, data);

  return {
    title: data?.title,
    overview: data?.overview,
    vote_count: data?.vote_count,
    adult: data?.adult ? "R" : "PG",
    runtime: toHours(data?.runtime),
    release_date: data?.release_date,
    vote_average: data?.vote_average?.toFixed(1),
    genres: data?.genres?.map((genre: { name: string }) => genre.name),
    poster_path: `https://image.tmdb.org/t/p/original${data?.poster_path}`,
    backdrop_path: `https://image.tmdb.org/t/p/original${data?.backdrop_path}`,

    movieTrailerKey:
      data?.results?.filter((trailer: { name: string }) => {
        return trailer?.name?.includes("Official Trailer");
      })[0]?.key ?? null,
    isLoading: isLoading,

    directing: data?.crew
      ?.filter((director: { known_for_department: string }) => director.known_for_department == "Directing")
      .map((director: { original_name: string }) => director.original_name)
      .slice(0, 3),
    writing: data?.crew
      ?.filter((writer: { known_for_department: string }) => writer.known_for_department == "Writing")
      .map((writer: { original_name: string }) => writer.original_name)
      .slice(0, 3),

    stars: data?.cast
      ?.filter((star: { known_for_department: string }) => {
        return star.known_for_department == "Acting";
      })
      .map((star: { original_name: string }) => star.original_name)
      .slice(0, 5),

    relatedMovies: data?.results,
  };
};
