// app/tv/page.jsx
import { fetchTrending } from '@/lib/tmdb';
import MediaGrid from '@/components/mediagrid';

export default async function TVPage() {
  const data = await fetchTrending('tv');
  return (
    <main>
      <h1 className="text-2xl font-bold text-white p-4">Trending TV Shows</h1>
      <MediaGrid items={data.results} />
    </main>
  );
}