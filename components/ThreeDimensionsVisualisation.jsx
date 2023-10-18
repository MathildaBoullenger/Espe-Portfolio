"use client"

import { useState, useEffect } from "react";

export default function ThreeDimensionsVisualisation({projects, delay}) {
    console.log('3d', projects);

    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
  
      // Clear the timer when the component unmounts or when the delay changes
      return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`${isVisible ? "animate-fade-left full" : "opacity-0"}`}>
          {projects.map((project, index) => (
            <div key={index} className="w-full h-full rounded-lg p-8 flex items-center justify-center">
              {project.visualisations && project.visualisations.length > 0 ? (
                <div className="w-full">
                  {project.visualisations.map((visualisation, i) => (
                    visualisation && (
                      <iframe className="mb-10 rounded-lg" key={i} src={visualisation} width="100%" height="600"></iframe>
                    )
                  ))}
                </div>
              ) : (
                <p>No visualizations available</p>
              )}
            </div>
          ))}
        </div>
      );
      
            }

    {/* 
<div className={`${
        isVisible ? "animate-fade-left full lg:w-3/4 mx-auto" : "opacity-0"
      }`} >

      {projects.map((project, index) => ( 
        <div key={index} className="w-full rounded-lg p-8">
          {project.images && project.images.length > 0 ? (
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 justify-center hover:scale-110 hover:grayscale transition-all ease-out duration-300">
              {project.images.slice(0,4).map((image, i) => (
                image && (
                
<Link href={`/projects/${project.slug}`}>
                  <div key={i} className="w-full h-auto max-h-full rounded-lg">
                    <img
                      className="w-full h-auto max-h-full rounded-lg"
                      src={image}
                      alt=""
                    />
                    <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center flex flex-col items-center justify-center font-inter text-4xl text-light-gold">
                    <h1>Learn more about:</h1>
                    <h1 className="my-2">{project.title}</h1>
                    </div>
                  </div>
</Link>

                )
              ))}
            </div>
          ) : (
            // Optional: Render a placeholder or message when there are no images
            <p>No images available</p>
          )}

        </div>
      ))}
    </div>
  );
}

*/}