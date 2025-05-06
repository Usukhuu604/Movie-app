type MoreLikeProps = {
  params: {
    moreLike: string;
  };
};
const MoreLikeThis = async ({ params }: MoreLikeProps) => {
  const { moreLike } = await params;

  return <div>{moreLike}awefawefawef</div>;
};

export default MoreLikeThis;
