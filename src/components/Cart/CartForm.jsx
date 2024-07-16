// CartForm.js
import React from 'react';
import { useCart } from './CartContext';

export default function CartForm({ onClose, selectedImage, selectedColor, size, price }) {
  const { addItemToCart } = useCart();

  const handleSave = () => {
    addItemToCart({ selectedImage, selectedColor, size, price });
    onClose();
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
        <div className="relative flex flex-col gap-3 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold ">Add to cart</h2>
          <div className="flex items-center">
            <img src={selectedImage} alt="Selected" className=" h-[90px] sm:h-[110px] md:h-[140px] lg:h-[160px]" />
            <div className="flex flex-col">
              <span className="text-lg">Color: {selectedColor}</span>
              <span className="text-lg">Size: {size}</span>
              <span className="text-lg">Price: LKR {price}</span>
            </div>
          </div>
          <div className='flex gap-6 text-xl text-green-600 justify-evenly hover:text-green-600'>
            <button className='px-[6px] py-[3px] border border-green-700 rounded-md w-[40%]' onClick={handleSave}>Save</button>
            <button
              className="px-[6px] py-[3px] border border-green-700 rounded-md w-[40%]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
