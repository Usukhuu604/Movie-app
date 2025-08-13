"use client";

import React, { useState } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  genre_id: string;
};

export const ShowMoviesByGenre = ({ genre_id }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchClientData(`/discover/movie?language=en&with_genres=${genre_id}&page=${page}`);

  const handleNextPage = (pageNumber?: number) => {
    if (pageNumber) {
      setPage(pageNumber);
    } else {
      setPage((page) => page + 1);
    }
  };

  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <div className="mx-30 my-20 ">
      {/* <p className="font-bold text-3xl mb-10">{toCapitalize(section)}</p> */}
      <div className="grid grid-cols-5  gap-8"></div>

      <div className="grid grid-cols-5 gap-8">
        {!isLoading ? (
          data?.results?.slice(0, 20).map((movie: Movie) => {
            let poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            let key = movie?.id;

            return (
              <MoviePoster
                key={key}
                poster={poster}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            );
          })
        ) : (
          <div className=" w-full h-auto flex items-center">
            <Skeleton className="w-full h-full" />
          </div>
        )}
      </div>

      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={handlePreviousPage} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" onClick={handlePreviousPage}>
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {page}
            </PaginationLink>
          </PaginationItem>
          {page !== 20 && (
            <>
              {page !== 19 && (
                <PaginationItem>
                  <PaginationLink href="#" onClick={() => handleNextPage}>
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" onClick={() => handleNextPage(20)}>
                  {20}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" onClick={() => handleNextPage} />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};
