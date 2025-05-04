"use client";

import { useGetDetails } from "@/app/_hooks/useGetDetails";
import { WatchMovieTrailer } from "./heading/WatchMovieTrailer";
import { DetailTitle } from "./heading/DetailTitle";
import { GiveGenres } from "./heading/GiveGenres";
import { MovieOverview } from "./main/MovieOverview";
import { MoreLikeThis } from "./footer/MoreLikeThis";
import { FooterContent } from "@/app/_components/footer/FooterContent";

type MovieId = {
  id: string;
};

export const FulldetailsPage = ({ id }: MovieId) => {
  const moreDetail = useGetDetails(`/movie/${id}?language=en-US`);
  const movieCredits = useGetDetails(`/movie/${id}/credits?language=en-US`);
  const getSimilarMovies = useGetDetails(`/movie/${id}/similar?language=en-US`);
  const movieTrailerDetail = useGetDetails(`/movie/${id}/videos?language=en-US`);

  return (
    <div className="mx-50 my-20 ">
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
        overview={moreDetail.overview}
        stars={movieCredits.stars}
        directors={movieCredits.directing}
        writing={movieCredits.writing}
      />

      <MoreLikeThis relatedMovies={getSimilarMovies.relatedMovies} isLoading={getSimilarMovies.isLoading} />
    </div>
  );
};
