// app/movie/page.jsx
import { fetchTrending } from '@/lib/tmdb';
import MediaGrid from '@/components/mediagrid';

export default async function MoviePage() {
  try {
    const data = await fetchTrending('movie');
    return (
      <main>
        <h1 className="text-2xl font-bold text-white p-4">Trending Movies</h1>
        <MediaGrid items={data.results} />
      </main>
    );
  } catch (error) {
    return (
      <main className="p-4 text-red-500">
        <h1>Error loading trending movies</h1>
        <p>{error.message}</p>
        <p className="text-gray-400">Check your TMDB API key and restart the server.</p>
      </main>
    );
  }
}