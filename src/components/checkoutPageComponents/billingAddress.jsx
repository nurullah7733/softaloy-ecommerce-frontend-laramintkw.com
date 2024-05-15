import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Button, Tooltip } from "flowbite-react";

const BillingAddress = () => {
  const [expanded, setExpanded] = useState(3);
  const Expanded = (value) => {
    setExpanded(value);
  };
  return (
    <div className="pt-10">
      <div>
        <h2 className="font-semibold text-xl pb-2">Billing address</h2>
      </div>
      <div className="border">
        {/* Same as shipping address */}
        <div className=" cursor-pointer  w-full border-b">
          {/* title */}
          <div
            className="flex items-center justify-between w-full  py-4 px-2 "
            onClick={() => Expanded(3)}
          >
            <div className="cursor-pointer flex items-center w-full ">
              <input
                type="radio"
                id="same_as_shipping_address"
                name="same_as_shipping_address"
                checked={expanded == 3}
                className="mr-2 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  focus:ring-0"
              />
              <label
                onClick={() => Expanded(3)}
                className="cursor-pointer select-none block w-full"
                htmlFor="same_as_shipping_address"
              >
                <div className="flex justify-between items-center gap-2">
                  <div> Same as shipping address</div>
                </div>
              </label>
            </div>

            <div className="flex-none pl-2">
              {expanded == 3 ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </div>
          {/* content */}
          <div
            className={` overflow-hidden transition-[min-height] duration-200 ease-in ${
              expanded == 3 ? "min-h-0" : "max-h-0"
            }`}
          >
            {/* <div className="p-4  bg-gray-100">
              <div className="max-w-sm md:w-full md:px-2 mx-auto flex justify-center items-center flex-col">
                <div className="w-40 pt-3"></div>
                <p className="text-sm text-gray-600 pt-5">
                  After clicking “Pay now”, you will be redirected to MyFatoorah
                  to complete your purchase securely.
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* billing address form */}
        <div className=" cursor-pointer  w-full">
          {/* title */}
          <div
            className="flex items-center justify-between w-full  py-4 px-2 "
            onClick={() => Expanded(4)}
          >
            <div className="cursor-pointer flex items-center w-full ">
              <input
                type="radio"
                id="use_different_billing_address"
                name="use_different_billing_address"
                checked={expanded == 4}
                className="mr-2 w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  focus:ring-0"
              />
              <label
                onClick={() => Expanded(4)}
                className="cursor-pointer select-none block w-full"
                htmlFor="use_different_billing_address"
              >
                <div className="flex justify-between items-center">
                  <div>Use a different billing address</div>
                </div>
              </label>
            </div>

            <div className="flex-none pl-2">
              {expanded == 4 ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </div>
          {/* content */}
          <div
            className={` overflow-hidden transition-[min-height] bg-gray-100 duration-200 ease-in ${
              expanded == 4 ? "min-h-16" : "max-h-0"
            }`}
          >
            <div className="p-4 border border-t-0 ">
              <div className=" w-full ">
                {/* billing address form */}
                <div>
                  <div>
                    <label
                      for="countries"
                      className="block text-gray-600 mb-2 text-sm font-medium   dark:text-gray-400"
                    >
                      Select an country
                    </label>
                    <select
                      id="countries"
                      className="py-3 border  focus:border-black  text-sm rounded-md focus:ring-0 block w-full"
                    >
                      <option selected value="kuwait" className="capitalize">
                        kuwait
                      </option>
                      <option value="qatar" className="capitalize">
                        qatar
                      </option>
                      <option
                        value="united_arab_emirates"
                        className="capitalize"
                      >
                        united arab emirates
                      </option>
                      <option value="---" className="capitalize">
                        ---
                      </option>
                      <option value="afghanistan" className="capitalize">
                        afghanistan
                      </option>
                      <option value="azerbaijan" className="capitalize">
                        azerbaijan
                      </option>
                      <option value="bahrain" className="capitalize">
                        bahrain
                      </option>
                      <option value="bangladesh" className="capitalize">
                        bangladesh
                      </option>
                      <option value="bhutan" className="capitalize">
                        bhutan
                      </option>
                      <option
                        value="british_indian_ocean_territory"
                        className="capitalize"
                      >
                        british indian ocean territory
                      </option>
                      <option value="brunei" className="capitalize">
                        brunei
                      </option>
                      <option value="combodia" className="capitalize">
                        combodia
                      </option>
                      <option value="china" className="capitalize">
                        china
                      </option>
                      <option value="christmas island" className="capitalize">
                        christmas island
                      </option>
                      <option value="DE" className="capitalize">
                        cocos (keeling) island
                      </option>
                      <option
                        value="cocos_keeling_island"
                        className="capitalize"
                      >
                        hong kong sar
                      </option>
                      <option value="india" className="capitalize">
                        india
                      </option>
                      <option value="indonesia" className="capitalize">
                        indonesia
                      </option>
                      <option value="iraq" className="capitalize">
                        iraq
                      </option>
                      <option value="israel" className="capitalize">
                        israel
                      </option>
                      <option value="japan" className="capitalize">
                        japan
                      </option>
                      <option value="jordan" className="capitalize">
                        jordan
                      </option>
                      <option value="kazakhstan" className="capitalize">
                        kazakhstan
                      </option>
                      <option value="kyrgyzstan" className="capitalize">
                        kyrgyzstan
                      </option>
                      <option value="laos" className="capitalize">
                        laos
                      </option>
                      <option value="lebanon" className="capitalize">
                        lebanon
                      </option>
                      <option value="macao_sar" className="capitalize">
                        macao sar
                      </option>
                      <option value="malaysia" className="capitalize">
                        malaysia
                      </option>
                      <option value="maldives" className="capitalize">
                        maldives
                      </option>
                      <option value="mongolia" className="capitalize">
                        mongolia
                      </option>
                      <option value="myanmar_burma" className="capitalize">
                        myanmar (burma)
                      </option>
                      <option value="nepal" className="capitalize">
                        nepal
                      </option>
                      <option value="oman" className="capitalize">
                        oman
                      </option>
                      <option value="pakistan" className="capitalize">
                        pakistan
                      </option>
                      <option
                        value="palestinian_Territories"
                        className="capitalize"
                      >
                        palestinian Territories
                      </option>
                      <option value="philippiness" className="capitalize">
                        philippiness
                      </option>
                      <option value="Qatar" className="capitalize">
                        Qatar
                      </option>
                      <option value="russia" className="capitalize">
                        russia
                      </option>
                      <option value="saudi_arabia" className="capitalize">
                        saudi arabia
                      </option>
                      <option value="singapore" className="capitalize">
                        singapore
                      </option>
                      <option value="south_korea" className="capitalize">
                        south korea
                      </option>
                      <option value="sri_lanka" className="capitalize">
                        sri lanka
                      </option>
                      <option value="taiwan" className="capitalize">
                        taiwan
                      </option>
                      <option value="tajikistan" className="capitalize">
                        tajikistan
                      </option>
                      <option value="thailand" className="capitalize">
                        thailand
                      </option>
                      <option value="turkmenistan" className="capitalize">
                        turkmenistan
                      </option>
                      <option
                        value="united_arab_emirates"
                        className="capitalize"
                      >
                        united arab emirates
                      </option>
                      <option value="uzbekistan" className="capitalize">
                        uzbekistan
                      </option>
                      <option value="vietnam" className="capitalize">
                        vietnam
                      </option>
                      <option value="yemen" className="capitalize">
                        yemen
                      </option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-4 pt-2">
                    <input
                      type="text"
                      placeholder="Email or Phone number"
                      className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
                    />
                    <input
                      type="text"
                      placeholder="Email or Phone number"
                      className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Address"
                      className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Appartment, suite, etc. (optional)"
                      className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="City"
                      className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="border w-full rounded focus:ring-0 focus:outline-none focus:border-black my-2 text-sm py-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
