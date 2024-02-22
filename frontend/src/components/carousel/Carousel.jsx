import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../carousel/carousel.css'
import Button from '../button/Button';


import image1 from "../../images/drmakete-lab-hsg538WrP0Y-unsplash.png";
import image2 from "../../images/alex-padurariu-ZKBQmgMyf8s-unsplash.png";
import image3 from "../../images/anders-jilden-Sc5RKXLBjGg-unsplash.png";

const Carousel = () => {
  const sliderRef = useRef(null);

  const [changingTextIndex, setChangingTextIndex] = useState(0);
  const changingTexts = [
    'A Turnkey Real Estate Development Platform. Collegium is the Digital Antithesis of Traditional Design & Construction.',
    'Collapsing Cost, Schedule, and Risk using Collegium.',
    'Buyers Guide. Is a Collegium project right for you?']; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    const textIntervalId = setInterval(() => {
      setChangingTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearInterval(textIntervalId);
    };
  }, [changingTexts.length]);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [image1, image2, image3]; 

  return (
    <div className="changing-text-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-image-container">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>

      <h1 className='changing-text'>{changingTexts[changingTextIndex]}</h1>

      {changingTexts[changingTextIndex] ===  'Buyers Guide. Is a Collegium project right for you?' ? (
        <div className="herButton"><Button label="Take the Survey"/></div>
      ) : (
        <div className="herButton"><Button label="Learn More"/></div>
      )}
    </div>
  );
};

export default Carousel;



