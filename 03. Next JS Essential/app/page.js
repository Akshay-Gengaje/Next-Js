import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 h-screen w-screen text-white flex flex-col items-center justify-center">
      <img
        className="w-20"
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
      />
      <h1 className="text-3xl font-extrabold">
        Welcome to this NextJS Course!
      </h1>
      <p className="text-xl">🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about">About</Link>
    </main>
  );
}
