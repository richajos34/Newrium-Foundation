// src/components/BookCard.tsx
interface BookCardProps {
  title: string;
  author: string;
  description: string;
  coverUrl?: string;
}

export default function BookCard({
  title,
  author,
  description,
  coverUrl,
}: BookCardProps) {
  return (
    <div className="w-60 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-72 bg-gray-200">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">By: {author}</p>
        <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}