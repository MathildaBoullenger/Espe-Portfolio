"use client"

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewCarousel({ project }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
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
  );
}
