import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/logo.png'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className='w-screen px-4 md:px-0 py-8 bg-secondary'>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center mb-32">

               {/* logo and link */}
               <div className="w-full md:w-2/3 flex flex-col-reverse md:flex-row justify-between items-center">
                   {/* links */}
                   <div className="w-full mt-8 md:mt-0 md:w-2/5 flex justify-between items-center">
                     <Link href="#about" className='hover:underline text-md md:text-xs '>ABOUT US</Link>
                     <Link href="#services"className='hover:underline text-md md:text-xs '>OUR SERVICES</Link>
                     <Link href="#reservation"className='hover:underline text-md md:text-xs '>RESERVATION</Link>
                   </div>

                   {/* logo */}
                   <div className="w-full md:w-2/5 flex justify-center items-center">
                      <div className="w-3/5 flex justify-center items-center">
                        <div className="w-1/5">
                          <Image className='w-full'
                             src={logo}
                             height={200}
                             width={500}
                            alt="logo"/>
                        </div>
                        <div className="2/5 md:w-3/5 text-3xl ml-4 leading-5">
                      Serenity springs
                   </div>
                      </div>
                   </div>
                 
                
                </div>



                {/* social icons */}
                <div className="w-full mt-8 md:mt-0 md:w-1/3 flex flex-row justify-center md:justify-end items-center">
                  
                <div className="w-1/3 flex justify-between items-center">
                <Link href="#">
                    <FaInstagram
                    size={20}/>
                </Link>
                <Link href="#">
                    <FaTwitter
                    size={20}/>
                </Link>
                <Link href="#">
                    <FaFacebook
                    size={20}/>
                </Link>
               
               </div>
              </div>
          </div>

            <div className="w-full flex justify-center">
              <h3 className="text-md md:text-sm w-1/2 text-center">
              Website designed by <a  className="md:hover:underline font-bold text-sm md:text-md" href="https://www.github.com/anihpatrickugo/"
              >Anih-Patrick Ugochukwu</a>
              </h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer
