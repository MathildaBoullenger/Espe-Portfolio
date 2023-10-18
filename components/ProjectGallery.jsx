"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        isVisible ? "animate-fade-left full lg:w-3/4 mx-auto" : "opacity-0"
      }`}
    >
      {filteredProjects.map((project, index) => (
        <div key={index} className="w-full rounded-lg p-8">
          {project.images && project.images.length > 0 ? (
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 justify-center hover:scale-110 hover:grayscale transition-all ease-out duration-300">
              {project.images.slice(0, 4).map(
                (image, i) =>
                  image && (
                    <Link href={`/projects/${project.slug}`}>
                      <div
                        key={i}
                        className="w-full h-auto max-h-full rounded-lg"
                      >
                        <Image
                          className="w-full h-auto max-h-full rounded-lg"
                          src={`/Espe-Portfolio/${image}`}
                          alt=""
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
          )}
        </div>
      ))}
    </div>
  );
}
