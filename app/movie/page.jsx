// app/movie/page.jsx
import { fetchTrending } from '@/lib/tmdb';
import MediaGrid from '@/components/mediagrid';

export default async function MoviePage() {
  const data = await fetchTrending('movie');
  return (
    <main>
      <h1 className="text-2xl font-bold text-white p-4">Trending Movies</h1>
      <MediaGrid items={data.results} />
    </main>
  );
}