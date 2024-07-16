"use client";

import React from "react";
import InfiniteMovingCards from "./InfiniteMovingCards";

import { SiPuma } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiReebok } from "react-icons/si";
import { SiUnderarmour } from "react-icons/si";
import { SiFila } from "react-icons/si";
import { SiNewbalance } from "react-icons/si";
import { SiThenorthface } from "react-icons/si";
import { SiAnimalplanet, SiApple, SiCircleci, SiClarifai, SiChevrolet, SiCloudways } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";

function LogoMove() {
  const testimonials = [
    {
      logo: <SiPuma/>,
    },
    {
      logo: <SiAdidas/>,
    },
    {
      logo: <SiNike/>,
    },
    {
      logo: <SiReebok/>,
    },
    {
      logo: <SiUnderarmour/>,
    },
    {
      logo: <SiFila/>,
    },
    {
      logo: <SiNewbalance/>,
    },
    {
      logo: <SiThenorthface/>,
    },
    {
      logo: <SiAnimalplanet />,
    },
    {
      logo: <SiApachemaven/>,
    },
    {
      logo: <SiApple/>,
    },
    {
      logo: <SiCircleci/>,
    },
    {
      logo: <SiClarifai/>,
    },
    {
      logo: <SiChevrolet/>,
    },
    {
      logo: <SiCloudways/>,
    },
  ];

  return (
    <div className="w-full ">
      <div className=" h-full rounded-md flex flex-col antialiased bg-white dark:bg-gray-900 dark:bg-grid-white/[0.  05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
}

export { LogoMove };
