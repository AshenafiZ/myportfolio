'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
        className="relative w-[289px] h-[289px] md:w-[398px] md:h-[398px] flex justify-center items-center"
      >
        <motion.div
          initial={{ x: "100%", opacity: 0.3 }} 
          animate={{
            x: 0, 
            opacity: 1,
            rotate: [0, 360], 
            transition: {
              x: { type: "spring", stiffness: 80, damping: 15, duration: 1 }, 
              opacity: { delay: 0.2, duration: 0.5 }, 
              rotate: { delay: 1, duration: 2, ease: "easeInOut" }, 
            },
          }}
          className="w-full h-full mix-blend-lighten relative"
        >
          <Image
            src="/photo.jpg"
            alt="Profile Photo"
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </motion.div>

        <motion.svg
          className="absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 78', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          /> */}
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
