import React, { Fragment, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { GrSearch } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { getSearchProductsRequest } from "../../../APIRequest/searchProductsApi";
import Product from "../../common/product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../../../redux/store";
import PriceConverterByCountry from "../../../../utils/priceConverterByCountry/priceConverterByCountry";
import NoProductFound from "../../common/noProductsFound";

import {
  setAllProducts,
  setLoading,
  setTotal,
} from "../../../../redux/features/searchProductsSlice/searchProductsSlice";

const Searchbar = ({ searchbarOpen, handleSearchbar }) => {
  const searchRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, total, products } = useSelector(
    (state) => state.searchProducts
  );

  const performSearch = async (searchTerm) => {
    if (searchTerm !== "0" && searchTerm !== "") {
      await getSearchProductsRequest(
        `pageNo=1&perPage=6&searchKeyword=${searchTerm}`
      );
    }
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // this useEffect for searchbar
  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      performSearch(value);
    }, 300); // Adjust the delay as needed

    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);

  useEffect(() => {
    if (searchbarOpen && searchRef.current) {
      searchRef.current.focus();
    }
    // for scroll position get
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchbarOpen]);

  useEffect(() => {
    return () => {
      store.dispatch(setLoading(false));
      store.dispatch(setAllProducts([]));
      store.dispatch(setTotal(0));
    };
  }, []);

  return (
    <>
      <div
        className={`fixed xxs:top-20 bg-white ${
          scrollPosition > 40 ? "top-[85px]" : "top-[125px]"
        }  px-4 inset-0 overflow-hidden z-50 `}
      >
        {/* Content above the overlay */}
        <div className={`absolute bottom-0 left-0 w-full h-[0vh] `}></div>

        <div
          className={`mx-auto ${
            scrollPosition > 40 ? "p-2" : "py-0 border-t"
          }   `}
        >
          {/* Set width to screen width */}
          <div className="bg-white w-full max-w-full  p-4  ">
            <form>
              <div className="flex items-center">
                <GrSearch size={25} />
                <input
                  type="text"
                  ref={searchRef}
                  placeholder="search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  className="w-full border-none !focus:outline-none outline-none focus:border-none focus:ring-0"
                />
                <IoMdClose
                  size={25}
                  onClick={handleSearchbar}
                  className="cursor-pointer"
                />
              </div>
            </form>
            <div className="pt-5 overflow-y-auto">
              {products?.length > 0 ? (
                <>
                  <div className="grid lg:grid-cols-2 lg:hidden grid-cols-6 gap-5">
                    {products?.map((product) => (
                      <div key={product?._id} onClick={handleSearchbar}>
                        <Product
                          id={product?._id}
                          img={`${product?.img?.slice(-1)[0]?.secure_url}`}
                          productName={product?.name}
                          price={product?.finalPrice}
                        />
                      </div>
                    ))}
                  </div>
                  {/* for mobile responsive */}
                  <div className=" lg:block hidden">
                    {products?.map((product) => (
                      <div key={product?._id} onClick={handleSearchbar}>
                        <div className="flex gap-5 pb-3 items-center cursor-pointer px-4">
                          <img
                            src={`${product?.img?.slice(-1)[0]?.secure_url}`}
                            className="w-10 h-10 rounded"
                          />
                          <div>
                            <h2 className="text-black  leading-6 text-sm">
                              {products?.name?.length > 50 ? (
                                <>{product?.name.slice(0, 50)} ...</>
                              ) : (
                                product?.name
                              )}
                            </h2>
                            <h3 className="text-black  text-[12px] ">
                              <PriceConverterByCountry
                                price={product?.finalPrice}
                              />

                              <span className="ml-5 text-[11px] line-through text-red-600">
                                {" "}
                                <PriceConverterByCountry
                                  price={product?.price}
                                />
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="pt-5 flex justify-center"
                    onClick={handleSearchbar}
                  >
                    <Link to="/search">Search More Products</Link>
                  </div>
                </>
              ) : (
                <>{<NoProductFound />}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
