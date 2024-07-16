import React from 'react'
import { Link } from "react-router-dom";

const images1 = [
  {
    image: "/mn1.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn2.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn3.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
];

const images2 = [
 

  {
    image: "/mn5.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn6.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn7.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
];

const images3 = [
  {
    image: "/mn1.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn2.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
 
  {
    image: "/mn9.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
];

const images4 = [
  {
    image: "/mn5.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn9.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
 
  {
    image: "/mn8.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
];


export default function SmallItems() {
  return (
    <div className='container py-[60px] mx-auto'>
      <div className='flex gap-4 justify-evenly md:justify-between'>

        <div className='flex flex-col '>
          <h1 className='pl-6 text-2xl font-bold text-green-400'>NIKE</h1>
          <div className='flex flex-col '>
            {images1.map((image, index)=> (
              <div key={index}>
                <Link
                to={{
                  pathname: `/image/${index}`,
                  state: { image }
                }}
                >
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center pt-4'>
                      <img src={image.image} alt={`Slide ${index + 1}`} className="object-cover h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]" />
                    </div>
                    <div className="flex flex-col justify-start pt-4 pl-4">
                      <span>{image.description}</span>
                      <span className="text-xl font-bold text-green-600 ">{image.prize}</span>     
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col '>
          <h1 className='pl-6 text-2xl font-bold text-green-400'>POOMA</h1>
          <div className='flex flex-col '>
            {images2.map((image, index)=> (
              <div key={index}>
                <Link
                to={{
                  pathname: `/image/${index}`,
                  state: { image }
                }}
                >
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center pt-4'>
                      <img src={image.image} alt={`Slide ${index + 1}`} className="object-cover h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]" />
                    </div>
                    <div className="flex flex-col justify-start pt-4 pl-4">
                      <span>{image.description}</span>
                      <span className="text-xl font-bold text-green-600 ">{image.prize}</span>     
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-col hidden md:flex'>
          <h1 className='pl-6 text-2xl font-bold text-green-400'>FILA</h1>
          <div className='flex flex-col '>
            {images3.map((image, index)=> (
              <div key={index}>
                <Link
                to={{
                  pathname: `/image/${index}`,
                  state: { image }
                }}
                >
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center pt-4'>
                      <img src={image.image} alt={`Slide ${index + 1}`} className="object-cover h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]" />
                    </div>
                    <div className="flex flex-col justify-start pt-4 pl-4">
                      <span>{image.description}</span>
                      <span className="text-xl font-bold text-green-600 ">{image.prize}</span>     
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-col hidden lg:flex'>
          <h1 className='pl-6 text-2xl font-bold text-green-400'>ADIDAS</h1>
          <div className='flex flex-col '>
            {images4.map((image, index)=> (
              <div key={index}>
                <Link
                to={{
                  pathname: `/image/${index}`,
                  state: { image }
                }}
                >
                  <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center pt-4'>
                      <img src={image.image} alt={`Slide ${index + 1}`} className="object-cover h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]" />
                    </div>
                    <div className="flex flex-col justify-start pt-4 pl-4">
                      <span>{image.description}</span>
                      <span className="text-xl font-bold text-green-600 ">{image.prize}</span>     
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
