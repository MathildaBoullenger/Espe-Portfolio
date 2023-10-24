"use client"

import React, { useEffect, useState } from "react";

export default function Service({ title, content, delay }) {

const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);
  
    
return (

<div
      className={`${isVisible ? "font-roboto font-bold w-full p-8 sm:p-4 rounded-lg transition-all ease-out duration-300 bg-intellectual-grey text-white hover:bg-light-grey hover:text-intellectual-grey c link" : "opacity-0"}`}>
      <h1 className="text-2xl">{title}</h1>
      <p className="font-lato mt-4 opacity-40">{content}</p>
</div>

  );
}

