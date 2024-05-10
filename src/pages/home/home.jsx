import React from "react";
import MainSlider from "../../components/HomePageComponents/mainSlider/slider";
import Brands from "../../components/HomePageComponents/brands/brands";
import BestSales from "../../components/HomePageComponents/bestSales/bestSales";
import TrandingAndRecomended from "../../components/HomePageComponents/trandingAndRecomended/trandingAndRecomended";
import NewArrivals from "../../components/HomePageComponents/newArrivals/newArrivals";
import LoadingHomePageProducts from "../../components/common/loading/LoadingHomePageProducts";
import LoadingHomePageBrands from "../../components/common/loading/LoadingHomePageBrands";

const HomePage = () => {
  return (
    <div>
      <div className="z-[-1px] ">
        <MainSlider />
      </div>
      <Brands />
      <BestSales />
      <TrandingAndRecomended />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
