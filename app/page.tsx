import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between  ">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">Computer Engineering Student</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Ashenafi Zewdie</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">I am proficient in various programming languages and technologies. </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <a href="/resume.pdf" download="Ashenafi_Resume.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-8" >
                  <span>Download CV </span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-2 xl:mb-2">
                <Socials containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none flex items-center ">
            < Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}


