import React, { Fragment } from "react";
import Product from "../common/product";
import { useSelector } from "react-redux";
import NoProductsFound from "../common/noProductsFound";

const YouMayAlsoLike = ({ relatedProductsFilterWithoutMainProductById }) => {
  const { loading, products } = useSelector((state) => state.relatedProducts);
  const filterRelatedProducts = products?.filter(
    (product) => product?._id !== relatedProductsFilterWithoutMainProductById
  );
  return (
    <div className="mb-20 px-8 mx-auto">
      <div className="border-t pt-20">
        <h1 className="text-gray-600 uppercase text-2xl font-light text-center mb-20 ">
          You may also like
        </h1>
      </div>
      {filterRelatedProducts?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
            {filterRelatedProducts?.map((product, index) => (
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

export default YouMayAlsoLike;
