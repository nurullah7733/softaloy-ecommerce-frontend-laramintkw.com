import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = ({ id, productName, price, img }) => {
  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );

  return (
    <div className="text-center">
      <Link to={`/product-details/${id}`}>
        <img src={img} className="w-full" />
        <h2 className="text-black uppercase text-[12px] mt-5 leading-6">
          {productName}
        </h2>
        <h3 className="text-black uppercase text-[11px] mt-1">
          {(Number(price) * Number(selectedCurrency?.currency)).toFixed(2)}{" "}
          {selectedCurrency?.currencyCode}
        </h3>
      </Link>
    </div>
  );
};

export default Product;
