// MoviePage.tsx
import { getMovieDetails, getImageUrl } from "@/lib/tmdb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(params.id);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Video Player Section with Gradient Overlay */}
      <div className="relative">
        <VideoPlayer movieId={movie.id} movieTitle={movie.title} />
        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-white/80">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Movie Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span>
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
              </span>
              <span className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                {movie.vote_average.toFixed(1)}
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Heart className="h-5 w-5 mr-2" /> Add to My List
              </Button>
            </div>

            <p className="text-gray-200 leading-relaxed">{movie.overview}</p>

            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-gray-300"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={getImageUrl(movie.poster_path, "w500")}
                alt={movie.title}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
