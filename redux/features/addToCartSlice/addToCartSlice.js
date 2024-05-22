import { createSlice } from "@reduxjs/toolkit";
import { setAddToCartInLocalStorage } from "../../../utils/sessionHelper/sessionHelper";

const initialState = {
  products: [],
  couponDiscount: 0,
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
      //   calculate sub total
      state.allProductsSubTotal = state.products.reduce((sum, product) => {
        return sum + product.customerChoiceProductQuantity * product.finalPrice;
      }, 0);
    },
    increaseQuantity(state, actions) {
      state.products.find((product) => {
        if (product._id === actions.payload) {
          product.customerChoiceProductQuantity++;
          //   calculate sub total
          state.allProductsSubTotal = state.products.reduce((sum, product) => {
            return (
              sum + product.customerChoiceProductQuantity * product.finalPrice
            );
          }, 0);
        }
      });
    },
    decreaseQuantity(state, actions) {
      state.products.find((product) => {
        if (product._id === actions.payload) {
          if (product.customerChoiceProductQuantity > 1) {
            product.customerChoiceProductQuantity--;
            //   calculate sub total
            state.allProductsSubTotal = state.products.reduce(
              (sum, product) => {
                return (
                  sum +
                  product.customerChoiceProductQuantity * product.finalPrice
                );
              },
              0
            );
          }
        }
      });
    },

    removeProductFromCarts(state, actions) {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload
      );
      //   calculate sub total
      state.allProductsSubTotal = state.products.reduce((sum, product) => {
        return sum + product.customerChoiceProductQuantity * product.finalPrice;
      }, 0);
    },
  },
});

export const {
  setAddToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCarts,
} = addToCartProductsSlice.actions;

export default addToCartProductsSlice.reducer;
