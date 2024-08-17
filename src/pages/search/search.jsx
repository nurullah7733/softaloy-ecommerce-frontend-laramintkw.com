import React, { Fragment, useEffect, useRef, useState } from "react";
import Product from "../../components/common/product";
import { useSelector } from "react-redux";
import LoadingSearchPage from "../../components/common/loading/LoadingSearchPage";
import NoProductsFound from "../../components/common/noProductsFound";
import { getSearchProductsRequest } from "../../APIRequest/searchProductsApi";
import store from "../../../redux/store";
import debounce from "lodash.debounce";
import {
  setLoading,
  setAllProducts,
  setTotal,
} from "../../../redux/features/searchProductsSlice/searchProductsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../components/common/pagination";

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, total, products } = useSelector(
    (state) => state.searchProducts
  );
  const query = useQuery();
  const navigate = useNavigate();

  // its for pagination
  const perPage = parseInt(query.get("perPage")) || 30;
  const pageNo = parseInt(query.get("pageNo")) || 1;

  const handlePageClick = async ({ selected }) => {
    query.set("pageNo", selected + 1);
    navigate({ search: query.toString() });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = async () => {
    if (searchTerm !== "0" && searchTerm !== "") {
      query.set("pageNo", pageNo);
      query.set("perPage", perPage);
      query.set("searchKeyword", searchTerm);
      navigate({ search: query.toString() });
      await getSearchProductsRequest(
        `pageNo=${pageNo}&perPage=${perPage}&searchKeyword=${searchTerm}`
      );
    }
  };

  // this use effect for searchbar
  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      performSearch(value);
    }, 300); // Adjust the delay as needed

    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);

  // when search term is empty it
  useEffect(() => {
    if (searchTerm === "") {
      store.dispatch(setLoading(false));
      store.dispatch(setAllProducts([]));
      store.dispatch(setTotal(0));
      query.delete("searchKeyword");
      query.delete("pageNo");
      query.delete("perPage");
      navigate({ search: query.toString() });
    }
  }, [searchTerm]);

  // when search is done
  useEffect(() => {
    return () => {
      store.dispatch(setLoading(false));
      store.dispatch(setAllProducts([]));
      store.dispatch(setTotal(0));
    };
  }, []);

  // when page cahnge to load new products
  useEffect(() => {
    (async () => {
      if (searchTerm === "") return;
      await getSearchProductsRequest(
        `pageNo=${pageNo}&perPage=${perPage}&searchKeyword=${searchTerm}`
      );
    })();
  }, [pageNo]);

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
              <Pagination
                total={total / perPage}
                handlePageClick={handlePageClick}
                pageNo={pageNo}
              />
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
