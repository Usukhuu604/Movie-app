"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";

export const SearchBarForHome = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useFetchClientData(`/search/movie?query=${input}&language=en-US&page=1`);

  const handleGotoDetails = useNavigateToPages();
  const handleNavigateSearchResult = useNavigateToPages();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="">
      <div className=" relative ">
        <Input type="text" placeholder="Search..." className="w-[350px]" onChange={handleOnChange} value={input} />
        <Search
          className="absolute right-0 top-0 transform cursor-pointer h-full w-10 p-2 text-gray-600 border border-transparent border-l-gray-300"
          onClick={() => {
            if (input.length !== 0) {
              setOpen(!open);
              handleNavigateSearchResult("searched", input);
            }
          }}
        />
      </div>
      {input && (
        <div className="absolute  z-10 w-120 mt-4 p-4 bg-white border border-gray-300 rounded-lg transform -translate-x-18 ">
          <div className="grid">
            {data?.results?.slice(0, 7).map((movie: { poster_path: string; id: string; title: string; vote_average: number }) => {
              let poster = `https://image.tmdb.org/t/p/w200${movie?.poster_path}`;
              let key = movie?.id;
              return (
                <div
                  key={key}
                  className="flex flex-col gap-1 hover:bg-gray-300 cursor-pointer rounded-lg p-2"
                  onClick={() => handleGotoDetails("detail", movie?.id)}
                >
                  <div className="flex gap-4 items-center ">
                    <img src={poster} alt="" className="w-16 h-16 rounded-lg" />
                    <div className="w-full">
                      <p className="text-[20px]">{movie?.title}</p>
                      <p className="text-gray-500 text-4">⭐️{movie?.vote_average?.toFixed(1)}/10</p>
                    </div>
                  </div>
                  <div className="w-full border border-gray-300 mt-4"></div>
                </div>
              );
            })}
            <p className="hover:bg-gray-200 cursor-pointer rounded-lg p-2 " onClick={() => handleNavigateSearchResult("searched", input)}>
              See all results for "{input}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
