import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl">Blog Page</h1>
      <div className="flex gap-5">
        <Link className="hover:underline" href="/blog/post-1">
          Post 1
        </Link>
        <Link className="hover:underline" href="/blog/post-2">
          Post 2
        </Link>
      </div>
    </div>
  );
}
