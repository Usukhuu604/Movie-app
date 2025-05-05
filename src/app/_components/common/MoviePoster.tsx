import React from "react";

type MoviePosterProps = {
  id: string;
  poster_path: string | null;
  title: string;
  vote_average: number;
};

export const MoviePoster = ({ id, poster_path }: MoviePosterProps) => {
  return (
    <div></div>
    // <div key={id} className="w-full h-auto bg-[#F4F4F5] rounded-lg text-[18px]" onClick={handleClickgotoDetail(id)}>
    //   {poster && <img src={poster} alt="Movie Poster" />}
    //   <div className="w-full p-4 mb-5">
    //     <p>⭐️{movie?.vote_average?.toFixed(1)}/10</p>
    //     <p>{movie.title}</p>
    //   </div>
    // </div>
  );
};
