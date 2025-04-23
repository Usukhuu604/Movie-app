import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

import { SearchMovies } from "./SearchMovies";
import { PageTitleMovieZ } from "../common/PageTitleMovieZ";
import { ThemeSwitcher } from "../common/ThemeSwitcher";

export const HeaderContent = () => {
  return (
    <div className="flex justify-between mx-20 my-3">
      <PageTitleMovieZ />
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
      <ThemeSwitcher />
    </div>
  );
};
