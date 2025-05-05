"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useHandleGotoDetails } from "@/app/_hooks/useHandleGotoDetails";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigateSearchResult } from "@/app/_hooks/useNavigateSearchResult";

export const SearchBarForHome = () => {
  const [input, setInput] = useState("");
  const { data, isLoading } = useFetchClientData(`/search/movie?query=${input}&language=en-US&page=1`);

  const handleGotoDetails = useHandleGotoDetails();
  const handleNavigateSearchResult = useNavigateSearchResult();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2 relative">
        <Input type="text" placeholder="Search..." className="w-[350px]" onChange={handleOnChange} value={input} />
        <Search
          className="cursor-pointer absolute right-0  h-full w-10 p-2 text-gray-600"
          onClick={() => handleNavigateSearchResult(input)}
        />
      </PopoverTrigger>
      {input && (
        <PopoverContent className="w-120 bg-white">
          <div className="grid gap-4">
            {data?.results
              ?.slice(0, 7)
              .map((movie: { poster_path: string; id: string; title: string; vote_average: number }) => {
                let poster = `https://image.tmdb.org/t/p/original${movie?.poster_path}`;
                return (
                  <div key={movie?.id} className="flex flex-col gap-2" onClick={() => handleGotoDetails(movie?.id)}>
                    <div className="flex gap-4 items-center ">
                      <img src={poster} alt="" className="w-16 h-16 rounded-lg" />
                      <div className="w-full">
                        <p>{movie?.title}</p>
                        <p>{movie?.vote_average?.toFixed(1)}/10</p>
                      </div>
                    </div>
                    <div className="w-[90%] border border-gray-300"></div>
                  </div>
                );
              })}
            <p>See all results for "{input}"</p>
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};
