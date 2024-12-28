import { Movie } from "@/lib/tmdb"
import { MovieCard } from "./movie-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface MovieRowProps {
  title: string
  movies: Movie[]
}

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

