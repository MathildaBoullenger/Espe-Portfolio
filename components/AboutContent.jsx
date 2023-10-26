"use client"

import ProfilePic from "./ProfilePic";
import { useState, useEffect } from "react";
import AboutText from "./AboutText";

export default function AboutContent({delay}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <ProfilePic delay={100} onImageLoad={handleImageLoad} />
      {imageLoaded && <AboutText delay={200} />}
    </>
  );
}

