import React from 'react'
import Socials from './Socials'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
  return (
    <div className=' pt-[60px]'>
      <div className='py-[40px]  bg-black/40'>
        <div className='grid grid-cols-2 md:grid-cols-4 items-start justify-between px-[20px] md:px-[25px] lg:px-[40px]'>

          <div className='flex flex-col items-start justify-start '>
            <h1 className='text-5xl font-bold '>MJ
              <span className='text-xl bold'>shopping</span>
              <span className='text-green-600 '>.</span>
            </h1>
            <h2 className='pt-4 pb-2 text-xl font-bold md:text-2xl '>Contact</h2>
            <h3><span className='text-[14px]md:text-[18px] '> Address :</span> <span className=' text-white/60'>No255, Matara, Sri Lanka</span></h3>
            <h3><span className='text-[14px] md:text-[18px] '> Email :</span> <span className=' text-white/60'>shehanj809@gmail.com</span></h3>
            <h3><span className='text-[14px] md:text-[18px] '> Phone :</span><span className=' text-white/60'>+94 71 550 8827/+94 74 069 0333</span></h3>
            <div className='mt-4 mb-6'>
              <Socials 
                containerStyles= 'flex gap-4'
                iconStyles="w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-600 hover:text-black/80 text-base hover:bg-green-600 hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          <div className='flex flex-col  items-start justify-start pt-[70px] md:pt-0 pl-4 md:pl-0'>
            <h1 className='text-xl md:text-2xl'>About</h1>
            <h2 className='pt-4 text-white/60 text-[14px] md:text-[18px]'>About Us</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px] '>Delivery Information</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'>Privacy & Policy</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'> Terms & Conditions</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'>Contact Us</h2>
          </div>

          <div className='flex flex-col items-start justify-start '>
            <h1 className='text-xl md:text-2xl'>My Account</h1>
            <h2 className='pt-4 text-white/60 text-[14px] md:text-[18px]'>Log In</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'>View Cart</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'>My Whishlist</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'> Track My Order</h2>
            <h2 className='pt-2 text-white/60 text-[14px] md:text-[18px]'>Help</h2>
          </div>

          <div className='flex flex-col items-start justify-start gap-2 pl-4 md:pl-0'>
            <h1 className='text-xl md:text-2xl'> Install App</h1>
            <h2 className='pt-4 text-white/60 text-[14px] md:text-[18px]'>From App store & Google Play</h2>
            <div className='flex items-center gap-4 px-2 bg-gray-600 rounded-lg'>
              <FaApple className='text-3xl text-green-400' />
              <div className='flex flex-col '>
                <span className=' text-[12px]'> Download on the</span>
                <span> App Store</span>
              </div>
            </div>
            <div className='flex items-center gap-4 px-2 bg-gray-600 rounded-lg'>
              <IoLogoGooglePlaystore className='text-3xl text-green-400'/>
              <div className='flex flex-col '>
                <span className=' text-[12px]'> Get it on</span>
                <span>Google Play </span>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}
