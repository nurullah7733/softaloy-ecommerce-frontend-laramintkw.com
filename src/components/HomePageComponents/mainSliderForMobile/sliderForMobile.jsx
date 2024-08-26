import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getMainSlidersForMobileRequest } from "../../../APIRequest/getMainSlidersForMobileApi";
import { useSelector } from "react-redux";

const MainSliderForMobile = () => {
  const mainSliders = useSelector((state) => state.mainSlidersForMobile);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    (async () => {
      await getMainSlidersForMobileRequest();
    })();
  }, []);

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
        {mainSliders.mainSliders
          ?.slice()
          ?.reverse()
          .map((slider) => (
            <div key={slider?._id}>
              <Link to={slider?.link ? slider?.link : "#"}>
                <img src={slider?.img[0]?.secure_url} className="w-full" />
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MainSliderForMobile;
