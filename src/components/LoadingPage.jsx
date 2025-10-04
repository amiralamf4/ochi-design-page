import { animate } from 'motion';
import { motion, scroll } from 'motion/react';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import img from "../assets/logo001.svg";

const LoadingPage = () => {

    const item = ['We Create', 'Eye Opening', 'Presentaions'].map((items, index) => { // uper me karna ho to sirf array use hoga [], ager return ke ander karna ho to {[]} aisa kiya jayega. 
        return (
            <div key={index}  className='masker '>
                <div className='w-fit flex items-center'>
                    {index === 1 && (<motion.div initial={{width:0}} animate={{width: "13vw",}} transition={{ease: [0.76, 0, 0.24,1], duration:1}} className=' w-[13vw] h-[9vw] mr-[1vw] rounded-lg sm:w-[10vw] sm:h-[7vw] lg:w-[8vw] lg:h-[5vw] bg-green-900 flex items-center justify-center'>
                        <img src={img} alt="" />
                    </motion.div>)} 
                    <h1 className=' uppercase text-[3rem] lg:text-[6rem] sm:text-[4rem]  font-NeueMontreal leading-[11vw] lg:leading-[6vw] sm:leading-[8vw] tracking-tighter font-[700]'>{items}</h1>
                </div>
            </div>
        )
    })
    const items = ["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
        return (<p key={index} className='text-[10px] lg:text-[1rem] sm:text-[11px] font-light tracking-wider'>{item}</p>)
    })
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8" className=' w-full min-h-[100vh] pt-1'>
            <div className='textstructure mt-56 lg:mt-40 sm:mt-56  px-5 lg:px-20 sm:px-14'>
                {item}
                
                <div className='border-t-[1px] border-zinc-800 mt-60 lg:mt-32 sm:mt-44 flex justify-between items-center py-5 uppercase'>
                    <div className='start flex items-center justify-between gap-5 text-[8px] lg:text-[1rem] sm:text-[12px] w-full '>
                        {items}
                        <div className='flex items-center gap-5'>
                        <div className='px-4 py-2 border-2 border-zinc-500 rounded-full bg-slate-800 w-28 sm:w-36 lg:w-52 text-center'>Start the project</div>
                        <div className='w-8 h-8 border-2 border-zinc-500 rounded-full overflow-hidden'>
                            <span className=' rotate-[45deg] w-full h-full rounded-full flex justify-center items-center hover:bg-slate-600 cursor-pointer text-[1.2rem]'>
                                <FaArrowUpLong />
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage