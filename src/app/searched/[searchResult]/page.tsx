import React from "react";
import { ShowSearchResults } from "./components/ShowSearchResults";

type SearchProps = {
  params: { searchResult: string };
};

const SearchResultPage = ({ params: { searchResult } }: SearchProps) => {
  const endpoint: string = `/search/movie?query=${searchResult}&language=en-US&page=1`;
  return (
    <div className="mx-20 my-10">
      <p className="font-bold text-3xl mb-5">Search results</p>
      <div className="flex h-full  gap-10">
        <ShowSearchResults endpoint={endpoint} />
        <div className="h-[auto] border border-gray-300 "></div>
        <div className="w-[30%] h-[auto] bg-gray-500 border"></div>
      </div>
    </div>
  );
};

export default SearchResultPage;
