import React, { Fragment, useEffect } from "react";
import Product from "../common/product";
import LoadingBestSalesPageProducts from "./loadingBestSalesProducts";
import { useSelector } from "react-redux";
import NoProductsFound from "../common/noProductsFound";
import { getBestSalesRequest } from "../../APIRequest/bestSalesApi";
import Pagination from "../common/pagination";

const Products = () => {
  const { loading, total, products } = useSelector((state) => state.bestSales);

  const handlePageClick = async (pageNo) => {
    await getBestSalesRequest(pageNo.selected + 1, "30", "0");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      await getBestSalesRequest("1", "30", "0");
    })();
  }, []);
  return (
    <div>
      <div>
        <center className="pb-5">
          <h2 className="uppercase text-2xl font-light">Best Sales </h2>
        </center>
      </div>
      <div>
        {loading ? (
          <LoadingBestSalesPageProducts />
        ) : products?.length > 0 ? (
          <div className="grid lg:grid-cols-2 grid-cols-4 gap-x-5 gap-y-20">
            {products?.map((product) => (
              <Fragment key={product?._id}>
                <Product
                  id={product?._id}
                  productName={product?.name}
                  price={product?.finalPrice}
                  img={product?.img?.slice(-1)[0]?.secure_url}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <NoProductsFound />
        )}
      </div>
      <div className="pt-10">
        <Pagination total={total / 30} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default Products;
