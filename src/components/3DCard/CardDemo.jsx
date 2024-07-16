import React from 'react'
import { CardBody, CardContainer, CardItem } from "./Effects";

export default function CardDemo() {
  return (
    <div>
      <CardContainer className="h-[50%] md:h-full z-10 bg-blue-950/50  shadow-2xl rounded-2xl rounded-bl-[70px] rounded-ss-[70px] rounded-ee-[70px]">
        <CardBody className="">
          <CardItem
            translateZ="50"
            className=""
          >
            <img src="/mn1.png" alt="shoe" className='h-full p-2 ' />
          
          </CardItem>
        </CardBody>
      </CardContainer>

    </div>
  )
}
