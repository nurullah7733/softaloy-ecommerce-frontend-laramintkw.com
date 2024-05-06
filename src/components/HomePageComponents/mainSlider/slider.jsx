import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MainSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="md:!p-0 "
      style={{
        overflow: "hidden",
        paddingTop: "0",
        textAlign: "center",
        fontSize: "0px",
      }}
    >
      <Slider {...settings}>
        <div>
          <Link href="#">
            <img src="/slider-1.webp" className="w-full" />
          </Link>
        </div>
        <div>
          <Link href="#">
            <img src="/slider-2.webp" className="w-full" />
          </Link>
        </div>
        <div>
          <Link href="#">
            <img src="/slider-3.webp" className="w-full" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;

// search bar design
