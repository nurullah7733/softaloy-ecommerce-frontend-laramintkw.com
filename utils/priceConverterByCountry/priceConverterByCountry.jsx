import React from "react";
import { useSelector } from "react-redux";

const PriceConverterByCountry = ({ price }) => {
  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );
  return (
    <>
      {selectedCurrency?.currencyCode == "us" ||
      selectedCurrency?.currencyCode == "usd" ||
      selectedCurrency?.currencyCode == "usa" ? (
        <>
          ${(Number(price) * Number(selectedCurrency?.currency)).toFixed(3)} USD
        </>
      ) : (
        <>
          {(Number(price) * Number(selectedCurrency?.currency)).toFixed(3)}{" "}
          {selectedCurrency?.currencyCode?.toUpperCase()}
        </>
      )}
    </>
  );
};

export default PriceConverterByCountry;
