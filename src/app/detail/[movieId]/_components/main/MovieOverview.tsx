"use client";

type MovieOverviewProps = {
  overview: string;
  directors: string[];
  writing: string[];
  stars: string[];
};

export const MovieOverview = ({ directors, overview, writing, stars }: MovieOverviewProps) => {
  return (
    <div className="  py-8 ">
      <p>{overview}</p>

      <div className="mb-8">
        <div className="flex mb-2">
          <p className="font-semibold w-24">Director</p>
          <p className="">{directors?.join(", ")}</p>
        </div>

        <hr />

        <div className="flex mb-2">
          <p className="font-semibold w-24">Writers</p>
          <p className="">{writing?.join(", ")}</p>
        </div>

        <hr />

        <div className="flex mb-2">
          <p className="font-semibold w-24">Stars</p>
          <p className="">{stars?.join(", ")}</p>
        </div>

        <hr />
      </div>
    </div>
  );
};
