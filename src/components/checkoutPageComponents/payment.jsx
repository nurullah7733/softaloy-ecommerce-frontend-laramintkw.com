import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { setShippingAddressFormValue } from "../../../redux/features/shippingAddressFormSlice/shippingAddressFormSlice";
import store from "../../../redux/store";
import { useSelector } from "react-redux";

const Payment = () => {
  const [expanded, setExpanded] = useState(1);
  const Expanded = (value) => {
    setExpanded(value);
  };

  const formValue = useSelector((state) => state.shippingAddressForm.formValue);

  return (
    <div className="pt-10">
      <div>
        <h2 className="font-semibold text-xl">Payment</h2>
        <p className="text-sm text-gray-600 pb-2">
          All transactions are secure and encrypted.
        </p>
      </div>
      <div className="border">
        {/* bank options */}
        <div className=" cursor-pointer  w-full border-b">
          {/* title */}
          <div
            className="flex items-center justify-between w-full  py-4 px-2 "
            onClick={() => Expanded(1)}
          >
            <div className="cursor-pointer flex items-center w-full ">
              <input
                onChange={(e) =>
                  store.dispatch(
                    setShippingAddressFormValue({
                      Name: "paymentMethod",
                      Value: e.target.value,
                    })
                  )
                }
                value={formValue.paymentMethod}
                type="radio"
                id="myFatoorah"
                name="paymentMethod"
                checked={expanded == 1}
                className="mr-2 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  focus:ring-0"
              />
              <label
                onClick={() => {
                  Expanded(1),
                    store.dispatch(
                      setShippingAddressFormValue({
                        Name: "paymentMethod",
                        Value: "myFatoorah",
                      })
                    );
                }}
                className="cursor-pointer select-none block w-full"
                htmlFor="myFatoorah"
              >
                <div className="flex justify-between items-center gap-2">
                  <div>MyFatoorah</div>
                  <div className="flex gap-1 flex-wrap">
                    <img src="/payments/1.svg" />
                    <img src="/payments/2.svg" />
                    <img src="/payments/3.svg" />
                    <img src="/payments/4.svg" />

                    <Tooltip content="" style="light">
                      <div className="bg-white border w-10 h-6 flex justify-center items-center   ">
                        9+
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex-none pl-2">
              {expanded == 1 ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </div>
          {/* content */}
          <div
            className={` overflow-hidden transition-[min-height] duration-200 ease-in ${
              expanded == 1 ? "min-h-40" : "max-h-0"
            }`}
          >
            <div className="p-4  bg-gray-100">
              <div className="max-w-sm md:w-full md:px-2 mx-auto flex justify-center items-center flex-col">
                <div className="w-40 pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-270.8 371 102 52"
                    className="eHdoK"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"
                    ></path>
                    <circle
                      cx="-255.5"
                      cy="376.5"
                      r="1.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="-250.5"
                      cy="376.5"
                      r="1.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="-245.5"
                      cy="376.5"
                      r="1.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 pt-5">
                  After clicking “Pay now”, you will be redirected to MyFatoorah
                  to complete your purchase securely.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cash on delivery */}
        <div className=" cursor-pointer  w-full">
          {/* title */}
          <div
            className="flex items-center justify-between w-full  py-4 px-2 "
            onClick={() => Expanded(2)}
          >
            <div className="cursor-pointer flex items-center w-full ">
              <input
                onChange={(e) =>
                  store.dispatch(
                    setShippingAddressFormValue({
                      Name: "paymentMethod",
                      Value: e.target.value,
                    })
                  )
                }
                value={formValue.paymentMethod}
                defaultValue={"cashOnDelivery"}
                type="radio"
                id="Cash_on_Delivery"
                name="paymentMethod"
                checked={expanded == 2}
                className="mr-2 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  focus:ring-0"
              />
              <label
                onClick={() => {
                  Expanded(2),
                    store.dispatch(
                      setShippingAddressFormValue({
                        Name: "paymentMethod",
                        Value: "cashOnDelivery",
                      })
                    );
                }}
                className="cursor-pointer select-none block w-full"
                htmlFor="Cash_on_Delivery"
              >
                <div className="flex justify-between items-center">
                  <div>Cash on Delivery (COD)</div>
                </div>
              </label>
            </div>

            <div className="flex-none pl-2">
              {expanded == 2 ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </div>
          {/* content */}
          <div
            className={` overflow-hidden transition-[min-height] bg-gray-100 duration-200 ease-in ${
              expanded == 2 ? "min-h-16 md:min-h-20" : "max-h-0"
            }`}
          >
            <div className="p-4 border border-t-0 ">
              <div className=" md:w-full md:px-2 mx-auto flex justify-center items-center flex-col">
                <p className="text-sm text-gray-600 pt-5">
                  ( COD is available only for KUWAIT ) ( الدفع كاش عند التوصيل
                  متوفر فقط داخل الكويت )
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
