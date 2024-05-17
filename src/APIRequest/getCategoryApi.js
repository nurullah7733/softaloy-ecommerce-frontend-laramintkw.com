import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setCategory,
} from "../../redux/features/getCategorySlice/getCategorySlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getCategoryRequest = async () => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + "/dropdown-category/1/10000/0";
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data?.rows?.length > 0) {
      store.dispatch(setCategory(res?.data?.data?.rows));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
