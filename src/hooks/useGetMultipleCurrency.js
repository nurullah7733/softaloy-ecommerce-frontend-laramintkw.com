import { useState } from "react";
import toast from "react-hot-toast";
import store from "../../redux/store";
import {
  setMultipleCurrency,
  setSelectedCurrency,
} from "../../redux/features/multipleCurrencySlice/multipleCurrencySlice";

const useGetMultipleCurrency = () => {
  const [loading, setLoading] = useState(false);

  const getMultipleCurrency = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/list-multiple-currency/1/100/0`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      store.dispatch(setMultipleCurrency(data?.data[0]?.rows));
      let allCurrencies = data?.data[0]?.rows;
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
          store.dispatch(setSelectedCurrency(data?.data[0]?.rows?.[0]));
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getMultipleCurrency };
};
export default useGetMultipleCurrency;
