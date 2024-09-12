import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";

const Product = ({
  id,
  productName,
  quantity,
  finalPrice,
  price,
  offers = {},
  img,
}) => {
  const {
    isCategoryBrandB1G1 = false,
    isCategoryBrandB2G1 = false,
    isEachProductB1G1 = false,
    isEachProductB2G1 = false,
  } = offers;

  // Determine the offer label
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
    <div className="text-center   relative">
      <Link to={`/product-details/${id}`}>
        {quantity < 1 ? (
          <div className="absolute top-0 right-0 p-2 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] w-24 h-9 flex items-center justify-center">
            <h2 className="text-black uppercase text-[12px]">SOLD OUT</h2>
          </div>
        ) : (
          <>
            {finalPrice !== price && (
              <div
                className={`absolute top-0 ${
                  offerLabel && "sm:top-8"
                }  right-0     bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] w-20 h-8 sm:h-6 flex items-center justify-center`}
              >
                <h2 className="text-black uppercase text-[12px]">ON SALE</h2>
              </div>
            )}
            {offerLabel && (
              <div className="absolute top-0 sm:right-0 p-2 bg-green-500 text-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] w-32 h-6 rounded  flex items-center justify-center">
                <h2 className="uppercase text-[12px] ">{offerLabel}</h2>
              </div>
            )}
          </>
        )}

        <img src={img} className="w-full" />

        <h2 className="text-black uppercase text-[12px] mt-5 leading-6">
          {productName}
        </h2>
        <h3 className="text-black uppercase text-[11px] mt-1 ">
          <span
            className={`${finalPrice !== price && "text-red-500 text-[12px]"}`}
          >
            <PriceConverterByCountry price={finalPrice} />
          </span>

          <span className={`${finalPrice !== price && "line-through ml-5"}`}>
            {finalPrice !== price && <PriceConverterByCountry price={price} />}
          </span>
        </h3>
      </Link>
    </div>
  );
};

export default Product;
