import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setTotal,
  setProducts,
} from "../../redux/features/bestSalesSlice/bestSalesSlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getBestSalesRequest = async (allQueryParams) => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + `/best-sales?${allQueryParams}`;
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data[0]?.rows?.length > 0) {
      store.dispatch(setTotal(res?.data?.data[0]?.total[0]?.count));
      store.dispatch(setProducts(res?.data?.data[0]?.rows));
      return true;
    } else {
      store.dispatch(setTotal(0));
      store.dispatch(setProducts([]));
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
