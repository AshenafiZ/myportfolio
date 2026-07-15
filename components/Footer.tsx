'use client'
<<<<<<< HEAD
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="md:ml-20 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© {new Date().getFullYear()} Ashenafi Zewdie. All rights reserved.</p>
        </div>
=======
import Socials from "@/components/Socials";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm text-white/40 font-primary">
          © {new Date().getFullYear()} Ashenafi Zewdie — built with Next.js
        </p>
        <Socials containerStyles="flex gap-5" iconStyles="w-8 h-8 border border-white/15 rounded-full flex justify-center items-center text-white/50 text-sm hover:text-accent hover:border-accent transition-all duration-300" />
>>>>>>> redesign-and-fixes
      </div>
    </footer>
  );
}
