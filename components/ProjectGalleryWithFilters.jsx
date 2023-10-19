"use client";

import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";
import Button from "./Button";

export default function ProjectGalleryWithFilters({ projects, delay }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  const handleCategorySelection = (category) => {
    console.log("selected category:", category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);


  return (
    <>
      <div
      className={`${
        isVisible ? "animate-fade-left flex justify-center mx-auto mt-16 mb-8 lg:flex-row md:flex-col sm:flex-col" : "opacity-0" }`}>
        <Button
          delay={0}
          onClick={() => handleCategorySelection("Interior Visualisation")}
        >
          Interior Visualisation
        </Button>
        <Button
          delay={0}
          onClick={() => handleCategorySelection("Exterior Visualisation")}
        >
          Exterior Visualisation
        </Button>
        <Button
          delay={0}
          onClick={() => handleCategorySelection("Design Concept")}
        >
          Design Concept
        </Button>
        <Button
          delay={0}
          onClick={() => handleCategorySelection("Panoramic render 360°")}
        >
          Panoramic render 360°
        </Button>
      </div>

      <ProjectGallery
        projects={projects}
        delay={1000}
        category={selectedCategory}
      />
    </>
  );
}
