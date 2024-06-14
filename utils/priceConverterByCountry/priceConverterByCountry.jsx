import React from "react";
import { useSelector } from "react-redux";

const PriceConverterByCountry = ({ price }) => {
  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );

  const currencyValue = Number(selectedCurrency?.currency);
  const priceValue = Number(price);

  if (isNaN(currencyValue) || isNaN(priceValue)) {
    return <>Invalid price or currency value</>;
  }

  const convertedPrice = (priceValue * currencyValue).toFixed(3);
  const currencyCode = selectedCurrency?.currencyCode?.toUpperCase();

  return (
    <>
      {currencyCode === "US" ||
      currencyCode === "USD" ||
      currencyCode === "USA" ? (
        <>${convertedPrice} USD</>
      ) : (
        <>
          {convertedPrice} {currencyCode}
        </>
      )}
    </>
  );
};

export default PriceConverterByCountry;
