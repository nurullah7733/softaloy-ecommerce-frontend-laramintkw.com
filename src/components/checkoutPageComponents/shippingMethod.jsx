import React from "react";
import { useSelector } from "react-redux";
import { setShippingAddressFormValue } from "../../../redux/features/shippingAddressFormSlice/shippingAddressFormSlice";
import store from "../../../redux/store";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";

const ShippingMethod = () => {
  const shippingAddressMethod = useSelector(
    (state) => state.settings.shippingCost
  );
  const formValue = useSelector((state) => state.shippingAddressForm.formValue);
  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );

  // filter kuwait country for shipping
  const kuwaitMethod = shippingAddressMethod.filter(
    (item) => item.region.toLowerCase() === "kuwait"
  );

  // filter other country for shippingfor shipping
  const otherCountryMethod = shippingAddressMethod.filter(
    (item) => item.region.toLowerCase() !== "kuwait"
  );

  return (
    <div>
      <h2 className="font-semibold text-xl pt-10 pb-2">Shipping Method</h2>

      <div className="p-4 border rounded-md bg-gray-100">
        <div>
          {formValue.country.toLowerCase() == "kuwait" ? (
            <>
              {kuwaitMethod?.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <div className="">
                    <input
                      onChange={(e) =>
                        store.dispatch(
                          setShippingAddressFormValue({
                            Name: "shippingMethod",
                            Value: e.target.value,
                          })
                        )
                      }
                      value={item?.method}
                      type="radio"
                      id={item?.method}
                      name="shippingMethod"
                      className="mr-2 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={item?.method}>{item?.method}</label>
                  </div>
                  <div>
                    <p className="uppercase">
                      <PriceConverterByCountry price={item?.shippingCost} />
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {otherCountryMethod?.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <div className="">
                    <input
                      onChange={(e) =>
                        store.dispatch(
                          setShippingAddressFormValue({
                            Name: "shippingMethod",
                            Value: e.target.value,
                          })
                        )
                      }
                      value={item?.method}
                      type="radio"
                      name="shippingMethod"
                      id={item?.method}
                      className="mr-2 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={item?.method}>{item?.method}</label>
                  </div>
                  <div>
                    <p className="uppercase">
                      {(
                        Number(item?.shippingCost) *
                        Number(selectedCurrency?.currency)
                      ).toFixed(2)}{" "}
                      {selectedCurrency?.currencyCode}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}

          {shippingAddressMethod?.length === 0 ||
            (formValue.country === "" && (
              <div className="  rounded-md">
                <p className="text-sm">
                  Enter your shipping address to view available shipping
                  methods.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
