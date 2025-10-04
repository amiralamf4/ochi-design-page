import React from 'react'
import { motion } from "motion/react"


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[50vh] py-10 bg-[#004d43] rounded-t-3xl overflow-hidden min-h-[10vh]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:8}} className='text-[24vw] mr-5  leading-none font-founders font-[900] uppercase mb-5 pt-0 '>
                 We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:8}} className='text-[24vw] leading-none font-founders font-[900] uppercase mb-5 pt-0 '>
                We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee