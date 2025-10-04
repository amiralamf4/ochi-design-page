import React from 'react'
import img7 from "../assets/logo001.svg";

const Footer = () => {
  return (
    <div className='w-full min-h-screen rounded-t-3xl mt-40 sm:mt-0 py-20 px-5 sm:px-10 sm:py-20 '>
        <div className='flex flex-col md:flex-row   lg:justify-between'>
        <div className='w-full sm:w-2/5 lg:w-1/2 font-founders'>
            <h1 className=' uppercase text-[3rem] sm:text-8xl  font-bold -mb-9 sm:-mb-7'>Eye-</h1>
            <h1 className=' uppercase text-[3rem] sm:text-8xl  font-bold -mb-9 sm:-mb-7'>opening</h1>
        </div>
        <div className=' w-full sm:w-3/5 lg:w-1/2'>
            <h1 className='uppercase text-[3rem]  md:text-[3.5rem]  font-bold'>presentations</h1>
            <div className='flex flex-col gap-5 mt-10 sm:mt-10  lg:mt-20 text-[1.1rem] text-white w-full '>
                <div className='social '>
                    <h2 className='mb-5'>S:</h2>
                    <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.9rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                        Instagram</li>
                    <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.9rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                        Behance</li>
                    <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.9rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                        Facebook</li>
                    <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.9rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                        Linkedin</li>
                </div>
                <div className='LM flex gap-10 w-full justify-between lg:pr-36'>
                    <div className='L'>
                        <h2>L:</h2>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[10rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            202-1965W 4th Ave</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[10rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            Vancouver, Canada</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[8.5rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            30 Chukariana St</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[6.5rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            Lviv, Ukraine</li>
                    </div>
                    <div className='M'>
                        <h2>M:</h2>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[3.2rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            Home</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.2rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            Services</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.6rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            OurWork</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4.6rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            About us</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[4rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            Insights</li>
                        <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[5.5rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                            Contact us</li>
                    </div>
                </div>
                <div className='E'>
                    <h2>E:</h2>
                    <li className='list-none relative underline underline-offset-[.3rem] decoration-white hover:decoration-[#004d43] after:content-[""] after:w-[0rem] after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-white hover:after:w-[9.3rem] after:transition-all after:duration-500 after:ease-in-out cursor-pointer'>
                        hello@ochi.design</li>
                </div>
            </div>
        </div>
        
        </div>
        
        <div className=' w-ful  mt-16 flex flex-col md:flex-row md:items-center justify-between gap-12'>
            <div className='md:w-2/5'>
                <img src={img7} alt="logo" />
            </div>
            <div className='w-full md:w-3/5 flex flex-col gap-4 md:flex-row justify-between'>
                <h1 className='text-zinc-300'>© ochi design 2025. Legal Terms</h1>
                <h1 className='text-zinc-300'>@Website by Obys</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer