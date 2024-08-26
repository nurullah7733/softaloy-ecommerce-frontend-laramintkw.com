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
  const validNumber = (value) => (isNaN(Number(value)) ? 0 : Number(value));
  const validProductQuantity = (value) =>
    isNaN(Number(value)) ? 1 : Number(value);

  const allProductsSubTotal = products.reduce((sum, product) => {
    const quantity = validProductQuantity(
      product?.customerChoiceProductQuantity
    );
    const price = validNumber(product?.finalPrice);
    return sum + quantity * price;
  }, 0);

  const saveAmount = allProductsSubTotal * (validNumber(couponDiscount) / 100);
  const totalPrice =
    allProductsSubTotal +
    validNumber(shippingCost) +
    validNumber(otherCost) -
    saveAmount;

  // Format all amounts to 3 decimal places
  return {
    allProductsSubTotal: allProductsSubTotal.toFixed(3),
    totalPrice: totalPrice.toFixed(3),
    saveAmount: saveAmount.toFixed(3),
  };
};

const initialState = {
  products: [],
  productQuantities: {}, // Temporary product quantities
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
      const productId = actions.payload._id;
      const existingProduct = state.products.find(
        (product) => product._id === productId
      );

      if (existingProduct) {
        existingProduct.customerChoiceProductQuantity +=
          state.productQuantities[productId] || 1;
      } else {
        actions.payload.customerChoiceProductQuantity =
          state.productQuantities[productId] || 1;
        state.products.push(actions.payload);
      }

      // Reset temporary quantity
      delete state.productQuantities[productId];

      // Upsert in local storage and update totals
      setAddToCartInLocalStorage(state.products);
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
      const productId = actions.payload;
      const productInCart = state.products.find(
        (product) => product._id === productId
      );

      if (productInCart) {
        productInCart.customerChoiceProductQuantity++;
      } else {
        if (!state.productQuantities[productId]) {
          state.productQuantities[productId] = 1;
        }
        state.productQuantities[productId]++;
      }

      // Update subtotal, total, and other calculations
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );

      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    decreaseQuantity(state, actions) {
      const productId = actions.payload;
      const productInCart = state.products.find(
        (product) => product._id === productId
      );

      if (productInCart) {
        if (productInCart.customerChoiceProductQuantity > 1) {
          productInCart.customerChoiceProductQuantity--;
        }
      } else {
        if (
          state.productQuantities[productId] &&
          state.productQuantities[productId] > 1
        ) {
          state.productQuantities[productId]--;
        }
      }

      // Update subtotal, total, and other calculations
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );

      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    removeProductFromCarts(state, actions) {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload
      );
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setDiscountCoupon(state, actions) {
      state.couponDiscount = actions.payload;
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setShippingCost(state, actions) {
      state.shippingCost = actions.payload;
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setOtherCost(state, actions) {
      state.otherCost = actions.payload;
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setAddToCartFromLocalStorage(state, actions) {
      state.products = actions.payload;
      const { allProductsSubTotal, totalPrice, saveAmount } =
        calculateSubTotalAndTotal(
          state.products,
          state.shippingCost,
          state.otherCost,
          state.couponDiscount
        );
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
