import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import Nav from './Nav';
import MobileNav from './MobileNav';
import Theme from './Theme';
import { ThemeProvider } from './ThemeContext';

export default function Header() {
  return (
    <ThemeProvider>
      <div className='py-8 xl:py-12'>
        <div className='container sticky flex items-center justify-between mx-auto'>
          <Link to ='/'>
            <h1 className='text-5xl font-bold '>MJ
              <span className='text-xl bold'>shopping</span>
              <span className='text-green-600 '>.</span>
            </h1>
          </Link>

          <div className='sticky top-0 z-10 items-center hidden gap-8 md:flex'>
            <Nav />
          </div>



          <div className='flex items-center gap-8'>
            <Link to ='/cart' className='text-xl hover:text-green-600'>
              <FaCartShopping />
            </Link>
    
            <div>
              <Theme></Theme>
            </div>
            <div className='md:hidden'>
              <MobileNav></MobileNav>
            </div>
          </div>

          
          
        </div>
      </div>
    </ThemeProvider>
  )
}




