import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import store from "../../../redux/store";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../redux/features/addToCartSlice/addToCartSlice";

const ButtonProductsIncreaseAndDecrease = ({
  productId,
  customerChoiceProductQuantity,
  width = "140px",
  height = "40px",
}) => {
  return (
    <div>
      <button
        className={`border flex items-center justify-between p-4   `}
        style={{ width: width, height: height }}
      >
        <span
          className="text-lg font-light text-gray-600"
          onClick={() => store.dispatch(increaseQuantity(productId))}
        >
          <FiPlus />
        </span>
        <span className="text-lg font-light text-gray-600">
          {customerChoiceProductQuantity}
        </span>
        <span
          className="text-lg font-light text-gray-600"
          onClick={() => store.dispatch(decreaseQuantity(productId))}
        >
          <FiMinus />
        </span>
      </button>
    </div>
  );
};

export default ButtonProductsIncreaseAndDecrease;
