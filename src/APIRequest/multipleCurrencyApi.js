import axios from "axios";
import store from "../../redux/store";
import {
  setLoading,
  setMultipleCurrency,
  setSelectedCurrency,
} from "../../redux/features/multipleCurrencySlice/multipleCurrencySlice";

let baseUrl = import.meta.env.VITE_API_URL;
let AxiosHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

export let getMultipleCurrencyRequest = async () => {
  try {
    store.dispatch(setLoading(true));
    let URL = baseUrl + "/list-multiple-currency/1/100/0";
    let res = await axios.get(URL, AxiosHeader);
    store.dispatch(setLoading(false));
    if (res.data.status === "success" && res?.data?.data[0]?.rows?.length > 0) {
      store.dispatch(setMultipleCurrency(res?.data?.data[0]?.rows));

      let allCurrencies = res?.data?.data[0]?.rows;

      if (allCurrencies?.length > 0) {
        allCurrencies.find((item) => console.log(item.countryName));
        let kuwait = allCurrencies.find(
          (item) => item.countryName.toLowerCase() == "kuwait"
        );
        if (kuwait && Object.keys(kuwait || {}).length > 0) {
          store.dispatch(setSelectedCurrency(kuwait));
        } else {
          store.dispatch(setSelectedCurrency(res?.data?.data[0]?.rows?.[0]));
        }
      }

      return true;
    } else {
      return false;
    }
  } catch (e) {
    store.dispatch(setLoading(false));
    return false;
  }
};
