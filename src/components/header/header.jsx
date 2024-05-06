import React, { useEffect, useRef, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { GrSearch } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import Searchbar from "./searchbar";

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const handleMenuHover = (index) => {
    setIsMegaMenuOpen(index !== 0 ? index : 0);
  };

  const handleSearchbar = () => {
    setSearchbarOpen(!searchbarOpen);
  };

  return (
    <div className=" z-50 bg-white min-h-12 border-b  flex items-center justify-between  sticky  top-[-1px]   ">
      {/* <Searchbar isOpen={searchbarOpen} onClose={false} /> */}

      <nav className="px-8 w-full">
        {/* desktop navbar */}
        <div className="flex justify-between items-center ">
          <div className="gap-x-6 xl:hidden flex  ">
            <div
              onMouseEnter={() => handleMenuHover(1)}
              onMouseLeave={() => handleMenuHover(0)}
              className={`relative   cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-[-2px] py-8 ${
                isMegaMenuOpen === 1 ? "after:scale-x-100" : ""
              }`}
            >
              <div className=" ">
                <p className="uppercase text-sm">skin care</p>
              </div>
            </div>
            {/* mega menu 1 */}
            {isMegaMenuOpen === 1 && (
              <div
                onMouseEnter={() => handleMenuHover(1)}
                onMouseLeave={() => handleMenuHover(0)}
                className=" !z-[9999999] absolute top-[86px] left-0 bg-white p-4 border-b  shadow-sm w-[100vw]  "
              >
                <div className="p-6 flex justify-between   ">
                  <div className="w-1/4 mr-10">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        Brands
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Filorga
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            La Roche Posay
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            The Ordinary
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Vichy
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Obagi
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px]">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            ZO Skin Health
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px]">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Esthederm
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="w-1/4 mr-10">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        concern
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Fine Lines & Wrinkles
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Anti-Aging
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Dry Skin
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Acne
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Firmness
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px]">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Dark Circles
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px]">
                          <Link href="#" className="font-light text-sm">
                            Lightening
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="w-1/4 mr-10">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        category type
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Sunscreen
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Cleanser
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Toner
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Moisturizer
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Eye Cream
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px]">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Night Cream
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="w-1/4 mr-0">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        ingredients
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Glycolic Acid
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Niacinamide
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Retinol
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            {" "}
                            Vitamin C
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-60 h-auto text-center">
                      <Link
                        href="#"
                        className="flex  justify-center flex-col items-center"
                      >
                        <img
                          src="/1.webp"
                          alt="header feature products"
                          width={250}
                          className="w-full h-full object-cover transition-transform duration-[5s] ease-in-out transform hover:scale-110"
                        />
                        <p className="text-sm pt-3">
                          Bioderma Atoderm Intensive Baume 500ml
                        </p>
                        <span className="text-[12px] pt-2 ">15.000 KWD</span>
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-60 h-auto text-center">
                      <Link
                        href="#"
                        className="flex justify-center text-center flex-col items-center"
                      >
                        {" "}
                        <img
                          src="/2.webp"
                          alt="header feature products"
                          width={250}
                          className="w-full h-full object-cover transition-transform duration-[5s] ease-in-out transform hover:scale-110"
                        />
                        <p className="text-sm pt-3">
                          SOSKIN SUN CREAM VERY HIGH PROTECTION TINTED SPF50+
                        </p>
                        <span className="text-[12px] pt-2 ">9.900 KWD</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              onMouseEnter={() => handleMenuHover(2)}
              onMouseLeave={() => handleMenuHover(0)}
              className={`relative  cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-[-2px] py-8 ${
                isMegaMenuOpen === 2 ? "after:scale-x-100" : ""
              }`}
            >
              <p className="uppercase text-sm">hair care</p>
            </div>
            {/* mega menu 2 */}
            {isMegaMenuOpen === 2 && (
              <div
                onMouseEnter={() => handleMenuHover(2)}
                onMouseLeave={() => handleMenuHover(0)}
                className=" z-10 absolute top-[86px] left-0 bg-white p-4 border-b shadow-sm w-[100vw]"
              >
                <div className="p-6 flex justify-between  ">
                  <div className="w-1/4 mr-10">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        Brands
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Brelil
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Ecrinal
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Phyto
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Rausch
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Tara
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="w-1/4 mr-10">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        category
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Hair Loss
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Hair Mask
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Hair Oil
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Hair Repair
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link className="font-light text-sm" href="#">
                            Hair Styling
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>

                  <div className="w-1/2">
                    <div className="relative w-60   text-center h-auto">
                      <a
                        href="#"
                        className="flex justify-center text-center flex-col items-center"
                      >
                        <img
                          src="/3.webp"
                          alt="header feature products"
                          width={250}
                          className="w-full h-full object-cover transition-transform duration-[5s] ease-in-out transform hover:scale-110"
                        />
                        <p className="text-sm pt-3">
                          TRICOVEL ANTI DANDRUFF HAIR SHAMPOO 200ML
                        </p>
                        <span className="text-[12px] pt-2 ">11.550 KWD</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              onMouseEnter={() => handleMenuHover(3)}
              onMouseLeave={() => handleMenuHover(0)}
              className={`relative  cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-[-2px] py-8 ${
                isMegaMenuOpen === 3 ? "after:scale-x-100" : ""
              }`}
            >
              <p className="uppercase text-sm">body care</p>
            </div>
            {/* mega menu 3 */}
            {isMegaMenuOpen === 3 && (
              <div
                onMouseEnter={() => handleMenuHover(3)}
                onMouseLeave={() => handleMenuHover(0)}
                className=" z-10 absolute top-[86px] left-0 bg-white p-4 border-b shadow-sm w-[100vw]"
              >
                <div className="p-6 flex justify-center">
                  <div className="w-1/4 mr-10">
                    <ul>
                      <li className="font-medium text-gray-400 pb-1 text-sm uppercase">
                        category
                      </li>
                      <ul className="pl-4">
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Bath & Shower
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Body Scrubs & Exfoliators
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Lotions & Oils
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Hands & Feet
                          </Link>
                        </li>
                        <li className="font-semibold text-[#595959] text-[12px] leading-5">
                          <Link href="#" className="font-light text-sm">
                            Supplements and Wellness
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>

                  <div className="w-1/2">
                    <div className="relative w-72   text-center h-auto">
                      <a
                        href="#"
                        className="flex justify-center text-center flex-col items-center"
                      >
                        <img
                          src="/4.webp"
                          alt="header feature products"
                          width={300}
                          className="w-full h-full object-cover transition-transform duration-[5s] ease-in-out transform hover:scale-110"
                        />
                        <p className="text-sm pt-3">
                          TRICOVEL ANTI DANDRUFF HAIR SHAMPOO 200ML
                        </p>
                        <span className="text-[12px] pt-2 ">11.550 KWD</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="relative  cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-[-2px] py-8 ">
              <p className="uppercase text-sm">
                <Link href="#">offers</Link>
              </p>
            </div>
            <div className="relative  cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-[-2px] py-8 ">
              <p className="uppercase text-sm">
                <Link href="#">new arrivals</Link>
              </p>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <div className="xl:block hidden ">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              <RxHamburgerMenu size={30} />
            </button>
          </div>
          <div>
            <Link href="/">
              {" "}
              <img src="/lara-mint-logo.jpg" width={200} />
            </Link>
          </div>
          <div className="flex gap-x-5">
            <div>
              <LuUser2 size={25} className="cursor-pointer" />
            </div>
            <div>
              <GrSearch
                size={25}
                className="cursor-pointer select-none"
                onClick={handleSearchbar}
              />
            </div>
            <div>
              <BsBag size={25} className="cursor-pointer" />
            </div>
            {/* country dropdown */}
            <div>
              <button
                id="dropdownUsersButton"
                data-dropdown-toggle="dropdownUsers"
                data-dropdown-placement="bottom"
                className="text-white  font-medium rounded-lg text-sm text-center inline-flex items-center  "
                type="button"
              >
                <img src="/in.png" className="w-6 h-6 " />
                <MdKeyboardArrowUp color="black" size={20} className="ml-1.5" />
              </button>

              <div
                id="dropdownUsers"
                className="z-10 hidden bg-white rounded-lg shadow w-40 dark:bg-gray-700"
              >
                <ul
                  className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUsersButton"
                >
                  <li>
                    <Link
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img src="/in.png" className="w-6 h-6 mr-2" />
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img src="/us.png" className="w-6 h-6 mr-2" />
                      Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img src="/us.png" className="w-6 h-6 mr-2" />
                      Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img src="/us.png" className="w-6 h-6 mr-2" />
                      Us
                    </Link>
                  </li>
                </ul>
              </div>
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
    </div>
  );
};

export default Header;
