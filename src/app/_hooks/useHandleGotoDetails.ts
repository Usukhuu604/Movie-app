"use client";

import { useRouter } from "next/navigation";

export const useHandleGotoDetails = (id: string) => () => {
  const router = useRouter();
  router.push(`/detail/${id}`);
};
