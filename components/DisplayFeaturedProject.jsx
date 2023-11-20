"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DisplayFeaturedProject({ project, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-300 mt-16 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
    <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
      <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
       
      <h1 className="font-inter font-bold pb-3 text-3xl text-light-gold">Latest Work.</h1>
        <h2 className="font-inter text-xl mb-6 text-light-gold">{project.title}</h2>
       
        <div className="relative overflow-hidden transition-all ease-out duration-300 mob:h-auto flex justify-center items-center">
          <Link href={`/projects/${project.slug}`}>
            <Image
              alt="Project One Test"
              className="filter rounded-lg object-cover hover:scale-110 transition-all ease-out duration-300"
              src={`esperanzalbani.com/${project.images[0]}`} 
              width="900"
              height="100"
            />
          </Link>
      
        </div>
      </div>
    </div>
    </div>
  );
}