"use client";

import React, { useState } from "react";
import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { MoviePoster } from "@/app/_components/common/MoviePoster";
import { Skeleton } from "@/components/ui/skeleton";

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
  endpoint: string;
};

export const ShowSearchResults = ({ endpoint }: Props) => {
  const [page, setPage] = useState(1);
  const searchQuery = endpoint.split("query=")[1]?.split("&")[0];
  const paginatedEndpoint = `/search/movie?query=${searchQuery}&language=en-US&page=${page}`;

  const { data, isLoading } = useFetchClientData(paginatedEndpoint);

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

  const totalPages = data?.total_pages || 20;
  const maxPages = Math.min(totalPages, 20);

  return (
    <div className="w-full">
      <p className="text-lg mb-5">
        {data?.total_results ? `${data.total_results} results found` : "Loading..."}
        {data?.total_results && ` (Page ${page} of ${maxPages})`}
      </p>

      <div className="grid grid-cols-4 gap-12 mb-8">
        {!isLoading
          ? data?.results?.map((movie: { id: string; title: string; poster_path: string; vote_average: number }) => {
              let poster = movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}` : null;
              let key = movie?.id;
              return (
                <MoviePoster
                  key={key}
                  poster={poster}
                  id={movie?.id}
                  title={movie?.title}
                  vote_average={movie?.vote_average}
                />
              );
            })
          : Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="w-full h-auto flex items-center">
                <Skeleton className="w-full h-[400px]" />
              </div>
            ))}
      </div>

      {data?.results?.length === 0 && !isLoading && (
        <p className="text-center text-gray-500 text-lg">No results found</p>
      )}

      {data?.results && data.results.length > 0 && (
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
            {page !== maxPages && (
              <>
                {page !== maxPages - 1 && (
                  <PaginationItem>
                    <PaginationLink href="#" onClick={() => handleNextPage()}>
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" onClick={() => handleNextPage(maxPages)}>
                    {maxPages}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" onClick={() => handleNextPage()} />
                </PaginationItem>
              </>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};
