"use client";

type MovieOverviewProps = {
  overview: string;
  directors: string[];
  writing: string[];
  stars: string[];
};

export const MovieOverview = ({ directors, overview, writing, stars }: MovieOverviewProps) => {
  return (
    <div className="py-8">
      <p className="mb-4">{overview}</p>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row mb-2">
          <p className="font-semibold w-full sm:w-24 mb-1 sm:mb-0">Director</p>
          <p className="">{directors?.join(", ")}</p>
        </div>

        <hr />

        <div className="flex flex-col sm:flex-row mb-2">
          <p className="font-semibold w-full sm:w-24 mb-1 sm:mb-0">Writers</p>
          <p className="">{writing?.join(", ")}</p>
        </div>

        <hr />

        <div className="flex flex-col sm:flex-row mb-2">
          <p className="font-semibold w-full sm:w-24 mb-1 sm:mb-0">Stars</p>
          <p className="">{stars?.join(", ")}</p>
        </div>

        <hr />
      </div>
    </div>
  );
};
