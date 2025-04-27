"use client";

import React from "react";
import { useFetchClientData } from "@/app/_utils/_hooks/useFetchDataInClient";

type Props = {
  label: string;
  endpoint: string;
};

export const MoviesSection = ({ label, endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);
  console.log(data);
  return (
    <div>
      <div className="flex w-full h-[980px]">
        <p>{label}</p>
        <p>See more</p>
      </div>
      <div className="grid grid-col-5 grid-row-2 gap-8"></div>
    </div>
  );
};
