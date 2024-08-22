import React, { Fragment, useEffect, useState } from "react";
import Product from "../common/product";
import LoadingCollectionPageProducts from "../collectionsPageComponents/products/LoadingCollectionsPageProducts";
import { useSelector } from "react-redux";
import NoProductsFound from "../common/noProductsFound";
import Pagination from "../common/pagination";
import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const Products = () => {
  const navigate = useNavigate();
  const { loading, total, products } = useSelector((state) => state.bestSales);

  const query = useQuery();
  const pageNo = parseInt(query.get("pageNo")) || 1;
  const perPage = parseInt(query.get("perPage")) || 30;

  const handlePageClick = ({ selected }) => {
    query.set("pageNo", selected + 1);
    navigate({ search: query.toString() });
  };

  return (
    <div>
      <div>
        {loading ? (
          <LoadingCollectionPageProducts />
        ) : (
          <>
            {products?.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-4 gap-x-5 gap-y-10">
                  {products?.map((product) => (
                    <Fragment key={product?._id}>
                      <Product
                        id={product?._id}
                        quantity={product?.quantity}
                        productName={product?.name}
                        finalPrice={product?.finalPrice}
                        price={product?.price}
                        img={product?.img?.slice(-1)[0]?.secure_url}
                      />
                    </Fragment>
                  ))}
                </div>
                <center className="pt-10">
                  <Pagination
                    total={total / perPage}
                    handlePageClick={handlePageClick}
                    pageNo={pageNo}
                  />
                </center>
              </>
            ) : (
              <NoProductsFound />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
