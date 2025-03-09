"use client";

import { motion } from "framer-motion";
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
  }
];

const ServicesPage = () => {
  return (
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
  );
};

export default ServicesPage;
