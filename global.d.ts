export type Movie = {
  key: string;
  id: string;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  poster: string;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
};
