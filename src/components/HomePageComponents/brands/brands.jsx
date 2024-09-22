import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getBrandsRequest } from "../../../APIRequest/getBrandsApi";
import { useSelector } from "react-redux";
import LoadingHomePageBrands from "../../common/loading/LoadingHomePageBrands";

const Brands = () => {
  const brands = useSelector((state) => state.brands);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await getBrandsRequest();
    })();
  }, []);

  // Determine whether to enable infinite scrolling based on the number of brands
  const infiniteScroll = brands?.brands?.length > 9;

  // Slider settings for 3 rows and 3 columns for larger screens and 2 columns on mobile (400px)
  var settings = {
    infinite: infiniteScroll, // Infinite scrolling only if there are more than 9 brands
    autoplay: true,
    speed: 500,
    slidesToShow: 1, // Set to 1 for column control with `slidesPerRow`
    slidesToScroll: 1,
    rows: 3, // Set for 3 rows
    slidesPerRow: 3, // Default 3 columns for larger screens
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
          slidesPerRow: 3, // 3 columns
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
          slidesPerRow: 3, // 2 columns for smaller screens
        },
      },
      {
        breakpoint: 576, // Mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
          slidesPerRow: 2, // 2 columns for mobile portrait view
        },
      },
      {
        breakpoint: 400, // Very small screens (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
          slidesPerRow: 2, // 2 columns for mobile view at 400px
        },
      },
    ],
  };

  return (
    <div>
      <div className="py-10 border-b px-8">
        <h1 className="uppercase text-2xl font-light">BRANDS</h1>
      </div>
      <div className="pt-10">
        {brands?.loading ? (
          <LoadingHomePageBrands />
        ) : (
          <div className="lg:w-full max-w-4xl mx-auto">
            <div className="w-full">
              <Slider {...settings}>
                {brands?.brands?.map((item, idx) => (
                  <div key={idx}>
                    <Link
                      to={`/collections?pageNo=1&perPage=30&searchKeyword=0&brand=${item?.name}`}
                    >
                      <img
                        className="w-[100px] h-[50px]  block border brand_logo_shadow m-3 px-2"
                        src={item?.img[0]?.secure_url}
                        alt={`Brand logo ${item?.name}`}
                      />
                    </Link>
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
