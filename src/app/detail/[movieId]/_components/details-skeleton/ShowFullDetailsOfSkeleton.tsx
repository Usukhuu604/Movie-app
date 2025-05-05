import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ShowFullDetailsOfSkeleton = () => {
  return (
    <div className="w-screen px-45 rounded-2xl flex flex-col">
      <div className="w-full h-131 flex flex-col ">
        <div className="w-full flex justify-between ">
          <div className="w-[211px] h-[72px] flex flex-col justify-around">
            <Skeleton className="w-full h-8 bg-gray-300" />
            <Skeleton className="w-full h-5 bg-gray-300" />
          </div>
          <div className="w-[83px] h-full flex flex-col justify-around">
            <p className="h-5">Rating</p>
            <Skeleton className="w-full h-5 bg-gray-300" />
            <Skeleton className="w-full h-5 bg-gray-300" />
          </div>
        </div>

        <div className="w-full flex justify-between">
          <Skeleton className="w-[290px] h-[428px] bg-gray-300" />
          <Skeleton className="w-[760px] h-[428px] bg-gray-300" />
        </div>
      </div>

      <div>
        <p className="h-5">some related genres</p>
      </div>

      <div className="w-full h-70  flex flex-col justify-between">
        <Skeleton className="w-full h-4 bg-gray-300" />
        <Skeleton className="w-40 h-4 bg-gray-300" />
        <div className="space-y-4">
          <div className="flex space-x-5">
            <Skeleton className="w-10 h-5 bg-gray-300" />
            <Skeleton className="w-100 h-5 bg-gray-300" />
          </div>
          <hr className="text-gray-400" />
          <div className="flex space-x-5">
            <Skeleton className="w-10 h-5 bg-gray-300" />
            <Skeleton className="w-100 h-5 bg-gray-300" />
          </div>
          <hr className="text-gray-400" />
          <div className="flex space-x-5">
            <Skeleton className="w-10 h-5 bg-gray-300" />
            <Skeleton className="w-100 h-5 bg-gray-300" />
          </div>
          <hr className="text-gray-400" />
        </div>
      </div>

      <div className="w-full h-110 flex flex-col justify-between">
        <div className="flex justify-between">
          <Skeleton className="w-100 h-5 bg-gray-300" />
          <Skeleton className="w-100 h-5 bg-gray-300" />
        </div>
        <div className="grid grid-cols-5 gap-8">
          <Skeleton className=" h-93 bg-gray-300" />
          <Skeleton className=" h-93 bg-gray-300" />
          <Skeleton className=" h-93 bg-gray-300" />
          <Skeleton className=" h-93 bg-gray-300" />
          <Skeleton className=" h-93 bg-gray-300" />
        </div>
      </div>
    </div>
  );
};
