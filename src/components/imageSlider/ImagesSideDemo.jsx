"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ImagesSlider";


export function ImagesSliderDemo() {
  const images = [
    "/q1-01.jpg",
    "/q2-01.jpg",
    "/q3-01.jpg",
    "/q4-01.jpg",
  ];

  return (
    <ImagesSlider className="h-full " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        {/*<motion.p className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          <h1 className='font-sans text-3xl text-green-600 '> </h1>
          <h2 className='pb-4 text-5xl font-semibold'>  <span className='font-extrabold text-green-700'></span> </h2>
        </motion.p>
        <button className="relative px-4 py-2 mx-auto mt-4 text-center text-white border rounded-full backdrop-blur-sm bg-emerald-300/10 border-emerald-500/20">
          <span></span>
          <div className="absolute inset-x-0 w-3/4 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>*/}
      </motion.div>
    </ImagesSlider>
  );
}
