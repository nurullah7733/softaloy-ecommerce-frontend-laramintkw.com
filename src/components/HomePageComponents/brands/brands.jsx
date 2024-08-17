import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getBrandsRequest } from "../../../APIRequest/getBrandsApi";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../../../utils/windowSize/useWindowSize";
import LoadingHomePageBrands from "../../common/loading/LoadingHomePageBrands";

const Brands = () => {
  const brands = useSelector((state) => state.brands);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await getBrandsRequest();
    })();
  }, []);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: true,
          rows: 3,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          rows: 3,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          rows: 3,
          slidesPerRow: 3,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py-10 border-b px-8">
        <h1 className="uppercase text-2xl font-light">BRANDS</h1>
      </div>
      <div className=" pt-10 ">
        {brands?.loading ? (
          <LoadingHomePageBrands />
        ) : (
          <div className="lg:w-full max-w-4xl mx-auto">
            <div className={`grid-cols-6  gap-10 lg:hidden grid   `}>
              {brands?.brands?.map((item, idx) => (
                <div key={idx}>
                  <Link
                    to={`/collections?pageNo=1&perPage=30&searchKeyword=0&brand=${item?.name}`}
                    className="w-[100px]"
                  >
                    <img
                      src={item?.img[0]?.secure_url}
                      className="w-[300px]  h-[50px]  border brand_logo_shadow "
                    />
                  </Link>
                </div>
              ))}
            </div>

            <div className={`lg:block hidden w-full lg:px-8`}>
              <Slider {...settings}>
                {brands?.brands?.map((item, idx) => (
                  <div key={idx}>
                    <img
                      className="w-[300px]  h-[50px] border brand_logo_shadow m-3 px-2"
                      src={item?.img[0]?.secure_url}
                      alt={`Image ${idx + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
