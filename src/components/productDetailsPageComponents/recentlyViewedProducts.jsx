import React, { Fragment, useEffect, useState } from "react";
import Product from "../common/product";
import NoProductsFound from "../common/noProductsFound";

const RecentlyViewedProducts = () => {
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

  useEffect(() => {
    setRecentlyViewedProducts(
      JSON.parse(localStorage.getItem("recentlyViewed"))
    );
  }, []);
  return (
    <div className="mb-20 px-8 mx-auto">
      <div className="border-t pt-20">
        <h1 className="text-gray-600 uppercase text-2xl font-light text-center mb-20 ">
          Recently viewed
        </h1>
      </div>
      {recentlyViewedProducts?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
            {recentlyViewedProducts?.map((product, index) => (
              <Fragment key={index}>
                <Product
                  img={product?.img?.slice(-1)[0]?.secure_url}
                  id={product?._id}
                  quantity={product?.quantity}
                  productName={product?.name}
                  finalPrice={product?.finalPrice}
                  price={product?.price}
                  offers={product?.offers}
                />
              </Fragment>
            ))}
          </div>
        </>
      ) : (
        <NoProductsFound />
      )}
    </div>
  );
};

export default RecentlyViewedProducts;
