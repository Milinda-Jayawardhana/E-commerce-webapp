import { InfiniteMovingCardsDemo } from '@/components/MovementBox/InfiniteMovingCardsDemo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverEffect } from '@/components/HoverEffUI/HoverEffect'
import {  HoverEffectWomen } from '@/components/HoverEffUI/HoverEffectWomen'
import {  HoverEffectMen } from '@/components/HoverEffUI/HoverEffectMen'
import PopularCat from '@/components/PopularCat'
import SmallItems from '@/components/SmallItems'
import { ImagesSliderDemo } from '@/components/imageSlider/ImagesSideDemo'
import { SerchBar } from '@/components/serchBar/SerchBar'

export default function Shop() {

  
  return (
    <div>

      <div className='flex justify-center '>
          <div className='h-[22.5vw] w-[90vw] shadow-custom-dark bg-black/40'>
              <ImagesSliderDemo></ImagesSliderDemo>
          </div>
      </div>


      <div className='container pt-8 mx-auto'>
        <span className='text-2xl font-bold '> <span className='text-green-400 '>Popular</span>  Items</span>
        <PopularCat></PopularCat>
      </div>
      
      <div className='container py-8 mx-auto shadow-custom-dark bg-black/40'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='font-sans text-3xl text-green-600 '> Shopping Day</h1>
          <h2 className='pb-4 text-5xl font-semibold'> Up to <span className='font-extrabold text-green-700'>70%</span> off - All Nike Shoes</h2>
          <Button className='w-[30%] text-[16px] font-bold bg-green-600 hover:text-white hover:bg-green-950'>Shop Now</Button>
        </div>
      </div>
      
      <Tabs defaultValue='all'>
        <div className='container mx-auto '>
          <div className='flex flex-col items-center gap-6 pt-10 pb-6 text-xl font-semibold md:justify-between md:flex-row '>
            <TabsList>
              <div className='flex gap-6 '>
                <TabsTrigger value='all'><div className='w-[60px] '>All</div></TabsTrigger>
                <TabsTrigger value='men'><div className='w-[60px] '>Men</div></TabsTrigger>
                <TabsTrigger value='women'><div className='w-[60px] '>Women</div></TabsTrigger>

              </div>
              
            </TabsList>
            <div className='flex '>
              <SerchBar></SerchBar>
            </div>
          </div>
        </div>
        <TabsContent value='all'>
          <div className=''>
            <HoverEffect></HoverEffect>   {/*shop items*/}
          </div>
        </TabsContent>
        <TabsContent value='men'>
          <div className=''>
            <HoverEffectMen></HoverEffectMen>  {/*shop items*/}
          </div>
        </TabsContent>
        <TabsContent value='women'>
          <div className=''>
            <HoverEffectWomen></HoverEffectWomen>   {/*shop items*/}
          </div>
        </TabsContent>

      </Tabs>

      

      <div className='container justify-center pt-10 mx-auto'>
        <div className='h-1 bg-slate-700 rounded-2xl'></div>
      </div>
      
      <div className='flex flex-col items-center '>
        <h1 className='text-3xl font-bold font-sans pt-[30px]'>Popular Brands</h1>
        <span className='pt-4 text-xl text-white/50'>Best price, High quality, Branded items.</span>
        <SmallItems></SmallItems>
      </div>

      
    </div>
  )
}
