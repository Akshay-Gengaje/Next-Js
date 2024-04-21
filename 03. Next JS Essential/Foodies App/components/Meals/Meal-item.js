import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 transition duration-300 hover:shadow-lg">
      <header>
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-sans text-white">{title}</h2>
          <p className="text-sm text-gray-400 font-italic">by {creator}</p>
        </div>
      </header>
      <div className="p-4 flex flex-col justify-between h-full">
        <p className="text-gray-200">{summary}</p>
        <div className="text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-flex items-center px-4 py-2 rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:bg-gradient-to-r from-orange-600 to-orange-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
