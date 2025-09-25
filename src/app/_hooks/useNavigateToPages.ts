"use client";

import { useRouter } from "next/navigation";

export const useNavigateToPages = () => {
  const router = useRouter();

  return (page: string, id: string | number) => {
    router.push(`/${page}/${id}`);
  };
};
