"use client"

import React, { useEffect, useState } from "react";

export default function Heading({ children, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1
      className={`${
        isVisible ? "animate-fade-left font-inter font-bold pb-3 text-4xl text-intellectual-grey" : "opacity-0"
      }`}
    >
      {children}
    </h1>
  );
}