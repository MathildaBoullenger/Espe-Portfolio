"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProfilePic({ delay, onImageLoad }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  const handleImageLoad = () => {
    // Call the provided onImageLoad function when the image is loaded
    if (onImageLoad) {
      onImageLoad();
    }
  };

  return (
    <div
      className={`${
        isVisible ? 'animate-fade-left min-w-2/3 md:mt-10' : 'opacity-0'
      }`}
    >
      <Image
        src="/images/Profile.png"
        alt="Profile"
        className="w-full h-auto rounded-lg mb-10"
        onLoad={handleImageLoad} // Attach the onLoad event handler
        width="800"
        height="600"
      />
    </div>
  );
}
