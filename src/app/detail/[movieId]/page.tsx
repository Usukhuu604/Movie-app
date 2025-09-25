import { FulldetailsPage } from "./_components/FullDetailsPage";

type DetailPageParams = {
  params: Promise<{
    movieId: string;
  }>;
};

const DetailPage = async ({ params }: DetailPageParams) => {
  try {
    const { movieId } = await params;

    return (
      <div className="min-h-screen sm:p-8">
        <FulldetailsPage id={movieId} />
      </div>
    );
  } catch (error) {
    console.error("Error loading movie details:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Failed to load movie details. Please try again later.
        </p>
      </div>
    );
  }
};

export default DetailPage;
