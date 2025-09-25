import React from "react";
import { ShowSearchResults } from "./components/ShowSearchResults";

import { GenreSuggestions } from "./components/GenreSuggestions";

type SearchProps = {
  params: { searchResult: string };
};

const SearchResultPage = async ({ params }: SearchProps) => {
  const { searchResult } = await params;
  const endpoint: string = `/search/movie?query=${searchResult}&language=en-US&page=1`;
  return (
    <div className="">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 my-10">
        <p className="font-bold text-3xl mb-5">Search results</p>
        <div className="flex flex-col lg:flex-row h-full gap-10">
          <ShowSearchResults endpoint={endpoint} />
          <div className="h-auto lg:h-auto lg:border-l border-t lg:border-t-0 border-gray-300 my-4 lg:my-0"></div>
          <GenreSuggestions />
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
