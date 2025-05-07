import React from "react";

import { LeadingMovies } from "./LeadingMovies";
import { MoviesSection } from "./MoviesSection";

const endpoints: string[] = [
  "/movie/popular?language=en-US&page=1",
  "/movie/upcoming?language=en-US&page=1",
  "/movie/top_rated?language=en-US&page=1",
  "/movie/now_playing?language=en-US&page=1",
  // "/movie/${movie_id}?language=en-US",
  // "/genre/movie/list?language=en",
  // "/discover/movie?language=en&with_genres=${genre_ids}&page=page",
  // "/search/movie?query={search_value}&language=en-US&page=page",
  // "/movie/{id}/videos?language=en-US",
  // "/movie/id/credits?language=en−US",
  // "/movie/{id}/similar?language=en-US",
];

export const MainPage = () => {
  return (
    <div className="grid gap-y-[52px]">
      <LeadingMovies endpoint={endpoints[3]} />
      <MoviesSection label="Upcoming" endpoint={endpoints[1]} />
      <MoviesSection label="Popular" endpoint={endpoints[0]} />
      <MoviesSection label="Top Rated" endpoint={endpoints[2]} />
    </div>
  );
};
