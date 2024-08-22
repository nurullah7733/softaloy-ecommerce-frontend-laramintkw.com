import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";

const Product = ({ id, productName, quantity, finalPrice, price, img }) => {
  return (
    <div className="text-center   relative">
      <Link to={`/product-details/${id}`}>
        {quantity < 1 ? (
          <div className="absolute top-0 right-0 p-2 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] w-24 h-9 flex items-center justify-center">
            <h2 className="text-black uppercase text-[12px]">SOLD OUT</h2>
          </div>
        ) : (
          finalPrice !== price && (
            <div className="absolute top-0 right-0 p-2 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] w-24 h-9 flex items-center justify-center">
              <h2 className="text-black uppercase text-[12px]">ON SALE</h2>
            </div>
          )
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
