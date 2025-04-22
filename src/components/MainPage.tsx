import React from "react";
import { LeadingMovies } from "./LeadingMovies";
import { MoviesSection } from "./MoviesSection";

export const MainPage = () => {
  return (
    <div>
      <LeadingMovies />
      <MoviesSection label="Upcoming" />
      <MoviesSection label="Popular" />
      <MoviesSection label="Top Rated" />
    </div>
  );
};
