import React, { Fragment, useState } from "react";
import Drawer from "react-modern-drawer";
import { MdOutlineClose } from "react-icons/md";
import "react-modern-drawer/dist/index.css";
import { useWindowSize } from "../../../../utils/windowSize/useWindowSize";
import Filter from "../filter/filter";

const FilterDrowerForMobile = ({
  handleCartSidebarClose,
  isCartSidebarOpen,
}) => {
  return (
    <>
      <Drawer
        open={isCartSidebarOpen}
        onClose={handleCartSidebarClose}
        direction="right"
        className=""
        size={useWindowSize().width > 768 ? 400 : 300}
      >
        <div className="flex flex-col h-full">
          {/* header */}
          <div className="flex justify-between items-center p-4 border-b ">
            <h1 className="text-2xl">Filter</h1>
            <MdOutlineClose
              className="cursor-pointer"
              onClick={handleCartSidebarClose}
              size={30}
            />
          </div>
          {/* content */}
          <div className="px-3 pt-2 pb-5 overflow-x-auto  ">
            <Filter />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrowerForMobile;
