type MoreLikeProps = {
  params: {
    moreLike: string;
  };
};
const MoreLikeThis = ({ params: { moreLike } }: MoreLikeProps) => {
  return <div>{moreLike}awefawefawef</div>;
};

export default MoreLikeThis;
