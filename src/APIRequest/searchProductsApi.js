import axios from "axios";
import store from "../../redux/store";
import {
  setTotal,
  setAllProducts,
  setLoading,
} from "../../redux/features/searchProductsSlice/searchProductsSlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getSearchProductsRequest = async (allQueryParams) => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + `/list-product-global/?${allQueryParams}`;

    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));

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
    store.dispatch(setLoading(false));
    return false;
  }
};
