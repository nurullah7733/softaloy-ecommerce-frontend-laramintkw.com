import React, { Fragment, useEffect } from "react";
import Product from "../../common/product";
import Button from "../../common/button";
import { getTrendingProductsRequest } from "../../../APIRequest/trendingProductsApi";
import { useSelector } from "react-redux";
import LoadingHomePageProducts from "../../common/loading/LoadingHomePageProducts";
import NoProductsFound from "../../common/noProductsFound/";

const TrandingAndRecomended = () => {
  const trandingProducts = useSelector((state) => state.trendingProducts);

  useEffect(() => {
    (async () => {
      await getTrendingProductsRequest();
    })();
  }, []);

  return (
    <div className="py-20 border-b px-8">
      <h1 className="uppercase text-2xl font-light text-center mb-20">
        Tranding And Recomended
      </h1>
      {trandingProducts.loading ? (
        <LoadingHomePageProducts />
      ) : (
        <>
          {trandingProducts?.products?.length > 0 ? (
            <>
              <div>
                <div className="grid   lg:grid-cols-2 grid-cols-4 gap-5">
                  {trandingProducts?.products?.map((item) => (
                    <Fragment key={item?._id}>
                      <Product
                        img={item?.img?.slice(-1)[0]?.secure_url}
                        id={item?._id}
                        quantity={item?.quantity}
                        productName={item?.name}
                        finalPrice={item?.finalPrice}
                        price={item?.price}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-20">
                <Button
                  link="/collections?pageNo=1&perPage=30&searchKeyword=0&remark=trending"
                  text="view all products"
                />
              </div>
            </>
          ) : (
            <NoProductsFound />
          )}
        </>
      )}
    </div>
  );
};

export default TrandingAndRecomended;
