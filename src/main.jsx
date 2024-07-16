import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ImageDetail from './components/ImageDetail.jsx';
import ImageSwiper from './components/ImageSwiper.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Cart from './components/Cart/Cart.jsx';
import { CartProvider } from './components/Cart/CartContext.jsx';

 // Adjust the path if necessary

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'images', element: <ImageSwiper /> },
      { path: 'image/:id', element: <ImageDetail /> }, // Add route for ImageDetail
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* Wrap the RouterProvider with CartProvider */}
      <RouterProvider router={router}>
        <ScrollToTop /> {/* Ensure ScrollToTop is included here */}
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>,
);
