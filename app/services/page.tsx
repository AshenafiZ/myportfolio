"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import { FaCode, FaMobileAlt, FaPalette, FaMicrochip } from "react-icons/fa";

const services = [
  {
    id: "web-development",
    name: "Web Development",
    icon: <FaCode className="text-blue-500 text-5xl" />,
    description: "We build fast, modern, and scalable websites using the latest technologies like React, Next.js, and Node.js."
  },
  {
    id: "web-design",
    name: "Web Design",
    icon: <FaPalette className="text-yellow-500 text-5xl" />,
    description: "Create stunning UI/UX designs with a focus on user experience, responsiveness, and modern aesthetics."
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    icon: <FaMobileAlt className="text-green-500 text-5xl" />,
    description: "Develop cross-platform and native mobile apps for Android and iOS with Flutter, React Native, and Swift."
  },
  {
    id: "hardware-design",
    name: "Hardware Design",
    icon: <FaMicrochip className="text-red-500 text-5xl" />,
    description: "We design and prototype electronic circuits, IoT devices, and embedded systems for smart applications."
=======
import { FaCode, FaMobileAlt, FaPalette, FaMicrochip, FaNetworkWired } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    ref: "SRV.WEB",
    name: "Web Development",
    icon: <FaCode className="text-2xl" />,
    description: "Fast, modern, scalable web apps built with React, Next.js, and Node.js — from landing pages to full backends.",
    stack: ["React", "Next.js", "Node.js", "MySQL"],
  },
  {
    id: "02",
    ref: "SRV.UX",
    name: "Web Design",
    icon: <FaPalette className="text-2xl" />,
    description: "Interface design focused on clarity and usability — responsive layouts that hold up on every screen.",
    stack: ["Figma", "Tailwind", "Motion"],
  },
  {
    id: "03",
    ref: "SRV.APP",
    name: "Mobile App Development",
    icon: <FaMobileAlt className="text-2xl" />,
    description: "Cross-platform and native apps for Android and iOS, built with Flutter and React Native.",
    stack: ["Flutter", "React Native"],
  },
  {
    id: "04",
    ref: "SRV.HW",
    name: "Hardware Design",
    icon: <FaMicrochip className="text-2xl" />,
    description: "Circuit design, IoT devices, and embedded systems — from schematic to working prototype.",
    stack: ["Embedded C", "IoT", "PCB design"],
  },
  {
    id: "05",
    ref: "SRV.NET",
    name: "Network & Infrastructure",
    icon: <FaNetworkWired className="text-2xl" />,
    description: "Data center operations, routing/switching, and network troubleshooting — hands-on experience from Tier III banking infrastructure and Huawei network deployments.",
    stack: ["Routing & switching", "Data center ops", "Microwave link planning"],
>>>>>>> redesign-and-fixes
  }
];

const ServicesPage = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Our Services
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className="p-6 flex flex-col items-center text-center bg-[#27272c] shadow-lg rounded-lg border border-gray-200 transition-all duration-300"
          >
            <div>{service.icon}</div>
            <h2 className="text-xl font-semibold mt-3">{service.name}</h2>
            <p className="text-white/60 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
=======
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        <span className="eyebrow mb-4">SPEC — What I build</span>
        <h1 className="h2 mb-2">Services</h1>
        <p className="text-white/60 font-primary max-w-[560px] mb-10">
          Four disciplines, one build process: understand the problem, prototype fast, ship something reliable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative p-7 bg-surface border border-white/5 rounded-lg hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-md bg-surface-raised flex items-center justify-center text-accent group-hover:text-trace transition-colors">
                  {service.icon}
                </div>
                <span className="font-primary text-[11px] tracking-[2px] text-white/30">{service.ref}</span>
              </div>
              <h2 className="h3 mb-2">{service.name}</h2>
              <p className="text-white/60 font-primary text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((s) => (
                  <span key={s} className="text-[11px] font-primary tracking-wide text-trace/80 bg-trace/10 px-2 py-1 rounded">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contact">
            <Button size="lg" className="uppercase">Start a project</Button>
          </Link>
        </div>
      </div>
    </motion.section>
>>>>>>> redesign-and-fixes
  );
};

export default ServicesPage;
