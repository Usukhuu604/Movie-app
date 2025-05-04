import { fetchMovieData } from "@/lib/fetch-movie-data";
import useSWR from "swr";

export const useFetchClientData = (endpoint: string) => {
  const { data, isLoading } = useSWR(endpoint, fetchMovieData);
  return { data, isLoading };
};
