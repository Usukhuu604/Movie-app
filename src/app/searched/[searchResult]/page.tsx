import { ShowSearchResults } from "./components/ShowSearchResults";
import { GenreSuggestions } from "./components/GenreSuggestions";

type SearchProps = {
  params: Promise<{ searchResult: string }>;
};

const SearchResultPage = async ({ params }: SearchProps) => {
  const { searchResult } = await params;
  const endpoint: string = `/search/movie?query=${searchResult}&language=en-US&page=1`;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <h1 className="font-bold text-2xl sm:text-3xl mb-6 sm:mb-8">
          Search results
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1">
            <ShowSearchResults endpoint={endpoint} />
          </div>

          <div className="w-full lg:w-px bg-gray-300 my-4 lg:my-0"></div>

          <div className="lg:w-80 hidden md:block">
            <GenreSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
