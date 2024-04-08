import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import 'slick-carousel/slick/slick-theme.css';
import "../carousel/carousel.css";
import Button from "../button/Button";

import image1 from "../../images/carousel/image1_.png";
import image2 from "../../images/carousel/image2_.jpeg";
import image3 from "../../images/carousel/image3_.png";

const Carousel = () => {
  const sliderRef = useRef(null);

  const [changingTextIndex, setChangingTextIndex] = useState(0);
  const changingTexts = [
    "A Turnkey Real Estate Development Platform.",
    "Collegium employs digital tools to make buildings more cost-effective, faster with less risk.",
    "Is a Collegium project right for you?",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 6000);

    const textIntervalId = setInterval(() => {
      setChangingTextIndex(
        (prevIndex) => (prevIndex + 1) % changingTexts.length
      );
    }, 6000);

    return () => {
      clearInterval(intervalId);
      clearInterval(textIntervalId);
    };
  }, [changingTexts.length]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [image1, image2, image3];

  return (
    <div className="changing-text-container">
      <div className="carousel-mask">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="carousel-image-container">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
        {changingTexts[changingTextIndex] ===
        "A Turnkey Real Estate Development Platform." ? (
          <h1 className="changing-text-first">
            {changingTexts[changingTextIndex]}
          </h1>
        ) : (
          <h1 className="changing-text">{changingTexts[changingTextIndex]}</h1>
        )}

        {changingTexts[changingTextIndex] ===
        "A Turnkey Real Estate Development Platform." ? (
          <>
            <h3 className="mySpan">
              Collegium stands as an antithesis, revolutionizing building
              industry norms digitally.
            </h3>
          </>
        ) : (
          <p></p>
        )}

        {changingTexts[changingTextIndex] ===
        "Is a Collegium project right for you?" ? (
          <div className="herButton">
            <Button label="Take the Survey" to="/survey" />
          </div>
        ) : (
          <div className="herButton"></div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
