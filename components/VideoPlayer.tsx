// VideoPlayer.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoPlayerProps {
  movieId: number;
  movieTitle: string;
}

export default function VideoPlayer({ movieId, movieTitle }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-[56.25vw] max-h-[70vh] bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent z-10" />
      <iframe
        src={`https://www.2embed.cc/embed/${movieId}`}
        className={`w-full h-full ${
          isPlaying ? "absolute top-0 left-0 z-[99999]" : ""
        }`}
        allowFullScreen
      />
      {/* Movie Title and Play Button Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {movieTitle}
        </h1>
        <Button
          onClick={() => setIsPlaying(true)}
          className="bg-white text-black hover:bg-white/90"
        >
          <Play className="h-4 w-4 mr-2" /> Play
        </Button>
      </div>
    </div>
  );
}
