// components/mediacard.jsx
export default function MediaCard({ media }) {
  const title = media.title || media.name;
  const imageUrl = media.poster_path
    ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
    : '/fallback.jpg';

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{media.release_date || media.first_air_date}</p>
      </div>
    </div>
  );
}