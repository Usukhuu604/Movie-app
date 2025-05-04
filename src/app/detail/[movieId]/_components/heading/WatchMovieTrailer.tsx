import { useState } from "react";
import { Play } from "lucide-react";
import { Autour_One } from "next/font/google";

type TrailerProps = {
  title: string;
  poster_path: string;
  backdrop_path: string;
  movieTrailerKey: string;
};
export const WatchMovieTrailer = ({ poster_path, movieTrailerKey, title, backdrop_path }: TrailerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex gap-8 h-[500px]  border w-full">
      <img src={poster_path} alt="poster" className="block rounded-[4px]" />

      <div className="h-100% w-full relative">
        {isPlaying ? (
          <div className="rounded-[4px] w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${movieTrailerKey}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div onClick={handlePlay} className="cursor-pointer rounded-[4px] bg-black relative h-full w-full border ">
            <img src={backdrop_path} alt="bakcdrop" className="opacity-50 h-full w-full" />

            <div className="absolute bottom-10 left-10 flex gap-4 text-4xl text-white flex-row items-center ">
              <p>Play Trailer</p>
              <Play className="bg-white rounded-full text-black size-8 p-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
