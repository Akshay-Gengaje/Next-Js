import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="mt-10 flex flex-col justify-center items-center gap-3 px-4 py-8 mx-auto max-w-7xl  text-gray-300">
        <h1 className="text-4xl font-sans font-bold text-white ">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent font-bold  ">
            Food
          </span>
        </h1>
        <p className="mt-5 text-2xl">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="flex flex-col justify-center items-center py-8 mx-auto max-w-md">
        <h2 className="text-2xl font-sans font-bold text-gray-300 mb-8">
          Community Perks
        </h2>
        <ul className="list-none space-y-8">
          <li className="flex flex-col justify-center items-center gap-2">
            <Image src={mealIcon} alt="A delicious meal" />
            <p className="text-xl font-sans font-bold text-gray-300">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p className="text-xl font-sans font-bold text-gray-300">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-2">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className="text-xl font-sans font-bold text-gray-300">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
