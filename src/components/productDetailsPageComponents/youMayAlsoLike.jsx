import React, { Fragment } from "react";
import Product from "../common/product";

let arr = Array.from(Array(4).keys());

const YouMayAlsoLike = () => {
  return (
    <div className="mb-20">
      <div className="border-t pt-20">
        <h1 className="text-gray-600 uppercase text-2xl font-light text-center mb-20 ">
          You may also like
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
        {arr?.map((item, index) => (
          <Fragment key={index}>
            <Product
              img={"/products/3.webp"}
              id
              productName={"highlights"}
              price={22.5}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
