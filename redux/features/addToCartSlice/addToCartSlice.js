import { createSlice, current } from "@reduxjs/toolkit";
import {
  setAddToCartInLocalStorage,
  setSubTotalProductsPriceInLocalStorage,
  setTotalProductsPriceInLocalStorage,
} from "../../../utils/sessionHelper/sessionHelper";

// Helper function to calculate totals
const calculateSubTotalAndTotal = (
  products,
  shippingCost,
  otherCost,
  couponDiscount
) => {
  const validNumber = (value) => (isNaN(Number(value)) ? 0 : Number(value));
  const validProductQuantity = (value) =>
    isNaN(Number(value)) ? 1 : Number(value);

  let allProductsSubTotal = 0;
  let saveAmount = 0;

  // Temporary storage for category/brand B1G1 or B2G1 eligible products
  let categoryBrandB1G1Products = [];
  let categoryBrandB2G1Products = [];

  // Process each product
  products.forEach((product) => {
    const quantity = validProductQuantity(
      product?.customerChoiceProductQuantity
    );
    const price = validNumber(product?.finalPrice);

    // Individual product offers (B1G1 and B2G1)
    if (product?.offers?.isEachProductB1G1 && quantity >= 2) {
      const freeItems = Math.floor(quantity / 2);
      const paidItems = quantity - freeItems;
      allProductsSubTotal += paidItems * price;
      saveAmount += freeItems * price;
    } else if (product?.offers?.isEachProductB2G1 && quantity >= 3) {
      const freeItems = Math.floor(quantity / 3);
      const paidItems = quantity - freeItems;
      allProductsSubTotal += paidItems * price;
      saveAmount += freeItems * price;
    }

    // Category/brand B1G1 and B2G1 offers
    else if (product?.offers?.isCategoryBrandB1G1) {
      categoryBrandB1G1Products.push(product);
    } else if (product?.offers?.isCategoryBrandB2G1) {
      categoryBrandB2G1Products.push(product);
    }

    // If no offers
    else {
      allProductsSubTotal += quantity * price;
    }
  });

  // Handle isCategoryBrandB1G1 offer
  if (categoryBrandB1G1Products.length >= 2) {
    // Sort products by price in descending order
    categoryBrandB1G1Products.sort(
      (a, b) => validNumber(b.finalPrice) - validNumber(a.finalPrice)
    );

    // Calculate for B1G1 offer (higher price product will be paid, lower one will be free)
    const paidProduct = categoryBrandB1G1Products[0]; // Higher priced product
    const freeProduct = categoryBrandB1G1Products[1]; // Lower priced product

    const paidProductQuantity = validProductQuantity(
      paidProduct.customerChoiceProductQuantity
    );
    const freeProductQuantity = validProductQuantity(
      freeProduct.customerChoiceProductQuantity
    );

    allProductsSubTotal +=
      paidProductQuantity * validNumber(paidProduct.finalPrice);

    if (freeProductQuantity >= 1) {
      saveAmount += validNumber(freeProduct.finalPrice); // Free one lower priced product
    }

    // If the customer orders more of the same free product, charge for the remaining ones
    if (freeProductQuantity > 1) {
      allProductsSubTotal +=
        (freeProductQuantity - 1) * validNumber(freeProduct.finalPrice);
    }
  } else if (categoryBrandB1G1Products.length === 1) {
    const paidProduct = categoryBrandB1G1Products[0];
    const paidProductQuantity = validProductQuantity(
      paidProduct.customerChoiceProductQuantity
    );
    allProductsSubTotal +=
      paidProductQuantity * validNumber(paidProduct.finalPrice);
  }

  // Handle isCategoryBrandB2G1 offer
  // Handle isCategoryBrandB2G1 offer
  if (categoryBrandB2G1Products.length >= 3) {
    // Sort products by price in descending order
    categoryBrandB2G1Products.sort(
      (a, b) => validNumber(b.finalPrice) - validNumber(a.finalPrice)
    );

    const highestPricedProduct = categoryBrandB2G1Products[0]; // Highest priced product
    const middlePricedProduct = categoryBrandB2G1Products[1]; // Middle priced product
    const lowestPricedProduct = categoryBrandB2G1Products[2]; // Lowest priced product (for free)

    const highestProductQuantity = validProductQuantity(
      highestPricedProduct.customerChoiceProductQuantity
    );
    const middleProductQuantity = validProductQuantity(
      middlePricedProduct.customerChoiceProductQuantity
    );
    const lowestProductQuantity = validProductQuantity(
      lowestPricedProduct.customerChoiceProductQuantity
    );

    // Charge for the highest and middle-priced products
    allProductsSubTotal +=
      highestProductQuantity * validNumber(highestPricedProduct.finalPrice);

    allProductsSubTotal +=
      middleProductQuantity * validNumber(middlePricedProduct.finalPrice);

    // Apply the free lowest-priced product
    if (lowestProductQuantity >= 1) {
      saveAmount += validNumber(lowestPricedProduct.finalPrice); // Free the lower priced product
    }

    // If the customer orders more of the same free product, charge for the remaining ones
    if (lowestProductQuantity > 1) {
      allProductsSubTotal +=
        (lowestProductQuantity - 1) *
        validNumber(lowestPricedProduct.finalPrice);
    }
  } else if (categoryBrandB2G1Products.length === 1) {
    const highestPricedProduct = categoryBrandB2G1Products[0];
    const highestProductQuantity = validProductQuantity(
      highestPricedProduct.customerChoiceProductQuantity
    );

    allProductsSubTotal +=
      highestProductQuantity * validNumber(highestPricedProduct.finalPrice);
  } else if (categoryBrandB2G1Products.length === 2) {
    const highestPricedProduct = categoryBrandB2G1Products[0];
    const middlePricedProduct = categoryBrandB2G1Products[1];
    const highestProductQuantity = validProductQuantity(
      highestPricedProduct.customerChoiceProductQuantity
    );
    const middleProductQuantity = validProductQuantity(
      middlePricedProduct.customerChoiceProductQuantity
    );

    allProductsSubTotal +=
      highestProductQuantity * validNumber(highestPricedProduct.finalPrice);

    allProductsSubTotal +=
      middleProductQuantity * validNumber(middlePricedProduct.finalPrice);
  }

  // Calculate total price
  const totalPrice =
    allProductsSubTotal + shippingCost + otherCost - couponDiscount;

  console.log("SubTotal after product offers:", allProductsSubTotal);
  console.log("Save Amount:", saveAmount);
  console.log("Total Price Calculated:", totalPrice);

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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
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
          state.products || [],
          state.shippingCost || 0,
          state.otherCost || 0,
          state.couponDiscount || 0
        );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },
  },
});

export const {
  setLoading,
  setAddToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCarts,
  setDiscountCoupon,
  setShippingCost,
  setOtherCost,
  setAddToCartFromLocalStorage,
} = addToCartProductsSlice.actions;
export default addToCartProductsSlice.reducer;
