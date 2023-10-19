"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function columnClasses(imageCount, index) {
  if (imageCount === 3 && index === 0) {
    return 'lg:grid-cols-1';
  } else {
    return 'lg:grid-cols-2';
  }
}

export default function ProjectGallery({ projects, delay, category }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  console.log("projects", projects);

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  console.log('filteredProjects', filteredProjects)

  return (
    <div
      className={`${
        isVisible ? "animate-fade-left full lg:w-full" : "opacity-0"
      }`}
    >
      {filteredProjects.map((project, index) => (
        <div key={index} className="w-full rounded-lg pb-8 pt-8">
          {project.images && project.images.length > 0 ? (
            //index isn't working!!
             <div className={`relative grid ${project.images.length === 1 ? 'lg:grid-cols-1' : columnClasses(project.images.length, index)} gap-4 justify-center hover:scale-105 hover:grayscale transition-all ease-out duration-300}`}>
              {project.images.slice(0, 4).map(
                (image, i) =>
                  image && (
                    <Link href={`/projects/${project.slug}`}>
                      <div
                        key={i}
                        className={`rounded-lg ${
                          i == 0
                            ? 'lg:grid-cols-1'
                            : 'lg:grid-cols-2'
                        }`}
                      >
                        <Image
                          className="w-full h-auto max-h-full rounded-lg"
                          src={`/Espe-Portfolio/${image}`}
                          alt=""
                          width="800"
                          height="600"
                        />
                        <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center flex flex-col items-center justify-center font-inter text-4xl text-light-gold">
                          <h1 className="my-2">{project.title}</h1>
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          ) : (
            // Optional: Render a placeholder or message when there are no images
            <p>No images available</p>
          )
          }
        </div>
      ))}
    </div>
  );

}
