'use client'; 
import {motion} from 'framer-motion';
import { useState } from 'react';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSlideBtns from '@/components/WorkSlideBtns';

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Online Learning Platform",
    description: "",
    stack: [{name: "React.js"}, {name: "Css 3"}, {name: "MySQL"}, {name: "Express"}],
    image: "/work/learning.png",
    live: "",
    github: "https://github.com/AshenafiZ/Online-Learning-Platform",
  },
  {
    num: "02",
    category: "Full stack",
    title: "Planning and Monitoring ",
    description: "",
    stack: [{name: "React.js"}, {name: "TailWindcss"}, {name: "Express.js"}, {name: "MySQL"}],
    image: "/work/mint.png",
    live: "",
    github: "https://github.com/AshenafiZ/MiNT_Project",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Smart Soil Monitoring",
    description: "",
    stack: [{name: "Next.js"}, {name: "Tailwindcss"}, {name: "Firebase"}],
    image: "/work/soil.webp",
    live: "",
    github: "https://github.com/AshenafiZ/Smart-Soil-Monitoring",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Hospital Management System",
    description: "",
    stack: [{name: "React.js"}, {name: "Css 3"}, {name: "Mongodb"}, {name: "Express"}],
    image: "/work/hospital.png",
    live: "",
    github: "https://github.com/AshenafiZ/Hospital-Management-System",
  },
  
  
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex flex-col justify-center px-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-5 h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42-x] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white'>{project.title}</p>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4 '>
                {project.stack.map((item, index) =>{
                  return <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })} 
              </ul>
              <div className='border border-white/20 '></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live} target="_blank" rel="noopener noreferrer" >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer" >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className='xl:h-[520px] mb-2'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) =>{
                return <SwiperSlide key={index}>
                  <div className='h-[360px] mt-4 relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill alt="" className='' />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSlideBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-primary text-[22px] w-[44px] flex justify-center items-center items-center transition-all'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work