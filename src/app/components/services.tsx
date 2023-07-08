import React from 'react'
import Image from 'next/image'
import topDesign from '../images/2.png'

const Services = () => {
  return (
    <section id="#services" className='w-screen'>
        <div className="max-w-4xl mx-auto flex flex-col items-center px-4 md:px-0">
         <div className="w-30 md:w-20 mb-8 md:mb-0">
            <Image
            className='w-full'
            src={topDesign}
            height={100}
            width={100}
            alt='1'/>

          </div>
          <h3 className=" text-md md:text-2xl md:font-bold md:mt-8">
            OUR SERVICES
          </h3>
          <div className="w-full flex flex-col items-center my-12 space-y-12">
            <div className="w-full flex flex-col md:flex-row justify-between item-start gap-2 ">
                 <h2 className="text-3xl md:text-2xl italic font-bold w-full md:w-3/12 pb-4">
                  Massage Therapy
                 </h2>

                 <hr className='w-1/3 md:w-2/12 font-bold md:mt-2' />

                 <p className="text-md w-full md:w-6/12">
                 Whether you &apos;re looking to relax, alleviate muscle tension, 
                 or reduce stress, our skilled massage therapists will customize a
                  treatment to meet your unique needs. Choose from a variety of massage
                   styles including Swedish, deep tissue, hot stone, and more.
                 </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between item-start gap-2">
                 <h2 className="text-3xl md:text-2xl italic font-bold w-full md:w-3/12 pb-4">
                 Anti-aging Facials
                 </h2>

                 <hr className='w-1/3 md:w-2/12 font-bold md:mt-2' />

                 <p className="text-md w-full md:w-6/12">
                 Our experienced estheticians use only the finest products to nourish,
                  hydrate, and revitalize your skin. From anti-aging treatments to 
                  acne-fighting facials, we offer a range of options to help you achieve
                   healthy, glowing skin.
                 </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between item-start gap-2">
                 <h2 className="text-3xl md:text-2xl italic font-bold w-full md:w-3/12 pb-4">
                 Body Treatments
                 </h2>

                 <hr className='w-1/3 md:w-2/12 font-bold md:mt-2' />

                 <p className="text-md w-full md:w-6/12">
                 Our indulgent body treatments are designed to detoxify, exfoliate,
                  and hydrate your skin, leaving you feeling renewed and refreshed.
                   Choose from a variety of options including body scrubs, wraps, and more.
                 </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between item-start gap-2">
                 <h2 className="text-3xl md:text-2xl italic font-bold w-full md:w-3/12 pb-4">
                 Wellness Services
                 </h2>

                 <hr className='w-1/3 md:w-2/12 font-bold md:mt-2' />

                 <p className="text-md w-full md:w-6/12">
                 We believe in taking a holistic approach to wellness, which is why we offer a 
                 variety of services that promote total body wellness. From acupuncture to reiki,
                  our skilled practitioners will help you achieve optimal health and wellbeing.
                 </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services
