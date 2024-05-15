import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import Button from "../../components/common/button";
import ButtonProductsIncreaseAndDecrease from "../../components/common/buttonPrdouctsIncreaseAndDecrease";

const ProductDetails = () => {
  return (
    <div className="px-8 mx-auto">
      <div className="lg:block grid grid-cols-3 py-10 lg:w-full xl:max-w-5xl max-w-7xl">
        <div className="col-span-2">
          <img alt="" src="/products/2.webp" className="w-full" />
        </div>
        <div className="col-span-1 max-w-xl mx-auto">
          <div className="border-b mb-6 md:text-center">
            <h3 className="text-gray-600 uppercase">NEW MELAN</h3>
            <h1 className="py-5 text-xl font-semibold text-gray-600 uppercase">
              NEW MELAN DAY & NIGHT DEPIGMENTING CREAM 30G
            </h1>
            <h4 className="text-gray-600 uppercase mb-6">52.000 KWD</h4>
          </div>
          {/* tab description */}
          <div>
            <div>
              {/* button */}
              <div className="flex justify-between gap-2">
                <button className="border border-b-0 w-full sm:p-1 p-2 text-gray-600 bg-gray-300">
                  Description
                </button>
                <button className="border border-b-0 w-full sm:p-1 p-2 text-gray-600">
                  Features
                </button>
                <button className="border border-b-0 w-full sm:p-1 p-2 text-gray-600">
                  INGREDIENTS
                </button>
              </div>
            </div>
            <div className="border">
              {/* description */}
              <div className="p-5 text-gray-600">
                <p>
                  NEWMELAN DAY & NIGHT® by Dr. Eduardo Krulig is the synergistic
                  combination of several assets, simultaneously blocking the
                  different stages that are related in the formation of
                  Melasma.NEWMELAN DAY & NIGHT acts in several stages of
                  melanogenesis, inhibiting inflammatory processes, tyrosinase,
                  o tyrosine oxidation process and melanin formation.
                </p>
                <p className="mt-5  italic">Made in spain</p>
              </div>
            </div>
          </div>

          {/* share buttons */}
          <div className="flex items-center text-gray-500 uppercase gap-3 my-5">
            <p className="text-[12px]">share</p>
            <FaFacebookF className="text-[12px]" />{" "}
            <FaTwitter className="text-[12px]" />{" "}
            <FaPinterest className="text-[12px]" />
          </div>
          {/* add to cart buttons */}
          <div>
            <div className="py-5">
              <ButtonProductsIncreaseAndDecrease />
            </div>
            <Button link="/cart" text="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
