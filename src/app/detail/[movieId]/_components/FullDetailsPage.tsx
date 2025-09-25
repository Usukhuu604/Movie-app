"use client";

import { WatchMovieTrailer } from "./heading/WatchMovieTrailer";
import { useGetDetails } from "@/app/_hooks/useGetDetails";
import { DetailTitle } from "./heading/DetailTitle";
import { GiveGenres } from "./heading/GiveGenres";
import { MoreLikeThis } from "./footer/MoreLikeThis";
import { MovieOverview } from "./overview/MovieOverview";
import { ShowFullDetailsOfSkeleton } from "./details-skeleton/ShowFullDetailsOfSkeleton";

type MovieId = {
  id: string;
};

export const FulldetailsPage = ({ id }: MovieId) => {
  const moreDetail = useGetDetails(`/movie/${id}?language=en-US`);
  const movieCredits = useGetDetails(`/movie/${id}/credits?language=en-US`);
  const getSimilarMovies = useGetDetails(`/movie/${id}/similar?language=en-US`);
  const movieTrailerDetail = useGetDetails(`/movie/${id}/videos?language=en-US`);

  let pageIsLoading: boolean =
    moreDetail.isLoading && movieCredits.isLoading && getSimilarMovies.isLoading && movieTrailerDetail.isLoading;

  if (pageIsLoading) {
    return (
      <div>
        <ShowFullDetailsOfSkeleton />
      </div>
    );
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-50 my-8 sm:my-12 md:my-15">
      <DetailTitle
        title={moreDetail.title}
        adult={moreDetail.adult}
        runtime={moreDetail.runtime}
        vote_count={moreDetail.vote_count}
        release_date={moreDetail.release_date}
        vote_average={moreDetail.vote_average}
      />

      <WatchMovieTrailer
        title={moreDetail.title}
        poster_path={moreDetail.poster_path}
        backdrop_path={moreDetail.backdrop_path}
        movieTrailerKey={movieTrailerDetail.movieTrailerKey}
      />

      <GiveGenres genres={moreDetail.genres} />

      <MovieOverview
        stars={movieCredits.stars}
        overview={moreDetail.overview}
        writing={movieCredits.writing}
        directors={movieCredits.directing}
      />

      <MoreLikeThis
        relatedMovies={getSimilarMovies.relatedMovies}
        isLoading={getSimilarMovies.isLoading}
        movieId={id}
      />
    </div>
  );
};
