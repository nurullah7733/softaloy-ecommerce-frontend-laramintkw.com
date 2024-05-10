import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setProducts,
} from "../../redux/features/trendingProductsSlice/trendingProductsSlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

// get trending products
export let getTrendingProductsRequest = async () => {
  try {
    store.dispatch(setLoading(true));
    let URL =
      baseUrl +
      "/list-product-global?pageNo=1&perPage=4&searchKeyword=0&remark=trending";
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data[0]?.rows?.length > 0) {
      store.dispatch(setProducts(res?.data?.data[0]?.rows));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
