import React, { Fragment, useEffect, useRef, useState } from "react";
import Product from "../../components/common/product";
import { useSelector } from "react-redux";
import LoadingSearchPage from "../../components/common/loading/LoadingSearchPage";
import NoProductsFound from "../../components/common/noProductsFound";
import { getSearchProductsRequest } from "../../APIRequest/searchProductsApi";
import store from "../../../redux/store";
import {
  setLoading,
  setAllProducts,
  setTotal,
} from "../../../redux/features/searchProductsSlice/searchProductsSlice";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, total, products } = useSelector(
    (state) => state.searchProducts
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm !== "0" && searchTerm !== "") {
      await getSearchProductsRequest(
        `pageNo=1&perPage=3000&searchKeyword=${searchTerm}`
      );
    }
  };

  useEffect(() => {
    if (searchTerm === "") {
      store.dispatch(setLoading(false));
      store.dispatch(setAllProducts([]));
      store.dispatch(setTotal(0));
    }
  }, [searchTerm]);

  useEffect(() => {
    return () => {
      store.dispatch(setLoading(false));
      store.dispatch(setAllProducts([]));
      store.dispatch(setTotal(0));
    };
  }, []);

  return (
    <div className="max-w-5xl lg:w-full px-4 py-10 mx-auto">
      <div>
        <h1 className="text-2xl uppercase text-center pb-1">Search</h1>
        <p className="text-base  text-center">
          Enter a word to search our products:
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center py-5">
          <div>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Search"
              name="search"
              value={searchTerm}
              className="w-96 border border-gray-300 p-2 rounded-md  focus:ring-0 focus:border-black"
            />
          </div>
        </form>
      </div>
      {/* contact inof */}
      {loading ? (
        <LoadingSearchPage />
      ) : (
        <>
          {products?.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 grid-cols-4 gap-5">
                {products?.map((product) => (
                  <Fragment key={product?._id}>
                    <Product
                      id={product?._id}
                      img={`${product?.img?.slice(-1)[0]?.secure_url}`}
                      productName={product?.name}
                      price={product?.finalPrice}
                    />
                  </Fragment>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
