import ShowMovies from "./_components/ShowMovies";

type SeeMoreProps = {
  params: {
    seeMore: string;
  };
};

const SeeMore = async ({ params }: SeeMoreProps) => {
  const { seeMore } = await params;
  const endpoint = `/movie/${seeMore}?language=en-US&page=1`;

  return (
    <div className="min-h-screen">
      <ShowMovies endpoint={endpoint} section={seeMore} />
    </div>
  );
};

export default SeeMore;
