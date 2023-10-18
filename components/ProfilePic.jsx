"use client"

import { useState, useEffect } from 'react';

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
        isVisible ? 'animate-fade-left md:w-1/3' : 'opacity-0'
      }`}
    >
      <img
        src="./images/Profile.jpg"
        alt="Profile"
        className="w-full h-auto md:rounded-lg md:max-w-md mb-10"
        onLoad={handleImageLoad} // Attach the onLoad event handler
      />
    </div>
  );
}
