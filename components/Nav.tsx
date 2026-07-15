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
<<<<<<< HEAD
    <nav className=" flex gap-8">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={`${pathname === link.path && "text-accent border-b-2 border-accent" } capitalize font-medium hover:text-accent transition-all`}>
=======
    <nav className="flex gap-7 font-primary text-sm">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={`${pathname === link.path ? "text-accent" : "text-white/70"} relative capitalize tracking-wide hover:text-accent transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-accent after:transition-all ${pathname === link.path ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>
>>>>>>> redesign-and-fixes
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
