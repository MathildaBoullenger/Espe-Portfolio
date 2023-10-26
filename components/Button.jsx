"use client";

import React, { useEffect, useState } from "react";

export default function Button({ children, delay, ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <button
      type="button"
      className={`${
        isVisible
          ? "animate-fade-left px-4 py-4 font-inter font-bold text-xl tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 bg-intellectual-grey hover:bg-light-grey text-white hover:scale-105 active:scale-100  tablet:first:ml-0  cursor-none undefined link no-underline"
          : "opacity-0"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

{
  /*export default function Button({ children }) {
    return ( 
    <button type="button" className="px-4 py-2 font-poppins font-light text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-100  tablet:first:ml-0  cursor-none undefined link">
      {children}
    </button>
    );
  }*/
}
