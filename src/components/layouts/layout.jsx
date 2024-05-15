import React from "react";
import AnnouncementBar from "./header/AnnouncementBar";
import Header from "./header/header";
import GoogleTranslate from "../../../utils/googleTranslate/googleTranslate";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <GoogleTranslate />
      <Footer />
    </div>
  );
};

export default Layout;
