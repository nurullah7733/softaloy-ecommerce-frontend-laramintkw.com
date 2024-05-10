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
        let kuwait = allCurrencies.find((item) => item.countryName == "kuwait");
        let us = allCurrencies.find((item) => item.countryName == "us");
        let usa = allCurrencies.find((item) => item.countryName == "usa");

        if (Object.keys(kuwait).length > 0) {
          store.dispatch(setSelectedCurrency(kuwait));
        } else if (Object.keys(us).length > 0) {
          store.dispatch(setSelectedCurrency(us));
        } else if (Object.keys(usa).length > 0) {
          store.dispatch(setSelectedCurrency(usa));
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
