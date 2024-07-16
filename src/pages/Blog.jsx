import { LogoMove } from '@/components/Movementlogos/LogoMove'
import React from 'react'

export default function Blog() {
  return (
    <div className=' pt-8 container mx-auto w-full md:h-[80vh]'>
      <div className='flex flex-col w-full h-full gap-4 '>
        <div className='flex flex-col md:flex-row gap-4 h-[45%] w-full'>

          <div className=' flex flex-col justify-center items-center bg-black/40 rounded-xl md:w-[60vw] p-6 gap-4'>
            <h1 className='text-3xl font-bold '>Black Friday Deals...</h1>
            <h2 className='text-5xl font-bold text-green-400 '>70% OFF </h2>
          </div>

          <div className='flex flex-col flex-1 gap-4'>
            <div className='flex flex-col h-full  justify-center items-center bg-black/40 rounded-xl md:w-[40vw] p-6 md:p-0'>
              <h2 className='text-3xl '>Product of <span className='font-bold text-green-400 '>Milinda Jayawardhana</span></h2>
            </div>
            <div>
              <div className='flex  h-full bg-black/40 rounded-xl md:w-[40vw]'> <LogoMove></LogoMove></div>

            </div>
          </div>

        </div>
        <div className=' flex gap-4 w-full h-[45%]'>
          <div className=' flex justify-center items-center bg-black/40 rounded-xl w-[50%] p-6 md:p-0'>
            <span className='text-xl text-gray-600 '>Space available for you </span>
          </div>
          <div className=' flex justify-center items-center bg-black/40 rounded-xl w-[50%] p-6 md:p-0'>
            <span className='text-xl text-gray-600 '>Space available for you </span>
          </div>
        </div>

      </div>
    </div>
  )
}
