import { FulldetailsPage } from "./_components/FullDetailsPage";

type DetailPageParams = {
  params: {
    movieId: string;
  };
};

const DetailPage = async ({ params }: DetailPageParams) => {
  const { movieId } = await params;

  return (
    <div>
      <FulldetailsPage id={movieId} />
    </div>
  );
};

export default DetailPage;
