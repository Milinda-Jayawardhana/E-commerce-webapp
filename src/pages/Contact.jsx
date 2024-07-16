import React from 'react'

import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Mobile No",
    value: "(+94) 71 550 8827",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "shehanj809@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Matara, Sri Lanka",
  },
];

export default function Contact() {
  return (
    <div>
      <div
        
        className='py-6 text-white'
      >
        <div className='container mx-auto '>
          <div className=' flex flex-col lg:flex-row gap-[30px] px-10 lg:px-20'>
            <div className=' lg:w-[54%] order-2 lg:order-none justify-center'>
              <form className='flex flex-col gap-6 p-10 border border-b-0 border-green-700 bg-black/40 rounded-xl'>
                <h3 className='text-4xl font-semibold text-green-400'>Contact Us</h3>
                <p className=' text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam! Aperiam, corporis ullam quam sit eaque natus aut magni consequatur consequuntur dignissimos nemo.</p>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <Input type="firstname" placeholder="First name" className='bg-gray-900/70'/>
                  <Input type="lastname" placeholder="Last name" className='bg-gray-900/70'/>
                  <Input type="email" placeholder="Email" className='bg-gray-900/70'/>
                  <Input type="phone" placeholder="Mobile number" className='bg-gray-900/70'/>
                </div>
                <Select>
                  <SelectTrigger className="w-full border-transparent bg-gray-900/70 hover:border-green-700">
                    <SelectValue placeholder = "Select a Service" className='text-white/60'/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel> Choose one</SelectLabel>
                      <SelectItem value = "est">As a customer</SelectItem>
                      <SelectItem value = "cst">As a employer</SelectItem>
                      <SelectItem value = "mst">Become a new employer</SelectItem>
                      <SelectItem value = "bst">Become a third party invester</SelectItem>

                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea  className='bg-gray-900/70  h=[200px] border-transparent hover:border-green-700' placeholder="Send your comments for me.."></Textarea>
                <Button className="bg-green-400 hover:bg-black border border-transparent hover:border-green-400 font-bold border-[#19191d] max-w-40 hover:text-green-400  rounded-xl">Submit</Button>
              </form>
            </div>

            <div className='flex items-center justify-start flex-1 order-1 pb-8 mb-8 lg:justify-end lg:order-none md:mb-0'>
              <ul className='flex flex-col justify-center gap-10 text-white '>
                {info.map((item, index)=>{
                  return(
                    <li key={index} className='flex items-center gap-6'>
                      <div className=' w-[52px] h-[52px] md:w-[72px] md:h-[72px] border border-b-0 border-green-700 bg-black/40 text-green-400 rounded-md flex items-center justify-center'>
                        <div className='text-3xl '>
                          {item.icon}
                        </div>
                      </div>
                      <div className='flex-1 '>
                        <h3 className=' text-white/60'>{item.title}</h3>
                        <p className='text-xl '>{item.value}</p>
                      </div>
                      
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}


