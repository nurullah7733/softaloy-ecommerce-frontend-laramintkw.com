import React, { useEffect, useState } from "react";
import Filter from "../../components/collectionsPageComponents/filter/filter";
import Products from "../../components/collectionsPageComponents/products/products";
import FilterDrowerForMobile from "../../components/collectionsPageComponents/filterDrowerForMobile/filterDrowerForMobile";
import { getAllProductsRequest } from "../../APIRequest/productsApi";
import Pagination from "../../components/common/pagination";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CollectionsPage = () => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const handleCartSidebarClose = () => setIsCartSidebarOpen(!isCartSidebarOpen);

  const query = useQuery();

  useEffect(() => {
    (async () => {
      await getAllProductsRequest(query.toString());
    })();
  }, [query]);

  return (
    <>
      <div className="px-8 pt-10 pb-20">
        <div className="grid lg:block grid-cols-4 gap-5">
          <div className="lg:hidden block">
            <Filter />
          </div>
          <div className="col-span-3">
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
