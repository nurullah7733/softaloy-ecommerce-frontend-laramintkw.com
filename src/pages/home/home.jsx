import React, { useEffect } from "react";
import MainSlider from "../../components/HomePageComponents/mainSlider/slider";
import Brands from "../../components/HomePageComponents/brands/brands";
import BestSales from "../../components/HomePageComponents/bestSales/bestSales";
import TrandingAndRecomended from "../../components/HomePageComponents/trandingAndRecomended/trandingAndRecomended";
import NewArrivals from "../../components/HomePageComponents/newArrivals/newArrivals";
import { getAddToCartInLocalStorage } from "../../../utils/sessionHelper/sessionHelper";
import store from "../../../redux/store";
import { setAddToCartFromLocalStorage } from "../../../redux/features/addToCartSlice/addToCartSlice";
import MainSliderForMobile from "../../components/HomePageComponents/mainSliderForMobile/sliderForMobile";
import PopupNotification from "../../components/popupNotification/popupNotification";

const HomePage = () => {
  const AddToCartInLocalStorage = getAddToCartInLocalStorage();
  useEffect(() => {
    if (AddToCartInLocalStorage) {
      store.dispatch(setAddToCartFromLocalStorage(AddToCartInLocalStorage));
    }
  }, []);

  return (
    <div>
      <div className="z-[-1px] block  sm:hidden">
        <MainSlider />
      </div>
      <div className="z-[-1px] hidden sm:block ">
        <MainSliderForMobile />
      </div>
      <Brands />
      <BestSales />
      <TrandingAndRecomended />
      <NewArrivals />
      <PopupNotification />
    </div>
  );
};

export default HomePage;
