import ImageSlideshow from "@/components/images/ImageSlideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex mt-20">
        <div className="w-[30rem] ml-20">
          <ImageSlideshow />
        </div>
        <div className="flex-1">
          <div>
            <h1 className=" uppercase tracking-wide bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text text-transparent text-3xl font-bold">
              NextLevel Food For <br /> NextLevel Foodies
            </h1>
            <p className="mt-4 text-lg">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="mt-5 flex gap-6 items-center">
            <Link href="/community" className=" text-orange-400">
              Join The Community
            </Link>
            <Link
              href="/meals"
              className="px-2 py-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-md font-bold"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2 className="">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
