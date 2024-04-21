import MealsGrid from "@/components/Meals/Meals-grid";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className="mt-24 mx-20">
        <h1 className="font-bold text-4xl tracking-wider">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="mt-5 text-xl">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="mt-3">
          <Link
            href="/meals/share"
            className="capitalize bg-gradient-to-r from-orange-400 to-orange-600 py-1 px-2  rounded-md "
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
