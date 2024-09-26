import React, { Fragment, useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import ButtonProductsIncreaseAndDecrease from "../../components/common/buttonPrdouctsIncreaseAndDecrease";
import { useSelector } from "react-redux";
import NoProductsFound from "../common/noProductsFound";
import parse from "html-react-parser";
import { getRelatedProductsRequest } from "../../APIRequest/productsApi";
import LoadingPrductDetailsPage from "../common/loading/LoadingProductDetailsPage";
import store from "../../../redux/store";
import { setAddToCart } from "../../../redux/features/addToCartSlice/addToCartSlice";
import { AddTocartButton, AddedTocartButton } from "../common/cartButton";
import { setCartSidebarOpen } from "../../../redux/features/sidebarCartsOpen/sidebarCartsOpenSlice";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";
import addProductToRecentlyViewed from "../../../utils/recentlyViewProduct/recentlyViewProduct";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [selectionDescriptionTab, setSelectionDescriptionTab] =
    useState("Description");

  const { loading, productDetails } = useSelector(
    (state) => state.productDetails
  );
  const { products } = useSelector((state) => state.addToCarts);

  const handleAddToCart = () => {
    const product = { ...productDetails[0], customerChoiceProductQuantity: 1 };
    store.dispatch(setAddToCart(product));
  };

  // conditionally rendering add to cart button or added to cart  and product order quantity
  let exitsProducts = products?.find(
    (prod) => prod?._id === productDetails[0]?._id
  );

  useEffect(() => {
    (async () => {
      await getRelatedProductsRequest(productDetails[0]?.subCategory[0]?.name);
    })();
  }, [productDetails[0]?.subCategory[0]?.name]);

  useEffect(() => {
    if (productDetails?.length > 0) {
      addProductToRecentlyViewed(productDetails[0]);
    }
  }, [productDetails]);

  const {
    isCategoryBrandB1G1 = false,
    isCategoryBrandB2G1 = false,
    isEachProductB1G1 = false,
    isEachProductB2G1 = false,
  } = productDetails[0]?.offers || {};

  let offerLabel = null;
  if (isEachProductB1G1) {
    offerLabel = "BUY 1 GET 1 (ADD 2)";
  } else if (isEachProductB2G1) {
    offerLabel = "BUY 2 GET 1 (ADD 3)";
  } else if (isCategoryBrandB1G1) {
    offerLabel = "BUY 1 GET 1";
  } else if (isCategoryBrandB2G1) {
    offerLabel = "BUY 2 GET 1";
  }

  return (
    <div className="px-8 mx-auto py-10 ">
      {loading ? (
        <LoadingPrductDetailsPage />
      ) : (
        <>
          {productDetails?.length > 0 ? (
            <div className="lg:block grid grid-cols-3 lg:w-full xl:max-w-5xl max-w-7xl gap-5">
              <div className="col-span-2">
                <div className="relative ">
                  {offerLabel && (
                    <div className="absolute top-0 left-0 p-2 bg-green-500 text-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] w-32 h-6 rounded  flex items-center justify-center">
                      <h2 className="uppercase text-[12px] ">{offerLabel}</h2>
                    </div>
                  )}

                  <img
                    alt={productDetails[0]?.name}
                    src={productDetails[0]?.img?.slice(-1)[0]?.secure_url}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="col-span-1 mx-auto w-full lg:mt-5">
                <div className="border-b mb-6 md:text-center">
                  <h3 className="text-gray-600 uppercase">
                    {productDetails[0]?.name?.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <h1 className="py-5 text-xl font-semibold text-gray-600 uppercase">
                    {productDetails[0]?.name}
                  </h1>
                  <div className={`flex gap-3 mb-6 items-center`}>
                    <h4
                      className={`uppercase  ${
                        productDetails[0]?.finalPrice !==
                          productDetails[0]?.price && "text-red-600"
                      }`}
                    >
                      <PriceConverterByCountry
                        price={productDetails[0]?.finalPrice}
                      />
                    </h4>
                    {productDetails[0]?.finalPrice !==
                      productDetails[0]?.price && (
                      <h3 className="text-gray-600 uppercase text-sm line-through">
                        <PriceConverterByCountry
                          price={productDetails[0]?.price}
                        />
                      </h3>
                    )}
                  </div>
                </div>
                {/* offer label  */}
                {offerLabel && (
                  <div className="border rounded-md p-4 mb-5">
                    <h2 className="uppercase  pb-3">
                      {productDetails?.[0]?.category?.[0]?.name}{" "}
                      {offerLabel == "BUY 1 GET 1" ? "B1G1" : "B2G1"}
                    </h2>
                    <div className="border border-red-500 p-1 bg-red-100 ">
                      <p className=" inline ">
                        This offer is valid for collection of{" "}
                      </p>
                      <Link
                        className="underline uppercase inline"
                        to={`/offers?pageNo=1&perPage=30&searchKeyword=0&${
                          offerLabel == "BUY 1 GET 1 (ADD 2)"
                            ? "each_product_b1g1=true"
                            : offerLabel == "BUY 2 GET 1 (ADD 3)"
                            ? "each_product_b2g1=true"
                            : offerLabel == "BUY 1 GET 1"
                            ? "brand_or_category_b1g1=true"
                            : offerLabel == "BUY 2 GET 1"
                            ? "brand_or_category_b2g1=true"
                            : "offers"
                        }`}
                      >
                        {productDetails?.[0]?.category?.[0]?.name}{" "}
                        {offerLabel == "BUY 1 GET 1" ? "B1G1" : "B2G1"} label
                      </Link>
                    </div>
                  </div>
                )}
                {console.log(productDetails, "prd")}
                {/* Tab Description */}
                <div className="xl:max-w-5xl max-w-7xl mx-auto">
                  <div>
                    {/* Buttons */}
                    <div className="flex justify-between gap-2">
                      <button
                        disabled={productDetails[0]?.description?.length < 1}
                        onClick={() =>
                          setSelectionDescriptionTab("Description")
                        }
                        className={`border uppercase disabled:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed text-sm border-b-0 w-full sm:p-1 p-2 text-gray-600 ${
                          selectionDescriptionTab === "Description"
                            ? "bg-gray-300"
                            : ""
                        }`}
                      >
                        Description
                      </button>
                      <button
                        disabled={productDetails[0]?.features?.length < 1}
                        onClick={() => setSelectionDescriptionTab("Features")}
                        className={`border disabled:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed uppercase text-sm border-b-0 w-full sm:p-1 p-2 text-gray-600 ${
                          selectionDescriptionTab === "Features"
                            ? "bg-gray-300"
                            : ""
                        }`}
                      >
                        Features
                      </button>
                      <button
                        disabled={productDetails[0]?.ingredients?.length < 1}
                        onClick={() =>
                          setSelectionDescriptionTab("Ingredients")
                        }
                        className={`border disabled:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed uppercase text-sm border-b-0 w-full sm:p-1 p-2 text-gray-600 ${
                          selectionDescriptionTab === "Ingredients"
                            ? "bg-gray-300"
                            : ""
                        }`}
                      >
                        Ingredients
                      </button>
                    </div>
                  </div>
                  <div className="border">
                    {/* Description */}
                    <div className="p-5 text-gray-600 break-words">
                      {selectionDescriptionTab === "Description" &&
                        productDetails[0]?.description?.length > 0 && (
                          <>{parse(productDetails[0].description)}</>
                        )}
                      {selectionDescriptionTab === "Features" &&
                        productDetails[0]?.features?.length > 0 && (
                          <>{parse(productDetails[0].features)}</>
                        )}
                      {selectionDescriptionTab === "Ingredients" &&
                        productDetails[0]?.ingredients?.length > 0 && (
                          <div className="ingredients-container max-w-lg mx-auto">
                            {parse(productDetails[0].ingredients)}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                {/* Share Buttons */}
                <div className="flex items-center text-gray-500 uppercase gap-3 my-5">
                  <p className="text-[12px]">share</p>
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                  >
                    <FaFacebookF className="text-[12px]" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://x.com/intent/post?text=${productDetails[0]?.name}&url=${window.location.href}`}
                  >
                    <FaTwitter className="text-[12px]" />
                  </a>
                  <a
                    target="_blank"
                    href={`https://www.pinterest.com/pin/create/button/?url=${
                      window.location.href
                    }&media=${
                      productDetails[0]?.img?.slice(-1)[0]?.secure_url
                    }&description=${productDetails[0]?.name}`}
                  >
                    <FaPinterest className="text-[12px]" />
                  </a>
                </div>
                {/* Add to Cart Buttons */}
                <div>
                  <div className="py-5">
                    <ButtonProductsIncreaseAndDecrease
                      productId={productDetails[0]?._id}
                      maxQuantity={productDetails[0]?.quantity}
                      // customerChoiceProductQuantity={
                      //   exitsProducts === undefined
                      //     ? 1
                      //     : exitsProducts?.customerChoiceProductQuantity
                      // }
                      width="140px"
                      height="45px"
                    />
                  </div>
                  <div>
                    {productDetails[0]?.quantity > 0 ? (
                      <>
                        {exitsProducts === undefined ? (
                          <div
                            onClick={() => {
                              handleAddToCart();
                              setTimeout(() => {
                                store.dispatch(setCartSidebarOpen());
                              }, 500);
                            }}
                          >
                            <AddTocartButton text="Add to cart" />
                          </div>
                        ) : (
                          <AddedTocartButton text="Added to cart" />
                        )}
                      </>
                    ) : (
                      <AddTocartButton text="Out of stock" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NoProductsFound />
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
