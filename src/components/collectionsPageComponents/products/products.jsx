import React from "react";
import Product from "../../common/product";
import LoadingCollectionPageProducts from "./LoadingCollectionsPageProducts";

const Products = () => {
  return (
    <div className="border col-span-2 w-full border-gray-200 rounded-lg shadow bg-white dark:bg-gray-700">
      <div className="py-2 px-5">
        <div className="grid lg:grid-cols-2 grid-cols-4 gap-x-5 gap-y-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Product
              productName={"Product Name"}
              price={100}
              img={`/products/${item}.webp`}
            />
          ))}
        </div>
        <LoadingCollectionPageProducts />
      </div>
    </div>
  );
};

export default Products;
