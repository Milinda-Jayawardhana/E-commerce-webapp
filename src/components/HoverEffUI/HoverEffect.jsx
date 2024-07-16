// HoverEffect.js
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use react-router-dom for client-side routing in Vite
import { Card, CardTitle, CardDescription } from "./Card"; // Adjust the path to your Card component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const items = [
  {
    image: "/mn1.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "/about",
  },
  {
    image: "/mn2.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn3.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn4.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn5.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn6.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn7.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn8.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn9.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn10.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn1.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "/about",
  },
  {
    image: "/mn2.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn3.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn4.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn5.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn6.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn7.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn8.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn9.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn10.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn1.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "/about",
  },
  {
    image: "/mn2.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn3.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn4.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn5.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn6.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn7.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn8.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn9.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },
  {
    image: "/mn10.png",
    description: "NIKE air max shoe",
    prize: "6500 LKR",
    link: "",
  },

]

export const HoverEffect = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Grid]} // Corrected module usage
          spaceBetween={0}
          slidesPerView={2}
          grid={3}
          //navigation
          breakpoints={{
            320: {
              
              slidesPerView: 2,
              grid: { rows: 3, },
            },
            640: {
              
              slidesPerView: 3,
              grid: { rows: 3, },
            },
            768: {
              slidesPerView: 4,
              grid: { rows: 2, },
            },
            1024: {
              slidesPerView: 5,
              grid: { rows: 2, },
            },
            1300: {
              slidesPerView: 6,
              grid: { rows: 2, },
            },
          }}
          
          pagination={{ type: "bullets", clickable: true}}
        >
          <div className='' >
            {items.map((image, idx) => (
              <SwiperSlide key={idx} >
                <Link
                  to={{
                    pathname: `/image/${idx}`,
                    state: { image },
                  }}
                  
                  className="relative block group"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.span
                        className="absolute inset-0 z-10 block bg-gray-700/40 rounded-3xl"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                      />
                    )}
                  </AnimatePresence>
                  <div className="">
                    <Card>
                      <div>
                        <div className='flex flex-col items-center justify-center border border-b-0 border-green-700 bg-black/40 rounded-2xl hover:border-green-300 '>
                          <div className='flex items-center justify-center pt-4'>
                            <img src={image.image} alt={`Slide ${idx + 1}`} className="object-cover h-[130px] sm:h-[150px] md:h-[170px] lg:h-[220px]" />
                          </div>
                          <div className="flex flex-col justify-start pt-4 pl-4">
                            {image.description}
                                    
                          </div>
                          <div className="flex flex-col justify-start pb-4 pl-4">
                            <span className="text-xl font-bold text-green-600 ">{image.prize}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
