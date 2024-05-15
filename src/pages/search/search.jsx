import React, { Fragment } from "react";
import Product from "../../components/common/product";

const arr = Array.from(Array(12).keys());

const SearchPage = () => {
  return (
    <div className="max-w-5xl lg:w-full px-4 py-10 mx-auto">
      <div>
        <h1 className="text-2xl uppercase text-center pb-1">Search</h1>
        <p className="text-base  text-center">
          Enter a word to search our products:
        </p>
        <form className="flex justify-center py-5">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-96 border border-gray-300 p-2 rounded-md  focus:ring-0 focus:border-black"
            />
          </div>
        </form>
      </div>
      {/* contact inof */}
      <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
        {arr.map((item) => (
          <Fragment key={item?._id}>
            <Product
              img={`/products/${item + 1}.webp`}
              productName={"Return And Refund Page"}
              price={12.25}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
