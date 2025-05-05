"use client";

import { useRouter } from "next/navigation";

export const useHandleGotoDetails = () => {
  const router = useRouter();

  return (id: string) => {
    router.push(`/detail/${id}`);
  };
};
