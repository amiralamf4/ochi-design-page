import React from 'react'
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";


const Featured = () => {

    const details = [
        {
            name: 'Salience Labs',
            img: img1,
            btn: 'Explore',
        },
        {
            name: 'Fyde',
            img: img2,
            btn: 'Explore',
        },
        {
            name: 'Softstart',
            img: img3,
            btn: 'Explore',
        },
        {
            name: 'Vise',
            img: img4,
            btn: 'Explore',
        }
    ]

    const detail = details.map((items, index) => {
        return (
            <div key={index} className=' flex flex-col gap-5 '>
                <h1 className='text-[1.3rem]'>● {items.name}</h1>
                <motion.div className=' overflow-hidden rounded-3xl'
                    whileHover={{scale:0.97 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <motion.img   whileHover={{ scale: 1.10 }} // hover par scale 95%
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='w-full relative text-center  hover:scale-90' src={items.img} alt="img" />
                </motion.div>
                

                <button className= 'border-white border-2 py-3 rounded-3xl text-[1.1rem] font-semibold'>{items.btn}</button>
            </div>
        )
    })

    return (
        <div className='w-full py-10 '>
            <div className='w-full px-12 border-b-[1px] border-zinc-800 pb-10 sm:pb-20'>
                <h1 className='text-2xl sm:text-4xl lg:text-6xl font-NeueMontreal font-[400]'>Feature projects</h1>
            </div>
            <div className='cards grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:gap-10 mt-10 pt-14 px-10 '>
                {detail}
            </div>

        </div>
    )
}

export default Featured