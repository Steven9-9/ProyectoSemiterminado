import React, { useEffect, useState } from 'react';
import Slide from '../Slide';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <Slide key={index} text={slide} active={index === currentSlide} />
      ))}
    </div>
  );
};

export default Slider;