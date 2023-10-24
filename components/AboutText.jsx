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

          <p className="lg:text-4xl md:text-2xl text-2xl font-inter">
            I am a passionate 3D Designer and Architect
          </p>

          <p className="mt-4 text-intellectual-grey font-inter">
          As a highly motivated 3D Designer, Interior Designer, and Architect, I am passionate about creating spaces that are functional, aesthetically pleasing, and in line with my clients' needs and preferences. 
          <br></br>
          With extensive experience in using a variety of 3D design tools and software, as well as a "can-do" attitude, I am always eager to take on new challenges and continue learning and growing professionally.
          <br></br>
          <strong>If you're looking for an experienced, dedicated, and constantly evolving designer, I would love to hear from you!</strong>
          </p>

          <div className="mt-4">
            <a href="mailto:esperanzalbani@gmail.com" className="text-light-gold hover:underline mr-4 font-inter">esperanzalbani@gmail.com</a>
            <a href="tel:+64 27 375 4054" className="text-light-gold hover:underline">+64 27 375 4054</a>
          </div>

</div>
)

}