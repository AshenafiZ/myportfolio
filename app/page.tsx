'use client'

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-full pcb-grid">
      <section className="container mx-auto h-full pt-8 xl:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            className="text-center md:text-left order-2 md:order-none"
          >
            <span className="eyebrow justify-center md:justify-start mb-4">
              Full Stack Developer • Computer Engineer • Network Engineer
            </span>

            {/* Primary SEO Heading */}
            <h1 className="h1 text-accent" >
              Ashenafi <span className="text-accent">Zewdie</span>
            </h1>

            <h2 className="text-xl mt-3 mb-6 text-white/80">
              Full Stack Developer, Computer Engineer & IoT Engineer
            </h2>

            <p className="max-w-[600px] mb-6 text-white/70 font-primary leading-relaxed">
              I'm <strong>Ashenafi Zewdie</strong>, a Computer Engineer from
              Addis Ababa University and a Full Stack Developer based in
              Ethiopia. I specialize in Next.js, React, TypeScript, Flutter,
              Node.js, IoT, Embedded Systems, Huawei networking, and Tier III
              Data Center operations at Dashen Bank.
            </p>

            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <a
                href="/AshenafiZewdie.pdf"
                download="Ashenafi_Zewdie_Resume.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-8"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent/60 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
              />
            </div>

            {/* Hidden SEO Text */}
            <div className="sr-only">
              Ashenafi Zewdie portfolio. Computer Engineer from Addis Ababa
              University. Full Stack Developer specializing in Next.js, React,
              TypeScript, Flutter, Firebase, MERN Stack, Embedded Systems,
              Networking, IoT, Huawei Technologies, and Data Center
              Infrastructure.
            </div>
          </motion.div>

          <div className="order-1 md:order-none flex items-center">
            <Photo />
          </div>
        </div>
      </section>

      <Stats />
    </main>
  );
}