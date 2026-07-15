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
          />
        </motion.div>

        <motion.svg
          className="absolute w-[110%] h-[110%] pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
