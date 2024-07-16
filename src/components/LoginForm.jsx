import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RegisterForm({ onClose }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent the blur event when clicking the button
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative p-6 rounded-lg shadow-lg  w-[70%] md:w-[50%] lg:w-[30%] bg-black">
        <button
          className="absolute text-xl text-gray-400 top-4 right-[30px] hover:text-green-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-4 text-3xl font-bold text-green-600">Login</h2>

        <form className="text-white/80">
          <div className="grid gap-4">
            <div>
              <label className="block mb-2">
                Username:
                <Input type="text" placeholder="Username" required />
              </label>
            </div>
            <div className="relative">
              <label className="block mb-2">
                Password:
                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  required
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                />
              </label>
              {isPasswordFocused && (
                <button
                  type="button"
                  onMouseDown={handleMouseDown}
                  onClick={togglePasswordVisibility}
                  className="absolute text-gray-400 right-2 top-[38px] hover:text-green-600"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full p-2 text-white bg-green-700 rounded-md hover:bg-green-800 hover:text-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
