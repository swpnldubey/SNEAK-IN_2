// Slider.js
import React, { useState, useEffect } from 'react';
import image1 from '../icons/image1.png';
import image2 from '../icons/image2.png';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your image URLs here
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;