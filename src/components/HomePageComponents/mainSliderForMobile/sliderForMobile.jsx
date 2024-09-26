import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { getMainSlidersForMobileRequest } from "../../../APIRequest/getMainSlidersForMobileApi";
import { useSelector } from "react-redux";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainSliderForMobile = () => {
  const mainSliders = useSelector((state) => state.mainSlidersForMobile);

  useEffect(() => {
    (async () => {
      await getMainSlidersForMobileRequest();
    })();
  }, []);

  return (
    <div className="md:!p-0 w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation={false}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full" // Set the height of the Swiper
      >
        {mainSliders.mainSliders
          ?.slice()
          ?.reverse()
          .map((slider) => (
            <SwiperSlide key={slider?._id}>
              <Link to={slider?.link ? slider?.link : "#"}>
                <img
                  src={slider?.img[0]?.secure_url}
                  className="w-full h-full object-cover border" // Use object-cover for full coverage
                  alt="Slider"
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MainSliderForMobile;
