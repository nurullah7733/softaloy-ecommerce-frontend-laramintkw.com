import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setSubSubCategories,
} from "../../redux/features/subSubCategorySlice/subSubCategorySlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getAllSubSubCategoryRequest = async () => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + "/list-sub-subcategory/1/5000/0";

    let res = await axios.get(URL, AxiosHeader);

    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data[0]?.rows?.length > 0) {
      store.dispatch(setSubSubCategories(res?.data?.data[0]?.rows));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
