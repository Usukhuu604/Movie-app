"use client";

import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axios-instance";

type Props = {
  movieId?: number;
  isOpen: boolean;
  onClose: () => void;
  movieTitle?: string;
};

export const WatchTrailer = ({
  movieId,
  isOpen,
  onClose,
  movieTitle,
}: Props) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && movieId) {
      fetchTrailer();
    }
  }, [isOpen, movieId]);

  const fetchTrailer = async () => {
    if (!movieId) return;

    setIsLoading(true);
    setTrailerKey(null);

    try {
      const response = await axiosInstance.get(
        `/movie/${movieId}/videos?language=en-US`
      );
      const data = response.data;

      const trailer =
        data.results?.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        ) ||
        data.results?.find(
          (video: any) =>
            video.site === "YouTube" &&
            (video.type === "Teaser" || video.type === "Trailer")
        );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setTrailerKey(null);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white">Loading trailer...</div>
          </div>
        ) : trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
            title={`${movieTitle || "Movie"} Trailer`}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white">No trailer available</div>
          </div>
        )}
      </div>
    </div>
  );
};
