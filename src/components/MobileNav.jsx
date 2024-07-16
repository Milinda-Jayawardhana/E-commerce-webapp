import React from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription // Import SheetDescription
} from "@/components/ui/sheet";

export default function MobileNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => {
    return currentPath === path 
      ? 'text-green-600' 
      : 'hover:text-green-600 ';
  };
  
  return (
    <Sheet>
      <SheetTrigger className='flex items-center justify-center'>
        <CiMenuFries className='text-[20px]' />
      </SheetTrigger>
      <SheetContent className='flex flex-col '>
        {/* Add SheetTitle */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        
        {/* Add SheetDescription */}
        <SheetDescription className="sr-only">Use the navigation links to browse different sections of the site.</SheetDescription>

        <div>
          <Link to='/'>
            <h1 className='text-5xl font-semibold text-center'>
              MJ<span className='text-xl bold'>shopping</span><span className='text-green-600'>.</span>
            </h1>
          </Link>
          <div className='pt-10'>
            <ul className='p-10 py-4 text-xl text-center'>
              <Link to="/">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/')}`}>Home</li>
              </Link>
              <Link to="/shop">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/shop')}`}>Shop</li>
              </Link>
              <Link to="/blog">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/blog')}`}>Blogs</li>
              </Link>
              <Link to="/contact">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/contact')}`}>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
