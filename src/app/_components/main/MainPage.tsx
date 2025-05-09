import React from "react";

import { LeadingMovies } from "./LeadingMovies";
import { MoviesSection } from "./MoviesSection";

const endpoints: string[] = [
  "/movie/popular?language=en-US&page=1",
  "/movie/upcoming?language=en-US&page=1",
  "/movie/top_rated?language=en-US&page=1",
  "/movie/now_playing?language=en-US&page=1",
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
