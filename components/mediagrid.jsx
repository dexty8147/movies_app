// components/mediagrid.jsx
import MediaCard from './mediacard';

export default function MediaGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {items.map(item => (
        <MediaCard key={item.id} media={item} />
      ))}
    </div>
  );
}