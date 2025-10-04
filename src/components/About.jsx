import React from 'react'
import img from "../assets/img.jpg";



const About = () => {
    const heading=()=>{
        return (
        <h1 className='font-light mt-8 sm:mt-16  leading-none lg:mt-12 text-[1.2rem] sm:text-[1.9rem] lg:text-[3.4rem]  font-neuemontreal '>We craft category-defining presentations, brand <br/>identities, and digital experiences that <span className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-full after:bg-black ' >drive funding,</span> <br/>  <span className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-full after:bg-black ' >sales,</span> and <span className='relative after:content-[""] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-full after:bg-black ' >market leadership.</span>
        </h1>) 
    }
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='w-full p-5 sm:p-6 lg:p-14 bg-[#cdea68] rounded-3xl text-black'>
        {heading()}
        <div className='w-full flex flex-col lg:flex-row  gap-5 border-t-[1px] border-zinc-900 bg-[#cdea68] mt-20 pt-10'>
        <div className='left w-full lg:w-1/2 '>
            <h1 className='text-3xl sm:text-4xl lg:text-7xl tracking-tighter up'>How we can help:</h1>
            <button className='px-5 py-4 uppercase bg-zinc-900 rounded-full text-white  sm:w-48   flex items-center justify-between mt-5'>Read More <div className='w-[10px] h-[10px] bg-white rounded-full'></div> </button>
        </div>
        <div className='right w-full  lg:w-1/2   bg-gray-300 rounded-3xl overflow-hidden'>
            <img src={img} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About