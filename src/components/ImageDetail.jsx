import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageSwiper from './ImageSwiper';
import CartForm from './Cart/CartForm';


const images = [
  {
    image: "/mn1.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn2.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn3.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn4.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn5.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn6.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn7.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn8.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn9.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },
  {
    image: "/mn10.png",
    title: "NIKE air max shoe",
    prize: "6500",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aspernatur, sit dignissimos illum dicta nulla obcaecati facilis consectetur enim harum quisquam possimus, numquam expedita dolorem sapiente voluptas hic maiores cupiditate."
    
  },

];

const ImageDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const image = location.state?.image || images[id]; // Fallback to image from the array

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  const [cartForm, setCartForm] = useState(false);
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedSize, setSelectedSize] = useState('');

  const cartFormOpen = () => {
    setCartForm(true);
  };

  const cartFormClose = () => {
    setCartForm(false);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='px-8'>
      <div className="container py-8 border-2 border-b-0 border-green-400 shadow-xl bg-black/40 rounded-xl">
        <Tabs defaultValue='white'>
          <div className="flex flex-col items-center justify-center md:items-center md:justify-start md:flex-row">
            <div className=' flex w-[50vW] justify-center'>

              <TabsContent value = 'white'>
                <div className='p-6 bg-white/50 rounded-xl'>
                  <img src={image.image} alt={image.title} className="object-cover h-[230px] sm:h-[280px] md:h-[330px] lg:h-[450px]  " />
                </div>
              </TabsContent>
              <TabsContent value = 'blue'>
                <div className='p-6 bg-blue-800/50 rounded-xl '>
                  <img src={image.image} alt={image.title} className="object-cover h-[230px] sm:h-[280px] md:h-[330px] lg:h-[450px]  " />
                </div>
              </TabsContent>
              <TabsContent value = 'red'>
                <div className='p-6 bg-red-600/50 rounded-xl'>
                  <img src={image.image} alt={image.title} className="object-cover h-[230px] sm:h-[280px] md:h-[330px] lg:h-[450px]  " />
                </div>
              </TabsContent>
              <TabsContent value = 'yellow'>
                <div className='p-6 bg-yellow-400/50 rounded-xl'>
                  <img src={image.image} alt={image.title} className="object-cover h-[230px] sm:h-[280px] md:h-[330px] lg:h-[450px]  " />
                </div>
              </TabsContent>
              
            </div>
            <div className=" flex flex-col items-center md:items-start md:justify-center gap-4 md:pt-4 w-[70vw] md:w-[50vW] pt-5">
              <h2 className="text-4xl font-bold">{image.title}</h2>
              <span className=' max-w-[400px] text-gray-300 text-justify'>{image.description}</span>
              <p className="pt-5 text-xl font-bold text-green-400">LKR: {image.prize}</p>
              <div>
                <Button className='w-[250px] text-[16px] font-bold bg-green-500 hover:text-white hover:bg-black border-2 border-transparent hover:border-green-400' onClick={cartFormOpen}>Add to cart</Button>
                {cartForm && <CartForm onClose={cartFormClose} selectedImage={image.image} selectedColor={selectedColor} size={selectedSize} price={image.prize} />}
              </div>


              <div className='flex gap-4 '>
                <TabsList>
                  <TabsTrigger value='white' onClick={() => handleColorChange('white')}><div className="w-10 h-10 bg-white rounded-md"></div></TabsTrigger>
                  <TabsTrigger value='blue' onClick={() => handleColorChange('blue')}><div className="w-10 h-10 bg-blue-800 rounded-md"></div></TabsTrigger>
                  <TabsTrigger value='red' onClick={() => handleColorChange('red')}><div className="w-10 h-10 bg-red-600 rounded-md"></div></TabsTrigger>
                  <TabsTrigger value='yellow' onClick={() => handleColorChange('yellow')}><div className="w-10 h-10 bg-yellow-400 rounded-md"></div></TabsTrigger>
                </TabsList>
              </div>
 
              <div className='flex gap-4 md:pl-1'>
                {['sm', 'lg', 'xl', 'xxl'].map(size => (
                  <button
                    key={size}
                    className={`flex justify-center w-10 px-2 py-1 border border-green-400 rounded-xl ${selectedSize === size ? 'border-green-800 bg-green-400 text-black font-bold' : ''}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
            </div>
          </div>
        </Tabs>
      </div>

      <div className='container pt-[80px] mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6 '>
          <h1 className='text-5xl font-semibold'>Recommended for you..</h1>
          
        </div>
      </div>
      
      <div className=' pb-[50px]'>
        <ImageSwiper></ImageSwiper>
      </div>
    </div>
  );
};

export default ImageDetail;
