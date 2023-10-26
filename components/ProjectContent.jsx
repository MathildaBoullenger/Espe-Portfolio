"use client"

import React, { useState, useEffect } from "react";

export default function ProjectContent({ project, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timer when the component unmounts or when the delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${
        isVisible ? "animate-fade-left mt-8" : "opacity-0"
      }`}
    >
      <article
        dangerouslySetInnerHTML={{ __html: project.body }}
        className="font-inter max-w-screen-sm prose prose-slate"
      />
    </div>
  );
}
