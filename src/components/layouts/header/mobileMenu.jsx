import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import HeaderBottom from "./headerBottom";
import { useSelector } from "react-redux";

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const categories = useSelector((state) => state.categories);

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
      className={`flex flex-col  fixed  top-0 left-0 z-40 h-screen  border-r transition-transform bg-white w-80  ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full "
      }`}
    >
      <div className="sticky top-0 right-0 p-8 z-30 bg-white ">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-1.5 left-3 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoMdClose size={30} />
        </button>
      </div>

      {/* mobile navbar content */}
      <div className="overflow-y-auto flex-grow">
        <div className="px-8 py-8 z-10 ">
          <div>
            <ul>
              {/* category */}
              {categories?.categories?.map((category, categoryIndex) => (
                <li
                  className="py-4  border-b text-sm uppercase"
                  key={categoryIndex}
                >
                  <div
                    className="flex justify-between  "
                    onClick={() => handleMenuOpen(categoryIndex + 1)}
                  >
                    {category?.subCategoryId?.length > 0 ? (
                      <p>{category?.name}</p>
                    ) : (
                      <Link to={"#"}>{category?.name}</Link>
                    )}
                    {category?.subCategoryId?.length > 0 && (
                      <>
                        {isMenuOpen === categoryIndex + 1 ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </>
                    )}
                  </div>
                  <ul
                    className={`pl-4 `}
                    style={{
                      display: "grid",
                      gridTemplateRows:
                        isMenuOpen === categoryIndex + 1 &&
                        category?.subCategoryId?.length > 0
                          ? "1fr"
                          : "0fr",
                      transition: " all 0.3s ease-in-out",
                    }}
                  >
                    <div className="overflow-hidden">
                      {/* sub category */}
                      {category?.subCategories?.map(
                        (subCategory, subCategoryIndex) => (
                          <li key={subCategoryIndex}>
                            <div
                              className="flex justify-between py-2"
                              onClick={() =>
                                handleSubMenuOpen(subCategoryIndex + 1)
                              }
                            >
                              <p className="text-gray-400 hover:text-gray-600 text-[12px]">
                                {subCategory?.name}
                              </p>

                              {isSubMenuOpen === subCategoryIndex + 1 ? (
                                <FaMinus className="text-gray-400 capitalize" />
                              ) : (
                                <FaPlus className="text-gray-400 capitalize" />
                              )}
                            </div>
                            <ul
                              className={`pl-4 border-l`}
                              style={{
                                display: "grid",
                                gridTemplateRows:
                                  isSubMenuOpen === subCategoryIndex + 1
                                    ? "1fr"
                                    : "0fr",
                                transition: " all 0.3s ease-in-out",
                              }}
                            >
                              <div className="overflow-hidden">
                                {/* sub sub category */}
                                {subCategory?.subsubCategories?.map(
                                  (subsubCategory) => (
                                    <li
                                      onClick={() =>
                                        setMobileMenuOpen(!mobileMenuOpen)
                                      }
                                      key={subsubCategory?._id}
                                      className="py-2 text-gray-400 hover:text-gray-600 capitalize"
                                    >
                                      <Link
                                        to={`/collections?pageNo=1&perPage=30&searchKeyword=0&subsubcategory=${subsubCategory?.name}`}
                                      >
                                        {subsubCategory?.name}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </div>
                            </ul>
                          </li>
                        )
                      )}
                    </div>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <p className="uppercase text-sm mt-8 ">
            <Link to={`/offers?pageNo=1&perPage=30&searchKeyword=0`}>
              {"Offers"}
            </Link>
          </p>
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
