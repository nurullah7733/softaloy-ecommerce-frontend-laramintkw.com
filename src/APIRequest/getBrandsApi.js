import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setBrnads,
} from "../../redux/features/getBrands/getBrands";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

// get New products
export let getBrandsRequest = async () => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + "/list-brand/1/100/0";
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data[0]?.rows?.length > 0) {
      store.dispatch(setBrnads(res?.data?.data[0]?.rows));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
