"use client";

import { useFetchClientData } from "@/app/_hooks/useFetchDataInClient";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, useRef, useCallback } from "react";
import { WatchTrailer } from "../header/WatchTrailer";
import Image from "next/image";

type Props = {
  endpoint: string;
};

export const LeadingMovies = ({ endpoint }: Props) => {
  const { data, isLoading } = useFetchClientData(endpoint);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const handleWatchTrailer = (movieId: number, movieTitle: string) => {
    setSelectedMovieId(movieId);
    setSelectedMovieTitle(movieTitle);
    setShowTrailer(true);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    setSelectedMovieId(null);
    setSelectedMovieTitle("");
    resetAutoSlide();
  };

  const nextSlide = () => {
    if (data?.results) {
      setCurrentSlide((prev) => (prev + 1) % Math.min(data.results.length, 5));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setDragOffset(currentX - dragStart);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    const movies = data?.results?.slice(0, 5) || [];

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
      } else {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
      }
    }

    setDragOffset(0);
    resetAutoSlide();
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [data, resetAutoSlide]);

  if (isLoading) {
    return (
      <section className="relative w-full">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Skeleton className="w-full h-full" />
        </div>
      </section>
    );
  }

  if (!data?.results?.length) {
    return null;
  }

  const movies = data.results.slice(0, 5);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {movies.map((movie: Movie, index: number) => {
          const leadingMovie =
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path;

          const translateX = isDragging
            ? `${
                (index - currentSlide) * 100 +
                (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100
              }%`
            : `${(index - currentSlide) * 100}%`;

          return (
            <div
              key={index}
              className={`absolute inset-0 ${
                isDragging
                  ? ""
                  : "transition-transform duration-500 ease-in-out"
              }`}
              style={{
                transform: `translateX(${translateX})`,
              }}
            >
              <Image
                src={leadingMovie}
                alt=""
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl text-white space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base font-medium">
                      Now Playing
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {movie.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                      ⭐️{movie.vote_average.toFixed(1)}
                      <span className="text-gray-300">/10</span>
                    </p>
                    <p className="hidden sm:block text-sm md:text-base text-gray-200 line-clamp-3 max-w-xl">
                      {movie.overview}
                    </p>
                    <Button
                      className="bg-white hover:bg-gray-100 text-black border-0 rounded-lg mt-4 px-6 py-2 font-semibold transition-colors cursor-pointer"
                      onClick={() =>
                        handleWatchTrailer(Number(movie.id), movie.title)
                      }
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {movies.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {movies.map((_: Movie, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      <WatchTrailer
        movieId={selectedMovieId || undefined}
        isOpen={showTrailer}
        onClose={closeTrailer}
        movieTitle={selectedMovieTitle}
      />
    </section>
  );
};
