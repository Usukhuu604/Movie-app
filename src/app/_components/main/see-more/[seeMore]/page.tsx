import React from "react";

type SeeMoreProps = {
  params: { seeMore: string };
};

const SeeMore = async ({ params }: SeeMoreProps) => {
  const { seeMore } = await params;

  return <div>{seeMore} awefawef</div>;
};

export default SeeMore;
