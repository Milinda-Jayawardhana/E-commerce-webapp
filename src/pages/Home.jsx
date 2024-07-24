import RegisterForm from '@/components/RegisterForm';
import LoginForm from '@/components/LoginForm';
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import { LogoMove } from '@/components/Movementlogos/LogoMove'
import { FaShippingFast } from "react-icons/fa";
import { RiTimerFlashFill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdOutlineMoneyOff } from "react-icons/md";
import ImageSwiper from '@/components/ImageSwiper';
import CardDemo from '@/components/3DCard/CardDemo';
import { CardBody, CardContainer, CardItem } from '@/components/3DCard/Effects';



const features ={
  items:[
    {  
      title: "Free Shipping",
      image: <MdOutlineMoneyOff />,
    },
    {  
      title: "Fast Delevery",
      image: <FaShippingFast />,
    },
    {  
      title: "High Quality Goods",
      image: <MdHighQuality />,
    },
    {  
      title: "24/7 Service",
      image: <RiTimerFlashFill />,
    },
    {  
      title: "Online Payments",
      image: <BsFillCreditCardFill />,
    },
    {  
      title: "Trust",
      image: <VscWorkspaceTrusted />,
    },

  ]
  
}

export default function Home() {

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
  };

  const handleClose = () => {
    setIsRegistrationOpen(false);
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const loginClose = () => {
    setIsLoginOpen(false);
  };
  return (


    <section>
      
      <div className='container h-full bg-black/40 rounded-xl'>
        <div className='flex flex-col md:flex-row items-center justify-between py-4 mx-auto h-[90vh] md:h-[50vh] lg:h-[60vh]'>
          <div className='flex flex-col gap-2 py-8 font-bold lg:gap-4 h-[50%] md:h-full z-20'>
            <h1 className='text-3xl lg:text-5xl'>Welcome to the <span className='font-serif text-green-600 '>SHOE SHOP</span></h1>
            <h1 className='text-5xl font-semibold lg:text-7xl '><span className='text-green-800 text-8xl'>30%</span> OFF</h1>
            <p className='text-xl lg:text-2xl '>By your own dreams Shoe from here</p>
            <Button className = 'text-[16px] font-bold bg-green-600 hover:text-green-900 w-[60%]'>Shop Now</Button>
            <div className='flex gap-4'>
              <div>
                <Button onClick={handleLoginClick} className={'hover:bg-green-600'}>login</Button>
                {isLoginOpen && <LoginForm onClose={loginClose} />}
              </div>
              <div>
                <Button onClick={handleRegisterClick} className={'hover:bg-green-600'}>Register</Button>
                {isRegistrationOpen && <RegisterForm onClose={handleClose} />}
              </div>
            </div>
            
          </div>
          {/*<div className='h-[50%] md:h-full z-10 '>
            <img src="public/logo2.png" alt="shoe" className='h-full p-2 bg-blue-950/50  shadow-2xl rounded-2xl rounded-bl-[70px] rounded-ss-[70px] rounded-ee-[70px]' />
          </div>*/}

          <div className='h-[50%] md:h-full z-10 bg-blue-950/50  shadow-2xl rounded-2xl rounded-bl-[70px] rounded-ss-[70px] rounded-ee-[70px]'>
          <CardContainer className="">
            <CardBody className="">
              <CardItem
                translateZ="50"
                className=""
              >
                <img src="/logo2.png" alt="shoe" className='h-full p-3 ' />
              
              </CardItem>
            </CardBody>
          </CardContainer>
          </div>
        </div>
      </div>

      <div>
        <div className='py-6 '>
          <LogoMove></LogoMove>
        </div>
      </div>

      <div className=''>
        <div className='container py-8 mx-auto '>
          <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[15px]  justify-center items-center'>
            {features.items.map((item, index)=>{
              return(
                <li key={index} className=' bg-black/40 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-2 hover:bg-gray-950'>
                  <div className='pt-4 text-6xl text-gray-600'>
                    {item.image}
                  </div>
                  <h3 className=' text-xl max-w-[260px] min-h-[60px] text-center font-semibold text-green-600'>{item.title}</h3>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      
      <div className='container justify-center pt-4 mx-auto'>
        <div className='h-1 bg-slate-700 rounded-2xl'></div>
      </div>
        
      <div className='container pt-[40px] mx-auto '>
        <div className='flex flex-col items-center justify-center gap-6 '>
          <h1 className='text-3xl font-semibold md:text-5xl'>Featured Products</h1>
          <span className='pb-4 text-xl'>Best quality shoes</span>
          
        </div>
      </div>
      
      <div className=' pb-[50px]'>
        <ImageSwiper></ImageSwiper>
      </div>
      
      <div className='container py-8 mx-auto shadow-custom-dark bg-black/40'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='font-sans text-2xl text-green-600 md:text-3xl '> Repair Services</h1>
          <h2 className='pb-4 text-3xl font-semibold md:text-5xl'> Up to <span className='font-extrabold text-green-700'>70%</span> off - All Nike Shoes</h2>
          <Button className='w-[30%] text-[16px] font-bold bg-green-600 hover:text-white hover:bg-green-950'>Exploer Now</Button>
        </div>
      </div>

      <div className='container pt-[50px] mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6 '>
          <h1 className='text-3xl font-semibold md:text-5xl'>New Arrivals</h1>
          
        </div>
      </div>
      
      <div className=' pb-[50px]'>
        <ImageSwiper></ImageSwiper>
      </div>
      
    </section>
  )
}
