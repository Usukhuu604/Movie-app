import React from "react";
import { ShowMoviesByGenre } from "./_components/ShowMoviesByGenre";
import { FooterContent } from "@/app/_components/footer/FooterContent";
type Props = {
  params: {
    genre: string;
  };
};

const singleGenrePage = async ({ params }: Props) => {
  const { genre } = await params;
  return (
    <div>
      <ShowMoviesByGenre genre_id={genre} />
      <FooterContent />
    </div>
  );
};

export default singleGenrePage;
