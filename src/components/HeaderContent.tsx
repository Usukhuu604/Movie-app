import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { SearchMovies } from "./SearchMovies";

export const HeaderContent = () => {
  return (
    <div className="flex justify-around mt-[12px]">
      <div>
        <img src="MovieZLogo.png" alt="" />
      </div>
      <div className="flex">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Movies</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <SearchMovies />
      </div>
      <div>
        <Button className="border border-black rounded-[5px] ">
          <img src="moon.svg" alt="" className="w-full" />
        </Button>
      </div>
    </div>
  );
};
