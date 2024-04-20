import ImageSlideshow from "@/components/images/ImageSlideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between gap-2 px-4 py-8 mx-auto max-w-7xl">
        <div className="w-96">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-white uppercase tracking-wide">
            NextLevel Food for NextLevel Foodies
          </h1>
          <p className="text-xl text-gray-300">
            Taste & share food from all over the world.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/community"
              className="px-4 py-2 text-center text-white font-bold rounded-md bg-gradient-to-r from-orange-500 to-yellow-300 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-400"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="px-4 py-2 text-center text-gray-300 font-bold rounded-md border border-gray-300 hover:text-white hover:border-white"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="px-4 py-8 mx-auto max-w-7xl">
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold  text-center">How it works</h2>
          <p className="text-xl ">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>
        </section>
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold  text-center">
            Why NextLevel Food?
          </h2>
          <p className="text-xl ">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
