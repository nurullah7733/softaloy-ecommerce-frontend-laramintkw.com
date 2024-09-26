import React, { Fragment, useState } from "react";
import Drawer from "react-modern-drawer";
import { MdOutlineClose } from "react-icons/md";
import "react-modern-drawer/dist/index.css";
import Button from "../common/button";
import { useWindowSize } from "../../../utils/windowSize/useWindowSize";
import { useSelector } from "react-redux";
import ButtonProductsIncreaseAndDecrease from "../common/buttonPrdouctsIncreaseAndDecrease";
import store from "../../../redux/store";
import { removeProductFromCarts } from "../../../redux/features/addToCartSlice/addToCartSlice";
import { setCartSidebarOpen } from "../../../redux/features/sidebarCartsOpen/sidebarCartsOpenSlice";
import PriceConverterByCountry from "../../../utils/priceConverterByCountry/priceConverterByCountry";
import { Link } from "react-router-dom";

const CartDrower = () => {
  const {
    allProductsSubTotal,
    allProductsSubTotalBeforeDiscount,
    saveAmount,
    products,
  } = useSelector((state) => state.addToCarts);

  const isCartSidebarOpen = useSelector(
    (state) => state.sidebarCartsOpen.isCartSidebarOpen
  );

  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );
  return (
    <>
      <Drawer
        open={isCartSidebarOpen}
        onClose={() => store.dispatch(setCartSidebarOpen())}
        direction="right"
        className=""
        size={useWindowSize().width > 768 ? 400 : 300}
      >
        <div className="flex !justify-between flex-col h-full">
          {/* header */}
          <div className="flex justify-between items-center p-6 border-b ">
            <h1 className="text-2xl">
              Cart ({products?.length > 0 && products?.length})
            </h1>
            <MdOutlineClose
              className="cursor-pointer"
              onClick={() => store.dispatch(setCartSidebarOpen())}
              size={30}
            />
          </div>
          {/* content */}
          <div className="px-6 pt-10 pb-5 overflow-x-auto  ">
            {products?.map((product, index) => (
              <div key={index}>
                <div className="flex pb-5 gap-3 justify-between">
                  <div className="w-1/3">
                    <img
                      className="w-full"
                      src={product?.img?.slice(-1)[0]?.secure_url}
                      alt={product?.name}
                    />
                  </div>
                  <div className="w-2/3">
                    <div>
                      <h3 className="text-[12px] uppercase pb-2">
                        {product?.name?.length > 25
                          ? product?.name?.slice(0, 25) + "..."
                          : product?.name}
                      </h3>
                      <p className="text-[11px] uppercase">
                        {
                          <PriceConverterByCountry
                            price={product?.finalPrice}
                          />
                        }

                        <span
                          className={`line-through  text-red-600 ${
                            product?.price !== product?.finalPrice
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {<PriceConverterByCountry price={product?.price} />}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-5 gap-2">
                      <div>
                        <ButtonProductsIncreaseAndDecrease
                          productId={product?._id}
                          maxQuantity={product?.quantity}
                          // customerChoiceProductQuantity={
                          //   product?.customerChoiceProductQuantity
                          // }
                          width={100}
                          height={40}
                        />
                      </div>
                      <p
                        className="text-[11px] underline uppercase cursor-pointer "
                        onClick={() =>
                          store.dispatch(removeProductFromCarts(product?._id))
                        }
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* footer */}
          <div className="  px-6 py-2 border-t ">
            <div>
              <div className="flex justify-between">
                <h3 className="text-base  ">Subtotal</h3>
                <p className="text-sm ">
                  {
                    <PriceConverterByCountry
                      price={allProductsSubTotalBeforeDiscount}
                    />
                  }
                </p>
              </div>
              <div className="flex justify-between border-b ">
                <h3
                  className={`text-base ${
                    saveAmount > 0 ? "text-red-600" : ""
                  }`}
                >
                  Save Amount
                </h3>
                <p
                  className={`text-sm  ${
                    saveAmount > 0 ? "text-red-600" : ""
                  } `}
                >
                  {<PriceConverterByCountry price={saveAmount} />}
                </p>
              </div>
              <div className="flex justify-between">
                <h3 className="text-base  font-semibold">Total</h3>
                <p className="text-sm pb-2 font-semibold">
                  <PriceConverterByCountry price={allProductsSubTotal} />
                </p>
              </div>
            </div>
            <h3 className="text-base  ">Add Order Note</h3>
            <p className="text-sm pb-2">
              Shipping & taxes calculated at checkout page
            </p>
            <div onClick={() => store.dispatch(setCartSidebarOpen())}>
              <Link to="/checkout">
                <button
                  disabled={products?.length > 0 ? false : true}
                  className="button_slider_animate w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="content">
                    Checkout{" "}
                    <PriceConverterByCountry price={allProductsSubTotal} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrower;
