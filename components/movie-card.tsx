import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Movie, getImageUrl } from "@/lib/tmdb"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="w-[250px] bg-zinc-800 border-none hover:scale-105 transition-transform duration-200">
        <CardContent className="p-0">
          <img
            src={getImageUrl(movie.poster_path, 'w500')}
            alt={movie.title}
            className="w-full h-[140px] object-cover rounded-t-md"
          />
          <div className="p-4">
            <h4 className="font-semibold truncate text-white">{movie.title}</h4>
            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-gray-300">
                {new Date(movie.release_date).getFullYear()}
              </p>
              <p className="text-sm text-gray-300 flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

