import { createSlice } from "@reduxjs/toolkit";
import {
  setAddToCartInLocalStorage,
  setSubTotalProductsPriceInLocalStorage,
  setTotalProductsPriceInLocalStorage,
} from "../../../utils/sessionHelper/sessionHelper";

export const calculateSubTotalAndTotal = (
  products,
  shippingCost,
  otherCost,
  couponDiscount
) => {
  // Ensure inputs are numbers, defaulting to 0 if they are not valid numbers
  const validNumber = (value) => (isNaN(Number(value)) ? 0 : Number(value));
  const validProductQuantity = (value) =>
    isNaN(Number(value)) ? 1 : Number(value); // Default quantity to 1 if invalid

  const allProductsSubTotal = products.reduce((sum, product) => {
    const quantity = validProductQuantity(
      product?.customerChoiceProductQuantity
    );
    const price = validNumber(product?.finalPrice);
    return sum + quantity * price;
  }, 0);

  // Apply coupon discount percentage
  const saveAmount = allProductsSubTotal * (validNumber(couponDiscount) / 100);

  // Calculate total price including shipping cost, other cost, and discounts
  const totalPrice =
    allProductsSubTotal +
    validNumber(shippingCost) +
    validNumber(otherCost) -
    saveAmount;

  return {
    allProductsSubTotal,
    totalPrice,
    saveAmount,
  };
};

const initialState = {
  products: [],
  couponDiscount: 0,
  saveAmount: 0,
  shippingCost: 0,
  otherCost: 0,
  allProductsSubTotal: 0,
  totalPrice: 0,
};

const addToCartProductsSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    setAddToCart(state, actions) {
      state.products.push(actions.payload);
      //   upsert in local storage
      setAddToCartInLocalStorage(state.products);
      // update sub total & total
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );

      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    increaseQuantity(state, actions) {
      state.products.find((product) => {
        if (product._id === actions.payload) {
          product.customerChoiceProductQuantity++;
          // update sub total & total
          const { allProductsSubTotal, totalPrice, saveAmount } =
            calculateSubTotalAndTotal(
              state.products,
              state.shippingCost,
              state.otherCost,
              state.couponDiscount
            );
          //   upsert in local storage
          setAddToCartInLocalStorage(state.products);
          state.allProductsSubTotal = allProductsSubTotal;
          state.totalPrice = totalPrice;
          state.saveAmount = saveAmount;
        }
      });
    },
    decreaseQuantity(state, actions) {
      state.products.find((product) => {
        if (product._id === actions.payload) {
          if (product.customerChoiceProductQuantity > 1) {
            product.customerChoiceProductQuantity--;
            // update sub total & total
            const { allProductsSubTotal, totalPrice, saveAmount } =
              calculateSubTotalAndTotal(
                state.products,
                state.shippingCost,
                state.otherCost,
                state.couponDiscount
              );
            //   upsert in local storage
            setAddToCartInLocalStorage(state.products);

            state.allProductsSubTotal = allProductsSubTotal;
            state.totalPrice = totalPrice;
            state.saveAmount = saveAmount;
          }
        }
      });
    },

    removeProductFromCarts(state, actions) {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload
      );
      // update sub total & total
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      //   upsert in local storage
      setAddToCartInLocalStorage(state.products);

      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setDiscountCoupon(state, actions) {
      state.couponDiscount = actions.payload;
      // update sub total & total
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      //   upsert in local storage
      setAddToCartInLocalStorage(state.products);

      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setShippingCost(state, actions) {
      state.shippingCost = actions.payload;
      // update sub total & total
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );

      //   upsert in local storage
      setAddToCartInLocalStorage(state.products);

      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },
    setOtherCost(state, actions) {
      state.otherCost = actions.payload;
      // update sub total & total
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      //   upsert in local storage
      setAddToCartInLocalStorage(state.products);

      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    // set add to cart products from localstroge
    setAddToCartFromLocalStorage(state, actions) {
      state.products = actions.payload;
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      //   upsert in local storage
      setAddToCartInLocalStorage(state.products);

      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },
  },
});

export const {
  setAddToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCarts,
  setDiscountCoupon,
  setOtherCost,
  setShippingCost,
  setAddToCartFromLocalStorage,
} = addToCartProductsSlice.actions;

export default addToCartProductsSlice.reducer;
