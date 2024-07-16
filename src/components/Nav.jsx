import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => {
    return currentPath === path 
      ? 'text-green-600 border-green-600 font-semibold' 
      : 'text-current border-transparent hover:text-green-600 hover:border-green-600 font-semibold';
  };

  return (
    <nav className="">
      <div className='items-center justify-end hidden font-normal lg:flex md:flex sm:flex lg:flex-1'>
        <div className=' flex-10'>
          <ul className='flex gap-8 text-[18px]'>
            <Link to="/">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/')}`}>
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/shop')}`}>
                Shop
              </li>
            </Link>
            <Link to="/blog">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/blog')}`}>
                Blogs
              </li>
            </Link>
            <Link to="/contact">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/contact')}`}>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
