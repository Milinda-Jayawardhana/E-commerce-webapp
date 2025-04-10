import './App.css'
import Header from './components/Header'
import { Outlet,useLocation} from 'react-router-dom';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'MJshopping';
        break;
      case '/shop':
        document.title = 'MJ/shop';
        break;
      case '/about':
        document.title = 'MJ/about';
        break;
      case '/contact':
        document.title = 'MJ/Contact';
        break;
      case '/cart':
        document.title = 'MJ/cart';
        break;
      default:
        document.title = 'Milinda Jayawardhana';
        break;
    }
  }, [location]);

  return (
    <div className='min-h-screen text-black bg-white dark:bg-gray-900 dark:text-white'>
      <div className='sticky top-0 z-50 bg-gray-900'><Header></Header></div>
      
      <ScrollToTop />
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default App
