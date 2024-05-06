import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import AnnouncementBar from "./components/header/AnnouncementBar";
import { BrowserRouter } from "react-router-dom";
import MainSlider from "./components/HomePageComponents/mainSlider/slider";
import Brands from "./components/HomePageComponents/brands/brands";

import BestSales from "./components/HomePageComponents/bestSales/bestSales";
import TrandingAndRecomended from "./components/HomePageComponents/trandingAndRecomended/trandingAndRecomended";
import NewArrivals from "./components/HomePageComponents/newArrivals/newArrivals";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AnnouncementBar />
        <Header />
        <div className="z-[-1px] ">
          <MainSlider />
        </div>
        <Brands />
        <BestSales />
        <TrandingAndRecomended />
        <NewArrivals />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
