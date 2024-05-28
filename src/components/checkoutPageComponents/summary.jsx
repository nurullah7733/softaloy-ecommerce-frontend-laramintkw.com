import React, { useEffect } from "react";
import { TbLocationCancel } from "react-icons/tb";
import { useSelector } from "react-redux";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";
import { getCouponCodeRequest } from "../../APIRequest/settingsApi";
import {
  setOtherCost,
  setShippingCost,
} from "../../../redux/features/addToCartSlice/addToCartSlice";
import store from "../../../redux/store";
import { errorAlert } from "../../../utils/notificationAlert/notificationAlert";

const Summary = () => {
  const [counponCode, setCounponCode] = React.useState("");
  const [loadingCounponCode, setLoadingCounponCode] = React.useState(false);

  const {
    products,
    allProductsSubTotal,
    couponDiscount,
    saveAmount,
    totalPrice,
    otherCost,
    shippingCost,
  } = useSelector((state) => state.addToCarts);
  const formValue = useSelector((state) => state.shippingAddressForm.formValue);
  const shippingCostFromSettings = useSelector(
    (state) => state.settings.shippingCost
  );

  // calculate shipping cost
  const shippingCostFind = shippingCostFromSettings.find(
    (item) =>
      item.method.toLowerCase() === formValue.shippingMethod.toLowerCase()
  );

  useEffect(() => {
    store.dispatch(setShippingCost(shippingCostFind?.shippingCost));
    store.dispatch(setOtherCost(shippingCostFind?.otherCost));
  }, [shippingCostFind]);

  // discount counpon code
  const handleCouponCode = async (e) => {
    e.preventDefault();
    if (counponCode === "") {
      errorAlert("Please enter coupon code");
    } else {
      setLoadingCounponCode(true);
      let couponCodeToUpperCase = counponCode.toUpperCase();
      await getCouponCodeRequest(couponCodeToUpperCase);
      setLoadingCounponCode(false);
    }
  };

  return (
    <div className="py-10 px-6 bg-gray-50 h-full  ">
      <div>
        {/* products details */}
        {products.length === 0 ? (
          <div className="text-center">
            <p className="  pb-1 text-red-600">No products found</p>
          </div>
        ) : (
          <>
            {products.map((item, index) => (
              <div key={index}>
                <div className="flex gap-3  items-center py-2">
                  <div className="  sm:min-w-20 relative ">
                    <div className="bg-gray-700 absolute opacity-60 right-0 -top-2 rounded-full w-6 h-6 text-white flex justify-center  text-sm items-center font-semibold">
                      {item?.customerChoiceProductQuantity}
                    </div>
                    <img
                      className="border rounded-md w-24 h-24 object-cover"
                      src={item?.img?.slice(-1)[0]?.secure_url}
                    />
                  </div>
                  <div className="w-96">
                    <p className="text-sm text-gray-600">{item?.name}</p>
                  </div>
                  <div className=" text-sm text-gray-600 w-32">
                    <p className="text-[12px] line-through">
                      <PriceConverterByCountry price={item?.price} />
                    </p>
                    <p>
                      <PriceConverterByCountry price={item?.finalPrice} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        <div>
          {/* discount code */}
          <form onSubmit={handleCouponCode}>
            <div className="flex gap-3 items-center justify-center">
              <input
                onChange={(e) => setCounponCode(e.target.value)}
                type="text"
                placeholder="Discount code"
                value={counponCode.toUpperCase()}
                className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
              />
              <input
                type="submit"
                value={loadingCounponCode ? "Loading..." : "Apply"}
                disabled={loadingCounponCode}
                className="bg-gray-50 px-5 py-3 h-[46px] border border-gray-500 rounded-md  cursor-pointer flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50"
              />
            </div>
          </form>

          {/* sub total */}
          <div className="pt-5">
            <div className="flex justify-between pb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-600">
                <PriceConverterByCountry price={allProductsSubTotal} />
              </p>
            </div>

            <div className="flex justify-between pb-2 font-semibold">
              {couponDiscount > 0 && (
                <>
                  <p className="text-gray-600 ">Applied Coupons</p>
                  <p className="text-gray-600">
                    {couponDiscount > 0 && couponDiscount}%
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-between pb-2 font-semibold">
              {couponDiscount > 0 && (
                <>
                  <p className="text-gray-600 ">Save Amout</p>
                  <p className="text-gray-600">
                    <PriceConverterByCountry price={saveAmount} />
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-between pb-2">
              <p className="text-gray-600">Shipping</p>
              {formValue.shippingMethod === "" ? (
                <p className="text-gray-600">Enter shipping address</p>
              ) : (
                <p className="text-gray-600">
                  <PriceConverterByCountry price={shippingCost} />
                </p>
              )}
            </div>
            <div className="flex justify-between pb-2">
              {shippingCostFind?.otherCost == null ? null : (
                <>
                  <p className="text-gray-600">Estimated taxes</p>
                  <p className="text-gray-600">
                    <PriceConverterByCountry price={otherCost} />
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-900 font-semibold text-xl">Total</p>
              <p className="text-gray-900 font-semibold text-xl">
                {" "}
                <PriceConverterByCountry price={totalPrice} />
              </p>
            </div>
            {/* <div className="flex gap-2">
              <div>
                <TbLocationCancel className="text-gray-600" size={20} />
              </div>
              <p className="text-sm font-semibold text-gray-600">
                TOTAL SAVINGS KWD 3.827
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
