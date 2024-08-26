import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import store from "../../../redux/store";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../redux/features/addToCartSlice/addToCartSlice";
import { useSelector } from "react-redux";
import { warningAlert } from "../../../utils/notificationAlert/notificationAlert";

const ButtonProductsIncreaseAndDecrease = ({
  productId,
  maxQuantity,
  width = "140px",
  height = "40px",
}) => {
  const productInCart = useSelector((state) =>
    state.addToCarts.products.find((product) => product._id === productId)
  );

  const productQuantities = useSelector(
    (state) => state.addToCarts.productQuantities
  );

  const productQuantity = productInCart
    ? productInCart.customerChoiceProductQuantity
    : productQuantities[productId] || 1;

  const handleIncreaseQuantity = () => {
    if (productQuantity < maxQuantity) {
      store.dispatch(increaseQuantity(productId));
    } else {
      warningAlert(
        "You cannot add more of this product. Maximum quantity reached."
      );
    }
  };

  return (
    <div>
      <button
        className={`border flex items-center justify-between p-4   `}
        style={{ width: width, height: height }}
      >
        <span
          className="text-lg font-light text-gray-600"
          onClick={handleIncreaseQuantity}
        >
          <FiPlus />
        </span>
        <span className="text-lg font-light text-gray-600">
          {productQuantity}
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
