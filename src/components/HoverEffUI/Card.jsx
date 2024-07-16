// Card.js
import React from "react";
import { cn } from "./cn";

export const Card = ({ className, children }) => {
  return (
    <div className={cn("overflow-hidden  relative z-20", className ='z-20')}>
      <div className="relative z-30">
        <div className="p-[6px]">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className= 'items-center justify-center')}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
