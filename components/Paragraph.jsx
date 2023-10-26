"use client"

import React, { useState, useEffect } from 'react';

export default function Paragraph({ text, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <p className={`${
      isVisible ? 'animate-fade-left opacity-100 pt-4 pb-4' : 'opacity-0'
    }`}>{text}</p>
  );
}