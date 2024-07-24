import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

export default function Cart() {
  const { cartItems, removeItemFromCart } = useCart();
  
  const [itemCounts, setItemCounts] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initialCounts = cartItems.reduce((counts, item, index) => {
      counts[index] = 1; // initialize all counts to 1
      return counts;
    }, {});
    setItemCounts(initialCounts);
  }, [cartItems]);

  useEffect(() => {
    const totalSum = cartItems.reduce((sum, item, index) => 
      sum + parseFloat(item.price) * itemCounts[index], 0);
    setTotal(totalSum);
  }, [cartItems, itemCounts]);

  const handleIncrease = (index) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [index]: prevCounts[index] + 1
    }));
  };

  const handleDecrease = (index) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [index]: Math.max(prevCounts[index] - 1, 1)
    }));
  };

  return (
    <div className='container p-6 mx-auto bg-gray-900 rounded-lg'>
      <div className="">
        <h2 className="text-3xl font-bold text-green-400 pb-7">Your Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <img src={item.selectedImage} alt="Selected" className="h-20" />
            <span className="text-lg text-white">Color: {item.selectedColor}</span>
            <span className="text-lg text-white">Size: {item.size}</span>
            <span className="text-lg text-white">Price: {(parseFloat(item.price) * itemCounts[index]).toFixed(2)}</span>
            <div className="flex items-center">
              <button
                className="px-2 py-1 text-white border border-green-600 rounded"
                onClick={() => handleIncrease(index)}
              >
                +
              </button>
              <span className="mx-2 text-lg text-white">{itemCounts[index]}</span>
              <button
                className="px-2 py-1 text-white border border-red-600 rounded"
                onClick={() => handleDecrease(index)}
              >
                -
              </button>
            </div>
            <button
              className="p-2 text-red-600 border border-red-600 rounded"
              onClick={() => removeItemFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className='flex flex-col items-end gap-8 pt-10'>
          <h2 className='font-bold text-16px'>Total amount: {total.toFixed(2)}</h2>
          <button className='p-2 font-bold border border-green-400 rounded-md hover:text-green-400 text-16px'>Pay now</button>
        </div>
      </div>
    </div>
  );
}
