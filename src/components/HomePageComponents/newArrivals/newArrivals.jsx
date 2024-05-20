import React, { Fragment, useEffect } from "react";
import Product from "../../common/product";
import Button from "../../common/button";
import { getNewProductsRequest } from "../../../APIRequest/newProductsApi";
import { useSelector } from "react-redux";
import LoadingHomePageProducts from "../../common/loading/LoadingHomePageProducts";
import NoProductsFound from "../../common/noProductsFound";

const arr = [5, 6, 7, 8];

const NewArrivals = () => {
  const newProducts = useSelector((state) => state.newProducts);

  useEffect(() => {
    (async () => {
      await getNewProductsRequest();
    })();
  }, []);

  return (
    <div className="py-20   px-8">
      <h1 className="uppercase text-2xl font-light text-center mb-20">
        New Arrivals
      </h1>

      {newProducts.loading ? (
        <LoadingHomePageProducts />
      ) : (
        <>
          {newProducts?.products?.length > 0 ? (
            <>
              <div>
                <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
                  {newProducts?.products?.map((item) => (
                    <Fragment key={item?._id}>
                      <Product
                        img={item?.img[0]?.secure_url}
                        id={item?._id}
                        productName={item?.name}
                        price={item?.finalPrice}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-20">
                <Button
                  link="/collections?pageNo=1&perPage=30&searchKeyword=0&remark=new"
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

export default NewArrivals;
