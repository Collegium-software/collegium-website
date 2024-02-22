import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "../SingleProject/singleProjectCarousel.css"


import image2 from "../../../images/projectsPage/projectsGalImg2.jpg";
import image3 from "../../../images/projectsPage/projectsGalImg3.jpg";
import image4 from "../../../images/projectsPage/projectsGalImg4.jpg";


const SingleProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
     slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container1">
      <Slider {...settings}>
       
        <div>
          <img src={image2} alt="collegium project 1" />
        </div>
        <div>
          <img src={image3} alt="collegium project 2" />
        </div>
        <div>
          <img src={image4} alt="collegium project 3" />
        </div>
      </Slider>
    </div>
  );
}

export default SingleProjectCarousel;
