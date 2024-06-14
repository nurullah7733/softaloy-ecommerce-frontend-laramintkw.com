import React, { useEffect } from "react";
import MainSlider from "../../components/HomePageComponents/mainSlider/slider";
import Brands from "../../components/HomePageComponents/brands/brands";
import BestSales from "../../components/HomePageComponents/bestSales/bestSales";
import TrandingAndRecomended from "../../components/HomePageComponents/trandingAndRecomended/trandingAndRecomended";
import NewArrivals from "../../components/HomePageComponents/newArrivals/newArrivals";
import { getAddToCartInLocalStorage } from "../../../utils/sessionHelper/sessionHelper";
import store from "../../../redux/store";
import { setAddToCartFromLocalStorage } from "../../../redux/features/addToCartSlice/addToCartSlice";

const HomePage = () => {
  const AddToCartInLocalStorage = getAddToCartInLocalStorage();
  useEffect(() => {
    if (AddToCartInLocalStorage) {
      store.dispatch(setAddToCartFromLocalStorage(AddToCartInLocalStorage));
    }
  }, []);

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
