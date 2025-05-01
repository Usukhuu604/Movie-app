import { ShowFullDetailsOfSkeleton } from "./_components/show-full-details-of-skeleton/ShowFullDetailsOfSkeleton";
import { ShowFullDetailsOfTheMovie } from "./_components/show-full-details-of-skeleton/ShowFullDetailsOfTheMovie";

type DetailPageParams = {
  params: {
    movieId: string;
  };
};

const DetailPage = ({ params: { movieId } }: DetailPageParams) => {
  return <div>awef {movieId}</div>;
};

export default DetailPage;
