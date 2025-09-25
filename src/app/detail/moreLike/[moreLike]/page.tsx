import { ShowMoreSimilarMovies } from "./_components/ShowMoreSimilarMovies";

type MoreLikeProps = {
  params: {
    moreLike: string;
  };
};
const MoreLikeThis = async ({ params }: MoreLikeProps) => {
  const { moreLike } = await params;

  return (
    <div className="min-h-screen">
      <ShowMoreSimilarMovies movieId={moreLike} />
    </div>
  );
};

export default MoreLikeThis;
