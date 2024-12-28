const TMDB_API_KEY = "b6b677eb7d4ec17f700e3d4dfc31d005";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
};

export async function getTrendingMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results;
}

export function getImageUrl(
  path: string | null,
  size: "original" | "w500" = "original"
): string {
  if (!path) return "/placeholder.svg?height=400&width=300";
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export async function getMovieDetails(id: string): Promise<
  Movie & {
    genres: Array<{ id: number; name: string }>;
    runtime: number;
  }
> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data;
}
