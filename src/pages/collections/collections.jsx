import React, { useState } from "react";
import Filter from "../../components/collectionsPageComponents/filter/filter";
import Products from "../../components/collectionsPageComponents/products/products";
import FilterDrowerForMobile from "../../components/collectionsPageComponents/filterDrowerForMobile/filterDrowerForMobile";

const CollectionsPage = () => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const handleCartSidebarClose = () => setIsCartSidebarOpen(!isCartSidebarOpen);
  return (
    <>
      <div className="px-8 py-10">
        <div className="flex gap-5">
          <div className="lg:hidden block">
            <Filter />
          </div>
          <div>
            <Products />
          </div>
        </div>
        {/* filter button for mobile version */}
      </div>
      <div className="lg:flex justify-center hidden fixed bottom-0  bg-white w-[80px]  ml-[0px] border-gray-300  border-2 py-2 z-[999]">
        <button onClick={handleCartSidebarClose}>Filter</button>
        <FilterDrowerForMobile
          handleCartSidebarClose={handleCartSidebarClose}
          isCartSidebarOpen={isCartSidebarOpen}
        />
      </div>
    </>
  );
};

export default CollectionsPage;
