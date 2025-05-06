"use client";

import { useRouter } from "next/navigation";

export const useNavigateHomePage = () => {
  const router = useRouter();

  return () => {
    return router.push("http://localhost:3000");
  };
};
