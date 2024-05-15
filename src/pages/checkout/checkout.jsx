import React from "react";
import Contact from "../../components/checkoutPageComponents/contact";
import Delivery from "../../components/checkoutPageComponents/delivery";
import ShippingMethod from "../../components/checkoutPageComponents/shippingMethod";
import Payment from "../../components/checkoutPageComponents/payment";
import BillingAddress from "../../components/checkoutPageComponents/billingAddress";
import Summary from "../../components/checkoutPageComponents/summary";

const CheckoutPage = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-1 ">
        <div className="border-r pt-10 px-8">
          <Contact />
          <Delivery />
          <ShippingMethod />
          <Payment />
          <BillingAddress />
          <div className="mt-4 md:hidden block">
            <button className="bg-[#454545] text-white w-full py-3 rounded-md font-bold text-lg">
              Pay Now
            </button>
          </div>
        </div>

        <div className="md:mt-5">
          <Summary />
        </div>
      </div>
      <div className="mt-4 hidden md:block px-6">
        <button className="bg-[#454545] text-white w-full py-3 rounded-md font-bold text-lg">
          Pay Nowm
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
