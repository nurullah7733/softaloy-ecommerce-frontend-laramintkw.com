import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setProducts,
} from "../../redux/features/megaMenuProductsSlice/megaMenuProductsSlice";
import {
  setLoading as setProductDetailsLoading,
  setProductDetails,
} from "../../redux/features/productDetailsSlice/productDetailsSlice";
import {
  setLoading as setRelatedProductsLoading,
  setRelatedProducts,
} from "../../redux/features/relatedProductsSlice/relatedProductsSlice";
import {
  setLoading as setAllProductsLoading,
  setAllProducts,
  setTotal,
} from "../../redux/features/allProductsSlice/allProductsSlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

// get all products
export let getAllProductsRequest = async (allQueryParams) => {
  try {
    store.dispatch(setAllProductsLoading(true));
    let URL = baseUrl + `/list-product-global/?${allQueryParams}`;

    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setAllProductsLoading(false));

    if (
      res.data.status === "success" &&
      res?.data?.data[0]?.total?.length > 0
    ) {
      store.dispatch(setTotal(res?.data?.data[0]?.total[0]?.count));
      store.dispatch(setAllProducts(res?.data?.data[0]?.rows));
      return true;
    } else {
      store.dispatch(setTotal(0));
      store.dispatch(setAllProducts([]));
      return false;
    }
  } catch (e) {
    store.dispatch(setAllProductsLoading(false));
    return false;
  }
};
// get product details
export let getProductDetailsRequest = async (id) => {
  try {
    store.dispatch(setProductDetailsLoading(true));
    let URL = baseUrl + `/product-details/${id}`;

    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setProductDetailsLoading(false));

    if (res.data.status === "success" && res?.data?.data?.length > 0) {
      store.dispatch(setProductDetails(res?.data?.data));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setProductDetailsLoading(false));
    return false;
  }
};

// get related products
export let getRelatedProductsRequest = async (subcategory) => {
  try {
    store.dispatch(setRelatedProductsLoading(true));
    let URL = baseUrl + `/related-products/1/8/0?subCategory=${subcategory}`;
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setRelatedProductsLoading(false));

    if (
      res.data.status === "success" &&
      res?.data?.data[0]?.total?.length > 0
    ) {
      store.dispatch(setRelatedProducts(res?.data?.data[0]?.rows));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setRelatedProductsLoading(false));
    return false;
  }
};

// get mega menu products
export let getMegaMenuProductsRequest = async () => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + "/list-mega-menu-products";
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data?.length > 0) {
      store.dispatch(setProducts(res?.data?.data));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
