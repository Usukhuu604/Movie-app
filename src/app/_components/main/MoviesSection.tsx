"use client";

import { useRouter } from "next/navigation";
import { Loader, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useHandleGotoDetails } from "@/app/_hooks/useHandleGotoDetails";

type Props = {
  label: string;
  endpoint: string;
};

export const MoviesSection = ({ label, endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);
  const { push } = useRouter();

  type Movie = {
    poster_path: string;
    title: string;
    id: string;
    vote_average: number;
  };

  const handleClickGotoDetail = (movieId: string) => () => {
    push(`/detail/${movieId}`);
  };

  // const handleClickGotoDetail = useHandleGotoDetails;

  if (isLoading) return <Loader />;

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
          data?.results?.slice(0, 10).map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;

            return (
              <div key={movie.id} className="w-full h-auto bg-[#F4F4F5] rounded-lg text-[18px] " onClick={handleClickGotoDetail(movie.id)}>
                <img src={poster} alt="" />
                <div className="w-full p-4 mb-5">
                  <p>⭐️{movie.vote_average.toFixed(1)}/10</p>
                  <p>{movie.title}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" w-full h-auto flex items-center">
            <Skeleton className="w-full h-full" />{" "}
          </div>
        )}
      </div>
    </div>
  );
};
