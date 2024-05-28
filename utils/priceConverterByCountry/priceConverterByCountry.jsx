import React from "react";
import { useSelector } from "react-redux";

const PriceConverterByCountry = ({ price }) => {
  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );
  return (
    <>
      {(Number(price) * Number(selectedCurrency?.currency)).toFixed(2)}{" "}
      {selectedCurrency?.currencyCode?.toUpperCase()}
    </>
  );
};

export default PriceConverterByCountry;
