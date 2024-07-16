import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Corrected import
import { Navigation, Pagination } from 'swiper/modules'; // Corrected import paths
import { Link } from "react-router-dom";


const images = [
  {
    image: "/mn1.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn2.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn3.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn4.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn5.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn6.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn7.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },
  {
    image: "/mn8.png",
    description: "NIKE",
    prize: "6500 LKR",
    
  },


];

const PopularCat = () => {


  const handleImageClick = () => {
    
    window.scrollTo(0, 0); // Scroll to top when an image is clicked
  };

  return (
    <div className="container py-8 mx-auto">
      <Swiper
        modules={[Navigation, Pagination]} // Corrected module usage
        spaceBetween={10}
        slidesPerView={3}
        //navigation
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        
        //pagination={{ clickable: true }}
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
                    <img src={image.image} alt={`Slide ${index + 1}`} className="object-cover h-[90px] sm:h-[110px] md:h-[140px] lg:h-[160px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full py-1 font-semibold text-green-500 rounded-t-none md:py-3 bg-white/10 rounded-2xl">
                    {image.description}
                            
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

export default PopularCat;
