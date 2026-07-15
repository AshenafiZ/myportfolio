import React from 'react';
import {motion, Variants} from 'framer-motion';

const Stairs: React.FC = () => {
  const stairAnimation: Variants = {
    initial: {
      top: "0%",
    },
    animate: (index: number) => ({
      top: [
        "0%",
        `${Math.random() * 30 + 10}%`, 
        `${Math.random() * 30 + 50}%`, 
        `${Math.random() * 10 + 80}%`, 
        "0%"
      ],
      transition: {
        duration: 1 + index * 0.5, 
        ease: "easeInOut",
        repeatDelay: 0.001, 
      },
    }),
    exit: {
      top: ["0%", "100%"],
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
  };

  const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };

  return (
    <>
      {[...Array(21)].map((_, index: number) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={index} 
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.001,
          }}
          className="w-full h-[10px] bg-accent relative" 
        />
      ))}
    </>
  );
}

export default Stairs;
