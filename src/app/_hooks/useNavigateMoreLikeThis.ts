"use client";
import { useRouter } from "next/navigation";

export const useNavigateMoreLikeThis = () => {
  const router = useRouter();
  return (text: string[]) => {
    router.push(`/detail/moreLike/${text}`);
  };
};
