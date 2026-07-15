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
<<<<<<< HEAD
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
            src="/photo3.jpg"
            alt="Profile Photo"
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
=======
          transition: { delay: 0.5, duration: 0.5, ease: 'easeIn' },
        }}
        className="component-frame relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] flex justify-center items-center"
      >
        {/* pin marks */}
        <span aria-hidden className="cf-tr absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-[1.5px] border-accent border-l-0 border-b-0" />
        <span aria-hidden className="cf-bl absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-[1.5px] border-accent border-r-0 border-t-0" />

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="w-[92%] h-[92%] relative rounded-full overflow-hidden ring-1 ring-white/10"
        >
          <Image
            src="/photo3.jpg"
            alt="Ashenafi Zewdie"
            priority
            quality={100}
            fill
            className="object-cover"
>>>>>>> redesign-and-fixes
          />
        </motion.div>

        <motion.svg
<<<<<<< HEAD
          className="absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
=======
          className="absolute w-[110%] h-[110%] pointer-events-none"
>>>>>>> redesign-and-fixes
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
<<<<<<< HEAD
          
=======
          <motion.circle
            cx="253"
            cy="253"
            r="245"
            stroke="#5FD3C4"
            strokeWidth="1.5"
            className="trace-dash"
            strokeOpacity={0.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, transition: { delay: 0.4, duration: 2, ease: 'easeInOut' } }}
          />
>>>>>>> redesign-and-fixes
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
