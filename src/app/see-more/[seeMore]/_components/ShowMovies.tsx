"use client";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";
import { toCapitalize } from "@/app/_utils/toCapitalize";

type ShowMoviesProps = {
  endpoint: string;
  section: string;
};

const ShowMovies = ({ endpoint, section }: ShowMoviesProps) => {
  type Movie = {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
  };

  const { data, isLoading } = useFetchClientData(endpoint);

  return (
    <div className="mx-30 my-20 ">
      <p className="font-bold text-3xl mb-10">{toCapitalize(section)}</p>
      <div className="grid grid-cols-5  gap-8">
        {!isLoading ? (
          data?.results?.map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
            let key = movie?.id;

            return <MoviePoster key={key} poster={poster} id={movie.id} title={movie.title} vote_average={movie.vote_average} />;
          })
        ) : (
          <div className=" w-full h-auto flex items-center">
            <Skeleton className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowMovies;
