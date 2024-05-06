import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, productName, price, img }) => {
  return (
    <div className="text-center">
      <Link href="#">
        <img src={img} className="w-full" />
        <h2 className="text-black uppercase text-[12px] mt-5 leading-6">
          <Link href="#">{productName}</Link>
        </h2>
        <h3 className="text-black uppercase text-[11px] mt-1">{price}</h3>
      </Link>
    </div>
  );
};

export default Product;
