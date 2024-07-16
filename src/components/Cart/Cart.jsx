// CartDisplay.js
import React, { useState } from 'react';
import { useCart } from './CartContext';

export default function Cart() {
  const { cartItems, removeItemFromCart } = useCart();
  
  const [total, setTotal] = useState(0);

  return (
    
    <div className='container p-6 mx-auto bg-gray-900 rounded-lg '>
      <div className="">
        <h2 className="text-3xl font-bold text-green-400 pb-7">Your Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">

            <img src={item.selectedImage} alt="Selected" className="h-20" />
            <span className="text-lg text-white">Color: {item.selectedColor}</span>
            <span className="text-lg text-white">Size: {item.size}</span>
            <span className="text-lg text-white">Price: {item.price}</span>
            <button
              className="p-2 text-red-600 border border-red-600 rounded"
              onClick={() => removeItemFromCart(index)}
            >
              Remove
            </button>
            
          </div>
          
        ))}
        <div className='flex flex-col items-end gap-8 pt-10'>
          <h2 className='font-bold text-16px'>Total ammount: {total}</h2> 
          <button className='p-2 font-bold border border-green-400 rounded-md hover:text-green-400 text-16px'> Pay now</button>
        </div>
      </div>
      <span></span>
    </div>
  );
}
