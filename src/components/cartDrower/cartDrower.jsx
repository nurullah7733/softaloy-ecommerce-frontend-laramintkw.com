import React, { Fragment, useState } from "react";
import Drawer from "react-modern-drawer";
import { MdOutlineClose } from "react-icons/md";
import "react-modern-drawer/dist/index.css";
import Button from "../common/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useWindowSize } from "../../../utils/windowSize/useWindowSize";

const arr = Array.from(Array(4).keys());

const CartDrower = ({ handleCartSidebarClose, isCartSidebarOpen }) => {
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
            <h1 className="text-2xl">Cart</h1>
            <MdOutlineClose
              className="cursor-pointer"
              onClick={handleCartSidebarClose}
              size={30}
            />
          </div>
          {/* content */}
          <div className="px-6 pt-10 pb-5 overflow-x-auto  ">
            {arr.map((item, index) => (
              <Fragment key={index}>
                <div className="flex  pb-5">
                  <div className="w-1/2">
                    <img src={`/products/${index + 1}.webp`} alt="" />
                  </div>
                  <div>
                    <div>
                      <h3 className="text-[12px] uppercase pb-2">
                        TRICOVEL ANTI DANDRUFF HA...
                      </h3>
                      <p className="text-[11px] uppercase">
                        11.550 KWD{" "}
                        <span className="line-through pl-2">15.020 KWD</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-5 gap-2">
                      <div>
                        <button className=" border flex items-center justify-between p-4  w-[100px] h-[40px]">
                          <span className="text-sm font-light text-gray-600">
                            <FiPlus />
                          </span>
                          <span className="text-sm font-light text-gray-600">
                            {12}
                          </span>
                          <span className="text-sm font-light text-gray-600">
                            <FiMinus />
                          </span>
                        </button>
                      </div>
                      <p className="text-[11px] underline uppercase  ">
                        Remove
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </Fragment>
            ))}
          </div>
          {/* footer */}
          <div className="  p-6 border-t ">
            <h3 className="text-base pb-2">Add Order Note</h3>
            <p className="text-sm pb-5">
              Shipping & taxes calculated at checkout
            </p>
            <div onClick={handleCartSidebarClose}>
              <Button text={`Checkout ${500} kwd`} link="/checkout" />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrower;
