"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";

export const Genre = ({ theme }: { theme: string }) => {
  const { data, isLoading } = useFetchClientData("/genre/movie/list?language=en");
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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown /> Genre
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`w-[600px] h-[280px] ${resolvedTheme == "dark" ? "bg-gray-700" : "bg-white"}`}>
          <DropdownMenuLabel>
            <p className={`text-[24px] ${resolvedTheme == "dark" ? "text-white" : "text-black"}`}>Genres</p>
            <p className="text-[16px] font-normal text-gray-400">See lists of movies by genre.</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="w-full border border-gray-400"></div>
          <DropdownMenuItem className="flex  flex-wrap">
            {data?.genres?.map((genre: GenreType) => {
              return (
                <Button
                  key={genre?.id}
                  className={`hover:bg-gray-400 cursor-pointer ${
                    resolvedTheme == "light" ? "text-black" : "text-white"
                  }`}
                  onClick={() => {
                    handleNavigateGenre("genre", genre?.id);
                  }}
                >
                  {genre?.name}
                  <ChevronRight />
                </Button>
              );
            })}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
