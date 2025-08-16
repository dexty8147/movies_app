// lib/tmdb.js
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrending(mediaType = 'movie', timeWindow = 'day') {
  if (!API_KEY) throw new Error('TMDB API key is missing');
  const res = await fetch(`${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch trending data');
  return res.json();
}

export async function searchMedia(query) {
  if (!API_KEY) throw new Error('TMDB API key is missing');
  const res = await fetch(`${BASE_URL}/search/multi?query=${encodeURIComponent(query)}&api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to search media');
  return res.json();
}