import React from 'react'
import Image from 'next/image'
import topDesign from '../images/3.png'

const Reservations = () => {
  return (
    <section id="reservations" className='w-screen px-4 md:px-0'>

      <div className="max-w-4xl mx-auto flex flex-col items-center py-16 ">
      
      <div className="w-30 md:w-20 md:mb-8">
            <Image
            className='w-full'
            src={topDesign}
            height={100}
            width={100}
            alt='1'/>

      </div>

      <h3 className=" text-md md:hidden my-8">
          RESERVATIONS
      </h3>
      <h2 className="text-4xl text-center font-bold tracking-wide leading-normal italic md:w-8/12">

            Ready to indulge in some much-needed relaxation? Call us today at 
            <span className='font-normal'> (310) 123-4567 </span> 
            or email <span className='font-normal'>res@serenitysprings.com </span>
            to schedule your appointment.
       </h2>

       <h6 className="text-lg text-center italics md:w-7/12 my-4">
           If you prefer to book your appointment in person, 
           feel free to stop by our Santa Monica location at 1234 Ocean Avenue. 
       </h6>
      </div>

    </section>
  )
}

export default Reservations
