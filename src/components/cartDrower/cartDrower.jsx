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

const CartDrower = ({ handleCartSidebarClose, isCartSidebarOpen }) => {
  const { allProductsSubTotal, products } = useSelector(
    (state) => state.addToCarts
  );

  const selectedCurrency = useSelector(
    (state) => state.multipleCurrency.selectedCurrency
  );
  return (
    <>
      <Drawer
        open={isCartSidebarOpen}
        onClose={handleCartSidebarClose}
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
              onClick={handleCartSidebarClose}
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
                        {(
                          Number(product?.finalPrice) *
                          Number(selectedCurrency?.currency)
                        ).toFixed(2)}{" "}
                        {selectedCurrency?.currencyCode}
                        <span className="line-through pl-2">15.020 KWD</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-5 gap-2">
                      <div>
                        <ButtonProductsIncreaseAndDecrease
                          productId={product?._id}
                          customerChoiceProductQuantity={
                            product?.customerChoiceProductQuantity
                          }
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
          <div className="  p-6 border-t ">
            <h3 className="text-base pb-2">Add Order Note</h3>
            <p className="text-sm pb-5">
              Shipping & taxes calculated at checkout
            </p>
            <div onClick={handleCartSidebarClose}>
              <Button
                text={`Checkout   ${(
                  Number(allProductsSubTotal) *
                  Number(selectedCurrency?.currency)
                ).toFixed(2)} 
                        ${selectedCurrency?.currencyCode}`}
                link="/checkout"
              />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrower;
