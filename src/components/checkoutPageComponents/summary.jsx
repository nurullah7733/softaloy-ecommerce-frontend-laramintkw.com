import React from "react";
import { TbLocationCancel } from "react-icons/tb";

const arr = Array.from(Array(4).keys());

const Summary = () => {
  return (
    <div className="py-10 px-6 bg-gray-50 h-full  ">
      <div>
        {/* products details */}
        {arr.map((item, index) => (
          <div key={index}>
            <div className="flex gap-3 items-center py-2">
              <div className="w-32 sm:min-w-20 relative">
                <div className="bg-gray-700 absolute opacity-60 right-0 -top-2 rounded-full w-6 h-6 text-white flex justify-center text-sm items-center font-semibold">
                  {50}
                </div>
                <img className=" border rounded-md" src="/products/1.webp" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Eau Thermale Avène SUNKIT SPF 50 VERY HIGH PROTECTION SPRAY
                  FOR SENSITIVE SKIN 200ml + 1 FREE
                </p>
              </div>
              <div className="w-60 text-sm text-gray-600">
                <p className="text-[12px] line-through">KWD 23.960</p>
                <p>KWD 23.960</p>
              </div>
            </div>
          </div>
        ))}

        {/* discount code */}
        <div>
          <form>
            <div className="flex gap-3 items-center justify-center">
              <input
                type="text"
                placeholder="Discount code"
                className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
              />
              <input
                type="submit"
                value="Apply"
                className="bg-gray-50 px-5 py-3 h-[46px] border border-gray-500 rounded-md  cursor-pointer flex items-center justify-center"
              />
            </div>
          </form>

          {/* sub total */}
          <div className="pt-5">
            <div className="flex justify-between pb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-600">KWD 151.613</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-600">Shipping</p>
              <p className="text-gray-600">Enter shipping address</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-600">Estimated taxes</p>
              <p className="text-gray-600">KWD 1.613</p>
            </div>
            <div className="flex justify-between pb-2">
              <p className="text-gray-900 font-semibold text-xl">Total</p>
              <p className="text-gray-900 font-semibold text-xl">KWD 151.613</p>
            </div>
            <div className="flex gap-2">
              <div>
                <TbLocationCancel className="text-gray-600" size={20} />
              </div>
              <p className="text-sm font-semibold text-gray-600">
                TOTAL SAVINGS KWD 3.827
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
