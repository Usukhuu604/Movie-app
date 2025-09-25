"use client";

import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { useNavigateToPages } from "@/app/_hooks/useNavigateToPages";

export const SearchBarForHome = ({ theme }: { theme: string }) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { data, isLoading } = useFetchClientData(
    debouncedInput
      ? `/search/movie?query=${debouncedInput}&language=en-US&page=1`
      : ""
  );

  const handleGotoDetails = useNavigateToPages();
  const handleNavigateSearchResult = useNavigateToPages();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setOpen(true);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full sm:w-auto">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search movies..."
          className={`w-full sm:w-[280px] md:w-[320px] lg:w-[350px] pr-12 ${
            theme === "light"
              ? "bg-white border-gray-300 text-gray-900"
              : "bg-gray-800 border-gray-600 text-white"
          }`}
          onChange={handleOnChange}
          value={input}
          onFocus={() => input && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
        />
        <div className="absolute right-0 top-0 h-full flex items-center">
          {isLoading && debouncedInput ? (
            <Loader2 className="w-5 h-5 mr-3 animate-spin text-gray-500" />
          ) : (
            <Search
              className={`w-5 h-5 mr-3 cursor-pointer ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
              onClick={() => {
                if (input.length !== 0) {
                  handleNavigateSearchResult("searched", input);
                  setOpen(false);
                }
              }}
            />
          )}
        </div>
      </div>

      {open && input && data?.results && (
        <div
          className={`absolute z-50 w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mt-2 p-3 sm:p-4 rounded-lg shadow-lg border ${
            theme === "light"
              ? "bg-white border-gray-300"
              : "bg-gray-800 border-gray-600"
          }`}
          role="listbox"
        >
          <div className="space-y-1">
            {data.results
              .slice(0, 5)
              .map(
                (
                  movie: {
                    poster_path: string;
                    id: string;
                    title: string;
                    vote_average: number;
                  },
                  index: number
                ) => {
                  const poster = movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "/placeholder-movie.jpg";

                  return (
                    <div
                      key={movie.id}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
                        theme === "light"
                          ? "hover:bg-gray-50"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={() => {
                        handleGotoDetails("detail", movie.id);
                        setOpen(false);
                      }}
                      role="option"
                    >
                      <img
                        src={poster}
                        alt={`${movie.title} poster`}
                        className="w-10 h-14 sm:w-12 sm:h-16 rounded object-cover flex-shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/placeholder-movie.jpg";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-medium truncate ${
                            theme === "light" ? "text-gray-900" : "text-white"
                          }`}
                        >
                          {movie.title}
                        </p>
                        <p
                          className={`text-sm ${
                            theme === "light"
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          ⭐️ {movie.vote_average?.toFixed(1)}/10
                        </p>
                      </div>
                    </div>
                  );
                }
              )}

            <div
              className={`p-3 rounded-lg cursor-pointer transition-colors border-t ${
                theme === "light"
                  ? "hover:bg-gray-50 border-gray-200"
                  : "hover:bg-gray-700 border-gray-600"
              }`}
              onClick={() => {
                handleNavigateSearchResult("searched", input);
                setOpen(false);
              }}
              role="option"
            >
              <p className={`text-sm font-medium`}>See all results "{input}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
