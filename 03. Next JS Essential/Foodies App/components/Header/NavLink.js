import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) &&
        "bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent"
      }
    >
      {children}
    </Link>
  );
}
