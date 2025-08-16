// app/search/page.jsx
import { searchMedia } from '@/lib/tmdb';
import MediaGrid from '@/components/mediagrid';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || '';
  const data = query ? await searchMedia(query) : { results: [] };

  return (
    <main>
      <h1 className="text-2xl font-bold text-white p-4">Search Results for "{query}"</h1>
      {data.results.length > 0 ? (
        <MediaGrid items={data.results} />
      ) : (
        <p className="text-gray-400 p-4">No results found.</p>
      )}
    </main>
  );
}