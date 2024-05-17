import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setProducts,
} from "../../redux/features/megaMenuProductsSlice/megaMenuProductsSlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

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
