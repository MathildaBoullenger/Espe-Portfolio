"use client"
import React, { useState, useEffect } from 'react';

export default function NewCarousel({ project, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + project.images.length) % project.images.length);
  };

    return (
      <div
        className={`carousel-container ${
          isVisible ? "animate-fade-left" : "opacity-0"
        }`}
      >
        <div className="carousel">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className={`carousel-item ${
                idx === currentIndex ? "active" : "hidden"
              }`}
            >
              <img
                src={`/${image}`}
                alt="Slide"
                className="rounded-lg mt-8"
              />
              <button className="carousel-control prev" onClick={prevSlide}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="carousel-control next" onClick={nextSlide}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <div className="carousel-caption">
                {/* Your caption content here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }