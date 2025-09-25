import { ShowMoviesByGenre } from "./_components/ShowMoviesByGenre";

type Props = {
  params: Promise<{
    genre: string;
  }>;
};

const singleGenrePage = async ({ params }: Props) => {
  const { genre } = await params;
  return (
    <div className="min-h-screen">
      <ShowMoviesByGenre genre_id={genre} />
    </div>
  );
};

export default singleGenrePage;
