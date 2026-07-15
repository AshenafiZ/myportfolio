'use client';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            num: 3,
            text: 'Years of experience',
        },
        {
            num: 8,
            text: 'Technologies mastered',
        },
        {
            num: 14,
            text: 'Projects completed',
        },
        {
            num: 300,
            text: 'Code commits',
        },
    ]
  return (
    <section className="pt-6 pb-8 xl:pb-6 border-t border-white/5 mt-8">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) =>{
                    return <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="flex-1 flex flex-col gap-1 items-center xl:items-start justify-center border-l-2 border-accent/40 pl-4"
                    >
                        <div className="font-display text-4xl xl:text-5xl font-bold text-white">{item.num}<span className="text-accent">+</span></div>
                        <p className="text-white/60 text-sm font-primary max-w-[140px] text-center xl:text-left leading-snug">{item.text}</p>
                    </motion.div>
                })}
            </div>
        </div>
    </section>
  )
}


export default Stats
