import React from 'react'
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.svg";
import img7 from "../assets/logo001.svg";


const Cards = () => {
    


  return (
    <div className='crads w-full h-screen overflow-hidden '>  
         <div data-scroll data-scroll-speed="-.8" className='border-t-[1px] border-zinc-700 w-full h-[120vh] sm:h-[100vh] flex items-center lg:px-20 sm:px-10 px-5 '>
        <div className=' w-full h-full grid grid-cols-12 grid-rows-3 gap-5 sm:h-[70vh] lg:h-[50vh] sm:grid-rows-2 lg:grid-rows-1 mt-[10rem] sm:mt-[0rem]'>
            <div className='  relative flex justify-center col-span-12 bg-[#004d43] rounded-2xl sm:col-span-12 lg:col-span-6'>
                <div className='relative h-full w-1/2 flex items-center justify-center'>
                <img src={img7} alt="" />
                </div>
                <button className=' absolute bottom-5 lg:bottom-10 left-5 lg:left-10 border-2 px-10 py-1 text-[#cdea68] rounded-full border-[#cdea68] font-semibold sm:left-5'>@2025</button>
            </div>
            <div className=' relative flex justify-center col-span-12 bg-[#212121] rounded-2xl sm:col-span-6 lg:col-span-3'>
                <div className='relative h-full w-1/2 flex items-center justify-center'>
                <img src={img6} alt="" />
                </div>
                <button className=' absolute bottom-5 lg:bottom-10 left-5 lg:left-10 border-2 px-4  py-1 rounded-full ont-semibold uppercase tracking-tighter sm:left-5'>Rating 5.0 On Clutch</button>
                </div>
            <div className='relative flex justify-center col-span-12 bg-[#212121] rounded-2xl sm:col-span-6 lg:col-span-3'>
               <div className='relativeh-full w-1/2 flex items-center justify-center'>
                <img src={img5} alt="" />
                </div>
                <button className=' absolute bottom-5 lg:bottom-10 left-5 lg:left-10 border-2  px-2 sm:px-4 py-1 rounded-full font-semibold uppercase tracking-tighter sm:left-5'>Business Bootcamp alumini</button>
            </div>
        </div>
    </div>
    </div>
 
  )
}

export default Cards