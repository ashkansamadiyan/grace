import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MovieRow } from "@/components/movie-row";
import {
  getTrendingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getImageUrl,
} from "@/lib/tmdb";

export default async function Home() {
  const [trendingMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    getTrendingMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  const featuredMovie = trendingMovies[0];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <h1 className="text-red-600 text-4xl font-bold">GRACE AI</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>TV Shows</li>
            <li>Movies</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <img
          src={getImageUrl(featuredMovie.backdrop_path)}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-8 space-y-4 z-20">
          <h2 className="text-5xl font-bold">{featuredMovie.title}</h2>
          <p className="text-lg max-w-2xl">{featuredMovie.overview}</p>
          <div className="flex space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200">
              <PlayIcon className="mr-2 h-4 w-4" /> Play
            </Button>
            <Button variant="outline">More Info</Button>
          </div>
        </div>
      </section>

      {/* Movie Categories */}
      <section className="relative px-8 pb-8 space-y-8 mt-16 z-20">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Top Rated" movies={topRatedMovies} />
        <MovieRow title="Upcoming" movies={upcomingMovies} />
      </section>
    </div>
  );
}
