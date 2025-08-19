interface BlogCardProps {
  imageURL: string;
  href: string;
  title: string;
  description: string;
  tags: string[];
}

export default function BlogCard({
  imageURL,
  href,
  title,
  description,
  tags,
}: BlogCardProps) {
  return (
    <article draggable={false} className="rounded-2xl  overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
      <a href={href} className="block">
        <img
        draggable={false}
          src={imageURL}
          alt={title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </a>
      <div className="p-5">
        <a href={href}>
          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 line-clamp-2">
            {title}
          </h2>
        </a>
        <p className="mt-3 text-gray-700 text-sm line-clamp-3">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
