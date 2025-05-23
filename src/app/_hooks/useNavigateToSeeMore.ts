"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const useNavigateToSeeMore = () => {
  const router = useRouter();
  return (endpoint: string) => {
    return router.push(`/see-more/${endpoint}`);
  };
};
