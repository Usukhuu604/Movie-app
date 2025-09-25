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
    <div className="w-full max-w-full">
      <p className="font-bold text-2xl">Search by genre</p>
      <p className="text-gray-500 mb-5">See lists of movies by genre</p>
      <div className="flex flex-wrap gap-2">
        {data?.genres?.map((genre: { id: string; name: string }) => {
          return (
            <Button
              key={genre?.id}
              onClick={() => {
                handleNavigateGenre("genre", genre?.id);
              }}
              className={`hover:bg-gray-400 bg-gray-50 rounded-full border border-gray-200 flex-shrink-0 text-sm
          ${resolvedTheme == "dark" ? "text-white bg-gray-700" : ""}`}
            >
              {genre?.name}
              <ChevronRight className="w-4 h-4" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
