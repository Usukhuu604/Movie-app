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

export const Genre = () => {
  const { data, isLoading } = useFetchClientData("/genre/movie/list?language=en");

  type GenreType = {
    id: number;
    name: string;
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown /> Genre
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[600px] h-[280px] bg-white">
          <DropdownMenuLabel>
            <p className="text-[24px]">Genres</p>
            <p className="text-[16px] font-normal text-gray-600">See lists of movies by genre.</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="w-full border border-gray-400"></div>
          <DropdownMenuItem className="flex  flex-wrap">
            {data?.genres?.map((genre: GenreType) => {
              return (
                <Button key={genre?.id} className="hover:bg-gray-200">
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
