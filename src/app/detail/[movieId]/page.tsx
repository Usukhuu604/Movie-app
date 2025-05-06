import { FooterContent } from "@/app/_components/footer/FooterContent";
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
      <FooterContent />
    </div>
  );
};

export default DetailPage;
