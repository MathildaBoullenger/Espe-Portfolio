"use client"
import { useState, useEffect } from "react";

export default function AboutText ({ delay }) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
  
      // Clear the timer when the component unmounts or when the delay changes
      return () => clearTimeout(timer);
    }, [delay]);
  
return(

<div className={`"animate-fade-left md:w-2/3 md:mt-10" ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>

          <p className="lg:text-4xl md:text-2xl sm:text-xl font-inter">
            Passionate 3D Designer and Architect | Creating Functional and Aesthetically Pleasing Spaces
          </p>

          <p className="mt-4 text-intellectual-grey font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod sapien eu purus mattis, a laoreet nulla consectetur. Vivamus auctor nisi eget ligula sodales, nec tempus lectus viverra. Donec varius nisl ut vestibulum.
          </p>

          <div className="mt-4">
            <a href="mailto:esperanzalbani@gmail.com" className="text-light-gold hover:underline mr-4">esperanzalbani@gmail.com</a>
            <a href="tel:+64 27 375 4054" className="text-light-gold hover:underline">+64 27 375 4054</a>
          </div>

</div>
)

}