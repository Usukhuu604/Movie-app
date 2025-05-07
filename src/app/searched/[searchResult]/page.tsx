import React from "react";
import { ShowSearchResults } from "./components/ShowSearchResults";
import { FooterContent } from "@/app/_components/footer/FooterContent";
import { GenreSuggestions } from "./components/GenreSuggestions";

type SearchProps = {
  params: { searchResult: string };
};

const SearchResultPage = async ({ params }: SearchProps) => {
  const { searchResult } = await params;
  const endpoint: string = `/search/movie?query=${searchResult}&language=en-US&page=1`;
  return (
    <div className="">
      <div className="mx-40 my-10">
        <p className="font-bold text-3xl mb-5">Search results</p>
        <div className="flex h-full  gap-10">
          <ShowSearchResults endpoint={endpoint} />
          <div className="h-[auto] border border-gray-300 "></div>
          <GenreSuggestions />
        </div>
      </div>

      <FooterContent />
    </div>
  );
};

export default SearchResultPage;
