"use client";

import { useTheme } from "next-themes";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Genre } from "../../../../../global";

type GenreFilterProps = {
  genres: Genre[];
  selectedGenres: string[];
  onGenreToggle: (genreId: string) => void;
  onRemoveGenre: (genreId: string) => void;
};

export const GenreFilter = ({
  genres,
  selectedGenres,
  onGenreToggle,
  onRemoveGenre,
}: GenreFilterProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="lg:col-span-3">
      <div>
        <p className="font-bold text-2xl">Search by genre</p>
        <p className="text-gray-500 mb-5">See lists of movies by genre</p>
        <div className="flex flex-wrap">
          {genres?.map((genre: Genre) => {
            const isSelected = selectedGenres.includes(genre.id);
            return (
              <Button
                key={genre.id}
                onClick={() => onGenreToggle(genre.id)}
                className={`my-1.5 mx-2 rounded-full border border-gray-200 ${
                  isSelected
                    ? resolvedTheme === "dark"
                      ? "text-white bg-blue-600 hover:bg-blue-700"
                      : "text-white bg-blue-600 hover:bg-blue-700"
                    : resolvedTheme === "dark"
                    ? "text-white bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-50 hover:bg-gray-400"
                }`}
              >
                {genre.name}
                {isSelected && selectedGenres.length > 1 ? (
                  <X
                    size={16}
                    className="ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveGenre(genre.id);
                    }}
                  />
                ) : (
                  <ChevronRight size={16} className="ml-2" />
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
