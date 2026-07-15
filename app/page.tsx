'use client'
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-full pcb-grid">
      <div className="container mx-auto h-full pt-8 xl:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' } }}
            className="text-center md:text-left order-2 md:order-none"
          >
            <span className="eyebrow justify-center md:justify-start mb-4">SYS.INIT — Data Center &amp; Network Engineer</span>
            <h1 className="h1">
              Hello, I&apos;m <br /> <span className="text-accent">Ashenafi Zewdie</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/70 font-primary text-[15px] leading-relaxed">
              I work across the full stack of infrastructure — from Tier III data center operations at Dashen Bank and Huawei network engineering, down to the React and Next.js interfaces and embedded circuits I build on the side. Electrical &amp; Computer Engineering, Addis Ababa University.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <a href="/AshenafiZewdie.pdf" download="Ashenafi_Resume.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-8">
                  <span>Download CV </span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-2 xl:mb-2">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent/60 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"/>
              </div>
            </div>
          </motion.div>
          <div className="order-1 md:order-none flex items-center">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}