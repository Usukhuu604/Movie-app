"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";

export const GenreSuggestions = () => {
  const { data } = useFetchClientData("/genre/movie/list?language=en");
  const { resolvedTheme } = useTheme();
  const handleNavigateGenre = useNavigateToPages();

  return (
    <div className="w-[30vw]  ">
      <p className="font-bold text-2xl">Search by genre</p>
      <p className="text-gray-500 mb-5">See lists of movies by genre</p>
      {data?.genres?.map((genre: { id: string; name: string }) => {
        return (
          <Button
            key={genre?.id}
            onClick={() => {
              handleNavigateGenre("genre", genre?.id);
            }}
            className={`hover:bg-gray-400 my-1.5 mx-2 bg-gray-50 rounded-full border border-gray-200 
          ${resolvedTheme == "dark" ? "text-white bg-gray-700" : ""}`}
          >
            {genre?.name}
            <ChevronRight />
          </Button>
        );
      })}
    </div>
  );
};
