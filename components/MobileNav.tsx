"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLink {
    name: string;
    path: string;
  }  
const links: NavLink[] = [
    { name: 'home', path: '/', },
    { name: 'services', path: '/services', },
    { name: 'resume', path: '/resume', },
    { name: 'work', path: '/work', },
    { name: 'contact', path: '/contact', },
]
const MobileNav: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="flex justify-center items-center">
            <Menu className="text-[32px] text-accent" /> 
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6">
            <div className="text-center text-2xl">Ashenafi</div>
            <nav className="flex flex-col justify-center items-left gap-8">
              {links.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname && "text-accent underline"
                  } text-xl capitalize hover:text-accent transition-all`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      );
    }
    

export default MobileNav





 