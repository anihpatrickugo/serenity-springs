import React from 'react'
import Image from 'next/image'
import aboutImage from '../images/about.png'

const About = () => {
  return (
    <section id='#about' className='w-screen'>
      <div className="max-w-4xl mx-auto flex flex-col items-center  px-4 md:px-0 py-4">
       <h3 className="py-8 text-md md:text-2xl md:font-bold">
        ABOUT
       </h3>
       <p className="text-3xl text-gray-200">
       <span className='md:font-bold md:italic ml-20'>At Serenity Springs,</span>  we believe that everyone deserves a little pampering and relaxation.
        Our luxurious spa treatments are designed to soothe the mind, body, and soul,
         leaving you feeling rejuvenated and refreshed. From the moment you step through our doors,
          you &apos;ll feel a sense of peace and tranquility that will stay with you long after your visit.
       </p>
        {/* about image */}
        <div className='relative my-16 w-full sm:w-1/2 md:w-1/3'>
         <Image 
           className='w-full'
           src={aboutImage}
           alt='about'
           height={500}
           width={500}/>
{/* 
           <p className="absolute top-1/2 text-4xl">
           Treat yourself to a revitalizing facial and reveal glowing, healthy skin ... 
           </p> */}

        </div>
      </div>
    </section>
  )
}

export default About
