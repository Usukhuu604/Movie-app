import { PageTitleMovieZ } from "../common/PageTitleMovieZ";
import { ThemeSwitcher } from "../common/ThemeSwitcher";
import { Genre } from "./Genre";
import { SearchBarForHome } from "./SearchBarForHome";

export const HeaderContent = () => {
  return (
    <div className="flex justify-between items-center mx-20 my-3">
      <PageTitleMovieZ />

      <div className="flex gap-x-4 items-center">
        <Genre />
        <SearchBarForHome />
      </div>

      <ThemeSwitcher />
    </div>
  );
};
