"use client"

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewCarousel({ project, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
    className={`${
      isVisible ? "animate-fade-left" : "opacity-0"
    }`}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {project.images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={`/Espe-Portfolio/${image}`}
            alt="Slide"
            className="rounded-lg mt-8"
          />
          <Carousel.Caption>
            {/*<h3>Title</h3>
            <p>Body</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        
      ))}
    </Carousel>
    </div>
  );
}
