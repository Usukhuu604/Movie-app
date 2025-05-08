import { ShowMoreSimilarMovies } from "./_components/ShowMoreSimilarMovies";

type MoreLikeProps = {
  params: {
    moreLike: string;
  };
};
const MoreLikeThis = async ({ params }: MoreLikeProps) => {
  const { moreLike } = await params;

  return (
    <div>
      <ShowMoreSimilarMovies movieId={moreLike} />
    </div>
  );
};

export default MoreLikeThis;
