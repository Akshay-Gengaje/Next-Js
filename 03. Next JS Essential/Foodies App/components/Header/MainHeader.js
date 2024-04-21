"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
const MainHeader = () => {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between p-5">
        <Link href="/" className="flex items-center">
          <Image
            src={logoImg.src}
            alt="A plate with food on it"
            width={45}
            height={45}
          />
          <span className="text-xl font-semibold mx-2">NextLevel Food</span>
        </Link>
        <nav className="flex-1">
          <ul className="flex justify-around items-center h-full font-semibold text-lg">
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
