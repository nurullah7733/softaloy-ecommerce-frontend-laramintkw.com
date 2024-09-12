import React, { Fragment, useEffect } from "react";
import Product from "../../common/product";
import Button from "../../common/button";
import { getBestSalesRequest } from "../../../APIRequest/bestSalesApi";
import LoadingHomePageProducts from "../../common/loading/LoadingHomePageProducts";
import { useSelector } from "react-redux";
import NoProductsFound from "../../common/noProductsFound/";

const BestSales = () => {
  const bestSales = useSelector((state) => state.bestSales);

  useEffect(() => {
    (async () => {
      await getBestSalesRequest("pageNo=1&perPage=4&searchKeyword=0");
    })();
  }, []);

  return (
    <div className="py-20 border-b px-8">
      <h1 className="uppercase text-2xl font-light text-center mb-20">
        Best Sales
      </h1>
      {bestSales.loading ? (
        <LoadingHomePageProducts />
      ) : (
        <>
          {bestSales?.products?.length > 0 ? (
            <>
              <div>
                <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
                  {bestSales?.products?.map((item) => (
                    <Fragment key={item?._id}>
                      <Product
                        img={item?.img?.slice(-1)[0]?.secure_url}
                        id={item?._id}
                        quantity={item?.quantity}
                        productName={item?.name}
                        finalPrice={item?.finalPrice}
                        price={item?.price}
                        offers={item?.offers}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-20">
                <Button
                  link="best-sales-products?pageNo=1&perPage=30&searchKeyword=0"
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

export default BestSales;
