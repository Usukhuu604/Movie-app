import React from "react";

type GenreProps = {
  genres: string[];
};

export const GiveGenres = ({ genres }: GenreProps) => {
  return (
    <div className="flex gap-2 mt-4">
      {genres?.map((genre: string, index: number) => {
        return (
          <p
            key={index}
            className="border rounded-full px-4 py-1 font-bold text-[12px]"
          >
            {genre}
          </p>
        );
      })}
    </div>
  );
};
