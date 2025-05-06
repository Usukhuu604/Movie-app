import { useState } from "react";
import { Play } from "lucide-react";

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
    <div className="flex gap-8 h-[800px] lg:h-[500px] w-full ">
      <img src={poster_path} alt="poster" className="rounded-2xl" />

      <div className=" relative flex-1 rounded-2xl">
        {isPlaying ? (
          <div className=" w-full h-full rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${movieTrailerKey}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full "
            ></iframe>
          </div>
        ) : (
          <div onClick={handlePlay} className="cursor-pointer rounded-2xl bg-black relative h-full w-full  ">
            <img src={backdrop_path} alt="bakcdrop" className="opacity-50 h-full w-full rounded-2xl" />

            <div className="absolute bottom-10 left-10 flex gap-8 text-5xl text-white flex-row items-center ">
              <p>Play Trailer</p>
              <Play className="bg-white rounded-full text-black p-2 w-16 h-16" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
