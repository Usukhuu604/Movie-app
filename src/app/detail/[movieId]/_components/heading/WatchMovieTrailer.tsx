import { useState } from "react";
import { Play } from "lucide-react";

type TrailerProps = {
  title: string;
  poster_path: string;
  backdrop_path: string;
  movieTrailerKey: string;
};
export const WatchMovieTrailer = ({
  poster_path,
  movieTrailerKey,
  title,
  backdrop_path,
}: TrailerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[70vh] w-full ">
      <img
        src={poster_path}
        alt="poster"
        className="hidden lg:block rounded-2xl"
      />

      <div className=" relative flex-1 rounded-2xl h-[50vh] lg:h-full">
        {isPlaying ? (
          <div className=" w-full h-full rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${movieTrailerKey}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full "
            ></iframe>
          </div>
        ) : (
          <div
            onClick={handlePlay}
            className="cursor-pointer rounded-2xl bg-black relative h-full w-full  "
          >
            <img
              src={backdrop_path}
              alt="bakcdrop"
              className="opacity-50 h-full w-full rounded-2xl object-cover"
            />

            <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 flex gap-4 md:gap-8 text-3xl md:text-5xl text-white flex-row items-center ">
              <p>Play Trailer</p>
              <Play className="bg-white rounded-full text-black p-2 w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
