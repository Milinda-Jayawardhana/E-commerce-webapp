import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Corrected import
import { Navigation, Pagination } from 'swiper/modules'; // Corrected import paths
import { Link } from "react-router-dom";


const images = [
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
  {
    image: "/mn4.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
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
  {
    image: "/mn8.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn9.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn10.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    
  },

];

const ImageSwiper = () => {


  const handleImageClick = () => {
    
    window.scrollTo(0, 0); // Scroll to top when an image is clicked
  };

  return (
    <div className="container py-8 mx-auto">
      <Swiper
        modules={[Navigation, Pagination]} // Corrected module usage
        spaceBetween={10}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        
        pagination={{ clickable: true }}
      >
        <div className='grid '>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Link
                to={{
                  pathname: `/image/${index}`,
                  state: { image }
                }}
              >
                <div className='flex flex-col items-center justify-center border border-b-0 border-green-700 bg-black/40 rounded-2xl hover:border-green-300 ' onClick={() => handleImageClick()}>
                  <div className='flex items-center justify-center pt-4'>
                    <img src={image.image} alt={`Slide ${index + 1}`} className="object-cover h-[130px] sm:h-[150px] md:h-[170px] lg:h-[220px]" />
                  </div>
                  <div className="flex flex-col justify-start pt-4 pl-4">
                    {image.description}
                            
                  </div>
                  <div className="flex flex-col justify-start pb-4 pl-4">
                    <span className="text-xl font-bold text-green-600 ">{image.prize}</span>
                  </div>
                </div>
                
              </Link>
            </SwiperSlide>
          ))}
        </div>
        
      </Swiper>      

    </div>
  );
};

export default ImageSwiper;
