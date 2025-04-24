import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Genre = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <ChevronDown /> Genre
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[577px] h-[333px] bg-white">
          <DropdownMenuLabel>
            <p className="text-[24px]">Genres</p>
            <p className="text-[16px] font-normal text-gray-600">
              See lists of movies by genre.
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="w-full border border-gray-400"></div>
          <DropdownMenuItem></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
