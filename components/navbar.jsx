// components/navbar.jsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <nav className="bg-gray-900 p-4 flex flex-wrap gap-4 items-center">
      <Link href="/movie" className="text-white hover:text-yellow-400">Movies</Link>
      <Link href="/tv" className="text-white hover:text-yellow-400">TV Shows</Link>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="px-2 py-1 rounded text-black"
        />
        <button type="submit" className="bg-yellow-500 px-3 py-1 rounded text-black font-semibold">Go</button>
      </form>
    </nav>
  );
}