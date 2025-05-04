"use client";
type TitleDetailProps = {
  title: string;
  release_date: string;
  adult: string;
  runtime: string;
  vote_average: number;
  vote_count: string;
};
export const DetailTitle = ({
  title,
  release_date,
  vote_average,
  vote_count,
  adult,
  runtime,
}: TitleDetailProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-extrabold text-3xl">{title}</p>
        <p>
          {release_date} · {adult} · {runtime}
        </p>
      </div>
      <div>
        <p>Rating</p>
        <div className="flex flex-row">
          <div className="flex items-center text-2xl">⭐</div>
          <div>
            <p>
              {vote_average} <span className="text-gray-500">/10</span>
            </p>
            <p className="text-gray-500">{vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
