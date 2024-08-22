import React, { Fragment, useEffect, useRef, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { GrSearch } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useWindowSize } from "../../../../utils/windowSize/useWindowSize";

import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import Searchbar from "./searchbar";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { setSelectedCurrency } from "../../../../redux/features/multipleCurrencySlice/multipleCurrencySlice";
import { getMultipleCurrencyRequest } from "../../../APIRequest/multipleCurrencyApi";
import CartDrowser from "../../cartDrower/cartDrower";
import { getCategoryRequest } from "../../../APIRequest/getCategoryApi";
import { getMegaMenuProductsRequest } from "../../../APIRequest/productsApi";
import PriceConverterByCountry from "../../../../utils/priceConverterByCountry/priceConverterByCountry";
import { getToken } from "../../../../utils/sessionHelper/sessionHelper";
import { logoutRequest } from "../../../APIRequest/userApi";
import { setCartSidebarOpen } from "../../../../redux/features/sidebarCartsOpen/sidebarCartsOpenSlice";
import { getUserData } from "../../../../utils/sessionHelper/sessionHelper";

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const [multipleCurrency, setMultipleCurrency] = useState(false);
  const [userOrderDropdown, setUserOrderDropdown] = useState(false);

  const [
    ignoreBlankMegaMenuWhenMegaMenuIsEmpty,
    setIgnoreBlankMegaMenuWhenMegaMenuIsEmpty,
  ] = useState(null);

  const multipleCurrencies = useSelector((state) => state.multipleCurrency);
  const categories = useSelector((state) => state.categories);
  const megaMenuProducts = useSelector(
    (state) => state.megaMenuProducts?.products
  );

  const addToCartsProducts = useSelector((state) => state.addToCarts.products);
  const isCartSidebarOpen = useSelector(
    (state) => state.sidebarCartsOpen.isCartSidebarOpen
  );

  const handleMenuHover = (index) => {
    setIsMegaMenuOpen(index !== 0 ? index : 0);
  };

  const handleSearchbar = () => {
    setSearchbarOpen(!searchbarOpen);
  };

  const handleCartSidebarClose = () => {
    store.dispatch(setCartSidebarOpen());
  };
  const token = getToken();

  const handleLogout = async () => {
    await logoutRequest();
  };

  useEffect(() => {
    (async () => {
      await getCategoryRequest();
      await getMultipleCurrencyRequest();
      await getMegaMenuProductsRequest();
    })();
  }, []);

  return (
    <div className=" z-50 bg-white !min-h-14 border-b  flex items-center justify-between  sticky  top-[-1px]   ">
      <nav className="px-8 md:px-4 w-full ">
        {/* desktop navbar */}
        <div className="flex justify-between items-center  ">
          <div className="gap-x-6 xl:hidden flex  ">
            {categories?.categories?.map((category, categoryindex) => (
              <div key={category._id}>
                <div
                  onMouseEnter={() => {
                    setIgnoreBlankMegaMenuWhenMegaMenuIsEmpty(
                      category?.subCategories[0]?.subsubCategories?.length
                    );
                    handleMenuHover(categoryindex + 1);
                  }}
                  onMouseLeave={() => handleMenuHover(0)}
                  className={`relative   cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-[-2px]  py-8 ${
                    isMegaMenuOpen === categoryindex + 1
                      ? "after:scale-x-100"
                      : ""
                  }`}
                >
                  <div onClick={() => handleMenuHover(0)}>
                    <p className="uppercase text-sm">
                      <Link
                        to={`/collections?pageNo=1&perPage=30&searchKeyword=0&category=${category?.name}`}
                      >
                        {category?.name}
                      </Link>
                    </p>
                  </div>
                </div>
                {/* mega menu 1 */}
                {category?.subCategories?.length > 0 &&
                  ignoreBlankMegaMenuWhenMegaMenuIsEmpty > 0 && (
                    <>
                      {isMegaMenuOpen === categoryindex + 1 && (
                        <div
                          onMouseEnter={() =>
                            handleMenuHover(categoryindex + 1)
                          }
                          onMouseLeave={() => handleMenuHover(0)}
                          className={`absolute top-[85px] left-0 bg-white p-4 border-b  shadow-sm w-[100%]`}
                        >
                          <div className="p-6  ">
                            <div>
                              <ul className="flex justify-between ">
                                {category?.subCategories?.map(
                                  (subcategory, index) => (
                                    <Fragment key={subcategory?._id}>
                                      <li className="font-medium text-gray-400  text-sm uppercase">
                                        <p className="pb-2">
                                          {subcategory?.name}
                                        </p>
                                        {subcategory?.subsubCategories?.map(
                                          (subsubCategory) => (
                                            <ul key={subsubCategory?._id}>
                                              <li
                                                className="font-light text-[12px] pb-1.5"
                                                onClick={() =>
                                                  handleMenuHover(0)
                                                }
                                              >
                                                <Link
                                                  to={`/collections?pageNo=1&perPage=30&searchKeyword=0&subsubcategory=${subsubCategory?.name}`}
                                                >
                                                  {subsubCategory?.name}
                                                </Link>
                                              </li>
                                            </ul>
                                          )
                                        )}
                                      </li>
                                    </Fragment>
                                  )
                                )}
                                {/* products in mega menu */}
                                <div className="flex w-1/2 gap-2">
                                  {megaMenuProducts
                                    ?.filter(
                                      (product) =>
                                        product?.remarkByCategory?.toLowerCase() ==
                                        category?.name?.toLowerCase()
                                    )
                                    ?.slice(-2)
                                    ?.map((product) => (
                                      <div
                                        key={product._id}
                                        onClick={() => handleMenuHover(0)}
                                      >
                                        <Link
                                          to={`/product-details/${product._id}`}
                                        >
                                          <center>
                                            <img
                                              src={
                                                product?.img?.slice(-1)[0]
                                                  ?.secure_url
                                              }
                                              width={300}
                                            />
                                            <h2 className="pb-1 text-sm">
                                              {product?.name}
                                            </h2>
                                            <p className="pb-1 text-[12px] text-gray-600 uppercase">
                                              <PriceConverterByCountry
                                                price={product?.finalPrice}
                                              />
                                            </p>
                                          </center>
                                        </Link>
                                      </div>
                                    ))}
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
              </div>
            ))}
          </div>
          {/*  Hamburger */}
          <div className="xl:block hidden ">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              <RxHamburgerMenu size={20} />
            </button>
          </div>
          <div className="xl:mr-0 mr-[235px] md:-mt-1 ">
            <Link to="/">
              <img
                src="/laramint-logo.jpeg"
                width={useWindowSize().width > 768 ? 180 : 100}
              />
            </Link>
          </div>
          <div className="flex gap-x-10 xxs:gap-3">
            <div>
              {token?.length > 0 && token ? (
                <div
                  className="relative"
                  onMouseEnter={() => setUserOrderDropdown(true)}
                  onMouseLeave={() => setUserOrderDropdown(false)}
                >
                  {token?.length > 0 && token ? (
                    <img
                      src={getUserData()?.photo[0]?.secure_url}
                      className="w-7 h-7 rounded-full cursor-pointer"
                    />
                  ) : (
                    <LuUser2
                      size={useWindowSize().width > 600 ? 25 : 20}
                      className="cursor-pointer text-lg"
                    />
                  )}

                  {userOrderDropdown && (
                    <div
                      onMouseEnter={() => setUserOrderDropdown(true)}
                      className="z-10 absolute h-auto -right-20 top-7 p-2 !bg-white rounded-lg shadow w-40 dark:bg-gray-700"
                    >
                      <ul className="list-none  ">
                        <li className="p-2 hover:bg-gray-100">
                          <Link to="/user-dashboard">User Dashboard</Link>
                        </li>

                        <li
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <LuUser2
                    size={useWindowSize().width > 600 ? 25 : 20}
                    className="cursor-pointer"
                  />
                </Link>
              )}
            </div>
            <div>
              <GrSearch
                size={useWindowSize().width > 600 ? 25 : 20}
                className="cursor-pointer select-none"
                onClick={handleSearchbar}
              />
            </div>
            <div
              onClick={() => store.dispatch(setCartSidebarOpen())}
              className="relative cursor-pointer pl-1"
            >
              {addToCartsProducts?.length > 0 && (
                <div className="absolute bg-black w-4 h-4 left-4 text-[10px] rounded-full flex justify-center items-center text-white">
                  {addToCartsProducts?.length}
                </div>
              )}
              <BsBag size={useWindowSize().width > 600 ? 25 : 20} />
            </div>
            {/* country dropdown */}
            <div>
              <button
                className="text-white   font-medium rounded-lg text-sm text-center inline-flex items-center  "
                type="button"
                onClick={() => setMultipleCurrency(!multipleCurrency)}
              >
                {multipleCurrencies.loading ? (
                  <img
                    src="/loading-spinner.svg"
                    className={`${
                      useWindowSize().width > 768 ? "w-6" : "w-5"
                    } h-6`}
                  />
                ) : (
                  <img
                    src={
                      multipleCurrencies?.selectedCurrency?.img?.slice(-1)[0]
                        ?.secure_url
                    }
                    className={`${
                      useWindowSize().width > 490 ? "w-8 h-6" : "w-6 h-5"
                    } `}
                  />
                )}

                <MdKeyboardArrowUp color="black" size={20} className=" " />
              </button>
              {multipleCurrency && (
                <div className="z-10 absolute h-auto right-1 !bg-white rounded-lg shadow w-40 dark:bg-gray-700">
                  <ul className="h-auto py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
                    {multipleCurrencies?.multipleCurrency?.map(
                      (item, index) => (
                        <li
                          className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 capitalize dark:hover:text-white cursor-pointer"
                          key={index}
                          onClick={() => {
                            setMultipleCurrency(false);
                            store.dispatch(setSelectedCurrency(item));
                          }}
                        >
                          <img
                            src={item?.img?.slice(-1)[0]?.secure_url}
                            className="w-6 h-6 mr-2 "
                          />
                          {item?.countryName}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Nav */}

        <div>
          <MobileMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </nav>
      {/* Searchbar input box */}
      {searchbarOpen && (
        <Searchbar
          searchbarOpen={searchbarOpen}
          handleSearchbar={handleSearchbar}
        />
      )}
      <CartDrowser
        handleCartSidebarClose={handleCartSidebarClose}
        isCartSidebarOpen={isCartSidebarOpen}
      />
    </div>
  );
};

export default Header;
