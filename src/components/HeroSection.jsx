import React, { useRef } from "react";
import Slider from "react-slick";
import slide1 from "../assets/slide_cover.png";
import slide2 from "../assets/slide_cover_2.png";
import slide3 from "../assets/slide_cover_3.png";
import slide4 from "../assets/slide_cover_5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const slides = [slide1, slide2, slide3, slide4];
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    },
    afterChange: () => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    },
  };

  return (
    <section className="w-[68%] sm:w-[96%] mx-auto">
      <div className="relative mt-7">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-40 sm:h-full object-cover"
                src={image}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
