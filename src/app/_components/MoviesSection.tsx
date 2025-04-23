import React from "react";

export const MoviesSection = ({ label }) => {
  return (
    <div>
      <div className="flex w-full h-[980px]">
        <p>{label}</p>
        <p>See more</p>
      </div>
      <div className="grid grid-col-5 grid-row-2 gap-8">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
