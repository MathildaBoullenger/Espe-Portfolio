"use client";

import React, { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import Button from "./Button";

export default function ProjectGalleryWithFilters({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelection = (category) => {
    console.log("selected category:", category);
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex justify-center p-8 mx-auto">
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
        delay={500}
        category={selectedCategory}
      />
    </>
  );
}
