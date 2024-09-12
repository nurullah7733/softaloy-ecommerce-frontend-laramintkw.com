import React, { useEffect, useState } from "react";
import Filter from "../../components/collectionsPageComponents/filter/filter";
import Products from "../../components/collectionsPageComponents/products/products";
import FilterDrowerForMobile from "../../components/collectionsPageComponents/filterDrowerForMobile/filterDrowerForMobile";
import { getAllProductsRequest } from "../../APIRequest/productsApi";
import { useNavigate, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const OffersPage = () => {
  const navigate = useNavigate();
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const handleCartSidebarClose = () => setIsCartSidebarOpen(!isCartSidebarOpen);

  const query = useQuery();

  const handleDiscountOffers = (link) => {
    const newQuery = new URLSearchParams();
    if (query.has("pageNo")) {
      newQuery.set("pageNo", "1");
    }
    if (query.has("perPage")) {
      newQuery.set("perPage", query.get("perPage"));
    }
    if (query.has("searchKeyword")) {
      newQuery.set("searchKeyword", "0");
    }

    newQuery.set("discount", link);
    navigate({ search: newQuery.toString() });
  };

  const handleEachProductB1G1Offers = () => {
    const newQuery = new URLSearchParams();
    if (query.has("pageNo")) {
      newQuery.set("pageNo", "1");
    }
    if (query.has("perPage")) {
      newQuery.set("perPage", query.get("perPage"));
    }
    if (query.has("searchKeyword")) {
      newQuery.set("searchKeyword", "0");
    }

    newQuery.set("each_product_b1g1", true);
    navigate({ search: newQuery.toString() });
  };
  const handleEachProductB2G1Offers = () => {
    const newQuery = new URLSearchParams();
    if (query.has("pageNo")) {
      newQuery.set("pageNo", "1");
    }
    if (query.has("perPage")) {
      newQuery.set("perPage", query.get("perPage"));
    }
    if (query.has("searchKeyword")) {
      newQuery.set("searchKeyword", "0");
    }

    newQuery.set("each_product_b2g1", true);
    navigate({ search: newQuery.toString() });
  };
  const handleBrandOrCategoryB1G1Offers = () => {
    const newQuery = new URLSearchParams();
    if (query.has("pageNo")) {
      newQuery.set("pageNo", "1");
    }
    if (query.has("perPage")) {
      newQuery.set("perPage", query.get("perPage"));
    }
    if (query.has("searchKeyword")) {
      newQuery.set("searchKeyword", "0");
    }

    newQuery.set("brand_or_category_b1g1", true);
    navigate({ search: newQuery.toString() });
  };
  const handleBrandOrCategoryB2G1Offers = () => {
    const newQuery = new URLSearchParams();
    if (query.has("pageNo")) {
      newQuery.set("pageNo", "1");
    }
    if (query.has("perPage")) {
      newQuery.set("perPage", query.get("perPage"));
    }
    if (query.has("searchKeyword")) {
      newQuery.set("searchKeyword", "0");
    }

    newQuery.set("brand_or_category_b2g1", true);
    navigate({ search: newQuery.toString() });
  };

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
            <div className="pb-4 flex justify- gap-2 flex-wrap">
              <div
                onClick={() => handleDiscountOffers("70")}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md  h-24 sm:h-16 4 items-center justify-center flex  text-white bg-gradient-to-r from-red-500 to-pink-500`}
              >
                70% OFF
              </div>
              <div
                onClick={() => handleDiscountOffers("60")}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md  h-24 sm:h-16 4 items-center justify-center flex  text-white bg-gradient-to-r from-blue-500 to-indigo-500`}
              >
                60% OFF
              </div>
              <div
                onClick={() => handleDiscountOffers("50")}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-green-500 to-teal-500`}
              >
                50% OFF
              </div>
              <div
                onClick={() => handleDiscountOffers("40")}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-yellow-500 to-orange-500`}
              >
                40% OFF
              </div>
              <div
                onClick={() => handleDiscountOffers("30")}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-purple-500 to-blue-400`}
              >
                30% OFF
              </div>
              <div
                onClick={handleEachProductB1G1Offers}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-pink-500 to-red-400`}
              >
                Buy 1 Get 1 (Same Products)
              </div>
              <div
                onClick={handleEachProductB2G1Offers}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-orange-500 to-yellow-400`}
              >
                Buy 2 Get 1 (Same Products)
              </div>
              <div
                onClick={handleBrandOrCategoryB1G1Offers}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-teal-500 to-green-400`}
              >
                Buy 1 Get 1
              </div>
              <div
                onClick={handleBrandOrCategoryB2G1Offers}
                className={`cursor-pointer text-3xl sm:text-lg font-bold p-5 rounded-md h-24 sm:h-16  items-center justify-center flex  text-white bg-gradient-to-r from-indigo-500 to-purple-500`}
              >
                Buy 2 Get 1
              </div>
            </div>
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

export default OffersPage;
