// cn.js (utility function)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Input.js (Input component)
import * as React from "react";


const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <input
      type={type}
      className={cn(
        "w-full flex h-[35px] rounded-md border border-white/20 hover:border-green-600 focus:border-green-600 font-light bg-slate-600/20 px-4 py-5 text-base placeholder:text-white/60",
        isFocused ? "text-green-600" : "text-white",
        className
      )}
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

