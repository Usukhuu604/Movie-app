"use client";
import React from "react";
import { useFetchClientData } from "@/app/_utils/_hooks/useFetchDataInClient";

export const WatchTrailer = () => {
  const { data, isLoading } = useFetchClientData(
    "/movie/1197306/videos?language=en-US"
  );
  const youtubeUrl = `https://www.youtube.com/embed/hyEVX-4uK_4`;
  console.log(data);
  return (
    <div className="w-full aspect-video my-4 absolute z-100">
      <iframe
        width="30%"
        height="30%"
        src={youtubeUrl}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
