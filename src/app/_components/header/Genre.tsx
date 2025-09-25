"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";

export const Genre = ({ theme }: { theme: string }) => {
  const { data, isLoading } = useFetchClientData(
    "/genre/movie/list?language=en"
  );
  const resolvedTheme = theme;

  type GenreType = {
    id: number;
    name: string;
  };

  const handleNavigateGenre = useNavigateToPages();

  if (isLoading) {
    return <Skeleton className="w-50" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto cursor-pointer">
          <ChevronDown className="w-4 h-4 mr-2" />
          <span className="text-sm sm:text-base">Genre</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={`w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-h-[350px] sm:max-h-[400px] md:max-h-[550px] overflow-y-auto ${
          resolvedTheme == "dark" ? "bg-gray-700" : "bg-white"
        }`}
        align="start"
        side="bottom"
      >
        <DropdownMenuLabel>
          <p
            className={`text-lg sm:text-xl md:text-2xl font-semibold ${
              resolvedTheme == "dark" ? "text-white" : "text-black"
            }`}
          >
            Genres
          </p>
          <p className="text-sm font-normal text-gray-400 mt-1">
            See lists of movies by genre.
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
            {data?.genres?.map((genre: GenreType) => {
              return (
                <Button
                  key={genre?.id}
                  variant="ghost"
                  className={`justify-between text-xs sm:text-sm h-8 sm:h-9 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${
                    resolvedTheme == "light" ? "text-black" : "text-white"
                  }`}
                  onClick={() => {
                    handleNavigateGenre("genre", genre?.id);
                  }}
                >
                  <span>{genre?.name}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              );
            })}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
