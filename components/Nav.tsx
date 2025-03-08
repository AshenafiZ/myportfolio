"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className=" flex gap-8">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={`${pathname === link.path && "text-accent border-b-2 border-accent" } capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
