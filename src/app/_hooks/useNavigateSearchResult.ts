"use client";

import { useRouter } from "next/navigation";

export const useNavigateSearchResult = () => {
  const router = useRouter();

  return (input: string) => {
    router.push(`/searched/${input}`);
  };
};
