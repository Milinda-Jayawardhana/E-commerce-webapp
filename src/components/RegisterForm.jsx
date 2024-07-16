import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function RegisterForm( {onClose} ) {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent the blur event when clicking the button
  };

  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const [isPasswordFocused2, setIsPasswordFocused2] = useState(false);

  const togglePasswordVisibility2 = (e) => {
    e.preventDefault();
    setPasswordVisible2(!passwordVisible2);
  };

  const handleMouseDown2 = (e) => {
    e.preventDefault(); // Prevent the blur event when clicking the button
  };

  /*return (

    <div className='container mx-auto '>
      <div className=' flex flex-col lg:flex-row gap-[30px] px-10 lg:px-20'>
        <div className=' lg:w-[54%] order-2 lg:order-none justify-center'>
          
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <Input type="firstname" placeholder="First name"/>
            <Input type="lastname" placeholder="Last name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="phone" placeholder="Mobile number"/>
          </div>

        </div>
      </div>
    </div>
  )*/
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative p-6 rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%] bg-black">
        <button
          className="absolute text-xl text-gray-400 top-4 right-[30px] hover:text-green-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-4 text-3xl font-bold text-green-600">Register..</h2>
        <form className='text-white/80 '>
          <div className='grid grid-cols-2 gap-4'>
            <div className="">
              <label className="block mb-2">
                First Name:
                <Input type="text"  placeholder='Your first name'  required/>
              </label>
            </div>
            <div className="">
              <label className="block mb-2">
                Last Name:
                <Input type="text"  placeholder='Your last name'  required/>
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-2">
                Username:
                <Input type="text"  placeholder='Your first name'  required/>
              </label>
            </div>
          </div>
          <div className=' w-[45%]'>
            <label className="block mb-2">
              Gender:
              <Input type="text" placeholder='Select gender'  required/>
            </label>
          </div>

          <div className='flex justify-between gap-4 '>
            <div className=' w-[45%]'>
              <label className="block mb-2">
                Email:
                <Input type="email"  placeholder='Your email'  required/>
              </label>
            </div>
            <div className=' w-[45%]'>
              <label className="block mb-2">
                Mobile:
                <Input type="phone"  placeholder='Mobile number'  required/>
              </label>
            </div>
          </div>

          <div className='pt-4 '>
            <h1 className='text-xl text-white'>Address</h1>
            <div className='flex justify-between gap-4 '>
              <div className=' w-[30%]'>
                <label className="block mb-2">
                  Number:
                  <Input type="text" placeholder='No:xx'  />
                </label>
              </div>
              <div className=' w-[30%]'>
                <label className="block mb-2">
                  City/Town:
                  <Input type="text" placeholder='City/Town'  />
                </label>
              </div>
              <div className=' w-[30%]'>
                <label className="block mb-2">
                  Street:
                  <Input type="text"  placeholder='Street'  />
                </label>
              </div>
            </div>
          </div>

          <div className='flex justify-between gap-4 '>
            
            <div className="relative w-[45%]">
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
            <div className="relative w-[45%]">
              <label className="block mb-2">
                Conform Password:
                <Input
                  type={passwordVisible2 ? 'text' : 'password'}
                  placeholder="Conform Password"
                  required
                  onFocus={() => setIsPasswordFocused2(true)}
                  onBlur={() => setIsPasswordFocused2(false)}
                />
              </label>
              {isPasswordFocused2 && (
                <button
                  type="button"
                  onMouseDown={handleMouseDown2}
                  onClick={togglePasswordVisibility2}
                  className="absolute text-gray-400 right-2 top-[38px] hover:text-green-600"
                >
                  {passwordVisible2 ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
          </div>

          <div className='pt-4 '>
            <button type="submit" className="w-full p-2 text-white bg-green-700 rounded-md hover:bg-green-800 hover:text-black">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
