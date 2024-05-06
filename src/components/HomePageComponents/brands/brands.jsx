import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Brands = () => {
  var settings = {
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py-10 border-b px-8">
        <h1 className="uppercase text-2xl font-light">BRANDS</h1>
      </div>
      <div
        className=" "
        style={{
          paddingTop: "0",
          textAlign: "center",
          fontSize: "0px",
        }}
      >
        <Slider
          {...settings}
          className="lg:w-full max-w-4xl  !mx-auto py-10 lg:px-4 "
        >
          <div className="!flex flex-col gap-y-4 items-center">
            <Link href="#" className="w-[100px]">
              <img
                src="/brands/1.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#" className="w-[100px]">
              <img
                src="/brands/2.avif"
                className="w-[100px] border  brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#" className="w-[100px]">
              <img
                src="/brands/3.avif"
                className="w-[100px] border  brand_logo_shadow h-auto"
              />
            </Link>
          </div>
          <div className="!flex flex-col gap-y-4 items-center">
            <Link href="#">
              <img
                src="/brands/4.avif"
                className="w-[100px] border  brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/5.avif"
                className="w-[100px] border  brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/6.avif"
                className="w-[100px] border brand_logo_shadow  h-auto"
              />
            </Link>
          </div>
          <div className="!flex flex-col gap-y-4 items-center">
            <Link href="#">
              <img
                src="/brands/7.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/8.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/9.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
          </div>
          <div className="!flex flex-col gap-y-4 items-center">
            <Link href="#">
              <img
                src="/brands/10.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/11.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/12.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
          </div>
          <div className="!flex flex-col gap-y-4 items-center">
            <Link href="#">
              <img
                src="/brands/13.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/14.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/15.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
          </div>
          <div className="!flex flex-col gap-y-4 items-center">
            <Link href="#">
              <img
                src="/brands/16.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
            <Link href="#">
              <img
                src="/brands/17.avif"
                className="w-[100px] border brand_logo_shadow h-auto"
              />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
