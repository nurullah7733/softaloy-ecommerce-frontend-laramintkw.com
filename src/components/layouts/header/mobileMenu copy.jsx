import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import HeaderBottom from "./headerBottom";

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuOpen = (index) => {
    if (isMenuOpen === index) {
      setIsMenuOpen(0);
    } else {
      setIsMenuOpen(index);
    }
  };
  const handleSubMenuOpen = (index) => {
    if (isSubMenuOpen === index) {
      setIsSubMenuOpen(0);
    } else {
      setIsSubMenuOpen(index);
    }
  };
  return (
    <div
      className={`flex flex-col  fixed  top-0 left-0 z-40 h-screen  transition-transform bg-white w-80  ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sticky top-0 right-0 p-8 z-30 bg-white ">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-5 left-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoMdClose size={30} />
        </button>
      </div>

      {/* mobile navbar content */}
      <div className="overflow-y-auto flex-grow">
        <div className="px-8 py-8 z-10 ">
          <div>
            <ul>
              <li className="py-4  border-b text-sm uppercase">
                <div
                  className="flex justify-between  "
                  onClick={() => handleMenuOpen(1)}
                >
                  <p>skin care</p>
                  {isMenuOpen === 1 ? <FaMinus /> : <FaPlus />}
                </div>
                <ul
                  className={`pl-4 `}
                  style={{
                    display: "grid",
                    gridTemplateRows: isMenuOpen === 1 ? "1fr" : "0fr",
                    transition: " all 0.3s ease-in-out",
                  }}
                >
                  <div className="overflow-hidden">
                    {/* brand */}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(1)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          brand
                        </p>

                        {isSubMenuOpen === 1 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 1 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>

                    {/* concern */}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(2)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          concern
                        </p>

                        {isSubMenuOpen === 2 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 2 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden ">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>
                    {/* category type */}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(3)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          category type
                        </p>

                        {isSubMenuOpen === 3 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 3 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>

                    {/* ingredient*/}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(4)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          ingredient
                        </p>

                        {isSubMenuOpen === 4 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 4 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>

              <li className="py-4  border-b text-sm uppercase">
                <div
                  className="flex justify-between  "
                  onClick={() => handleMenuOpen(2)}
                >
                  <p>hire care</p>
                  {isMenuOpen === 2 ? <FaMinus /> : <FaPlus />}
                </div>
                <ul
                  className={`pl-4 `}
                  style={{
                    display: "grid",
                    gridTemplateRows: isMenuOpen === 2 ? "1fr" : "0fr",
                    transition: " all 0.3s ease-in-out",
                  }}
                >
                  <div className="overflow-hidden">
                    {/* brand */}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(5)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          brand
                        </p>

                        {isSubMenuOpen === 5 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 5 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>

                    {/* category */}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(6)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          category
                        </p>

                        {isSubMenuOpen === 6 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 6 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden ">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>

              <li className="py-4  border-b text-sm uppercase">
                <div
                  className="flex justify-between  "
                  onClick={() => handleMenuOpen(3)}
                >
                  <p>body care</p>
                  {isMenuOpen === 3 ? <FaMinus /> : <FaPlus />}
                </div>
                <ul
                  className={`pl-4 `}
                  style={{
                    display: "grid",
                    gridTemplateRows: isMenuOpen === 3 ? "1fr" : "0fr",
                    transition: " all 0.3s ease-in-out",
                  }}
                >
                  <div className="overflow-hidden">
                    {/* category */}
                    <li>
                      <div
                        className="flex justify-between py-2"
                        onClick={() => handleSubMenuOpen(7)}
                      >
                        <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                          category
                        </p>

                        {isSubMenuOpen === 7 ? (
                          <FaMinus className="text-gray-400 capitalize" />
                        ) : (
                          <FaPlus className="text-gray-400 capitalize" />
                        )}
                      </div>
                      <ul
                        className={`pl-4 border-l`}
                        style={{
                          display: "grid",
                          gridTemplateRows: isSubMenuOpen === 7 ? "1fr" : "0fr",
                          transition: " all 0.3s ease-in-out",
                        }}
                      >
                        <div className="overflow-hidden ">
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">filorga</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">la roche posay</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">the ordinary</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">vichy</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Obagi</Link>
                          </li>
                          <li className="py-2 text-gray-400 hover:text-gray-600 capitalize">
                            <Link href="#">Zo skin health</Link>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>

              <li className="py-4  border-b text-sm uppercase">
                <Link href="#">offers</Link>
              </li>
              <li className="py-4  border-b text-sm uppercase">
                <Link href="#"> new arrivals</Link>
              </li>
              <li className="py-4   text-gray-400 text-sm uppercase">
                <Link href="#"> accounts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* header bottom only visible mobile */}
      <div>
        <HeaderBottom />
      </div>
    </div>
  );
};

export default MobileMenu;
