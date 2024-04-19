import Link from "next/link";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import Image from "next/image";
const MainHeader = () => {
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
          <ul className="flex justify-around items-center h-full ">
            <li>
              <Link href="/">Browse Meals</Link>
            </li>
            <li>
              <Link href="/">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
