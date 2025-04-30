"use client";

import { useFetchClientData } from "@/app/_utils/_hooks/useFetchDataInClient";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  endpoint: string;
};

export const LeadingMovies = ({ endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);
  console.log(data);

  type Movie = {
    backdrop_path: string;
    id: string;
    title: string;
    vote_average: number;
    overview: string;
  };

  const handleClick = () => {
    return;
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="my-3 flex  overflow-x-scroll snap-x snap-mandatory "
    >
      <CarouselContent>
        {!isLoading ? (
          data?.results.slice(0, 3).map((movie: Movie, index: number) => {
            let leadingMovie =
              "https://image.tmdb.org/t/p/original" + movie.backdrop_path;

            return (
              <CarouselItem
                key={index}
                className="w-screen h-175 shrink-0 snap-center"
              >
                <div className="absolute text-white top-1/2 ml-20 transform -translate-y-1/2 w-100 h-66 z-10">
                  {index !== 0 && (
                    <CarouselPrevious className="bg-white text-black" />
                  )}
                  <p>Now Playing</p>
                  <p className="font-bold text-4xl">{movie.title}</p>
                  <p className="text-2xl font-semibold">
                    ⭐️{movie.vote_average.toFixed(1)}
                    <span className="text-gray-400">/10</span>
                  </p>
                  <p>{movie.overview}</p>
                  <Button
                    className="bg-white border-2 rounded-lg text-black"
                    onClick={handleClick}
                  >
                    Watch Trailer
                  </Button>
                  {index !== 2 && (
                    <CarouselNext className="bg-white text-black" />
                  )}
                </div>
                <img
                  src={leadingMovie}
                  alt=""
                  className="w-full h-175 bg-cover bg-center"
                  key={movie.id}
                />
              </CarouselItem>
            );
          })
        ) : (
          <div className="w-screen h-full">
            <Skeleton />
          </div>
        )}
      </CarouselContent>
    </Carousel>
  );
};
