import { createSlice, current } from "@reduxjs/toolkit";
import {
  setAddToCartInLocalStorage,
  setSubTotalProductsPriceInLocalStorage,
  setTotalProductsPriceInLocalStorage,
} from "../../../utils/sessionHelper/sessionHelper";

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

  let categoryBrandB1G1Products = [];
  let categoryBrandB2G1Products = [];

  products.forEach((product) => {
    const quantity = validProductQuantity(
      product?.customerChoiceProductQuantity
    );
    const price = validNumber(product?.finalPrice);

    // Handling B1G1 offer for individual products
    if (product?.offers?.isEachProductB1G1 && quantity >= 2) {
      const freeItems = Math.floor(quantity / 2);
      const paidItems = quantity - freeItems;
      allProductsSubTotal += paidItems * price;
      saveAmount += freeItems * price;
    }
    // Handling B2G1 offer for individual products
    else if (product?.offers?.isEachProductB2G1 && quantity >= 3) {
      const freeItems = Math.floor(quantity / 3);
      const paidItems = quantity - freeItems;
      allProductsSubTotal += paidItems * price;
      saveAmount += freeItems * price;
    }
    // Push category/brand B1G1 products to list
    else if (product?.offers?.isCategoryBrandB1G1) {
      categoryBrandB1G1Products.push(product);
    }
    // Push category/brand B2G1 products to list
    else if (product?.offers?.isCategoryBrandB2G1) {
      categoryBrandB2G1Products.push(product);
    }
    // Regular product calculation
    else {
      allProductsSubTotal += quantity * price;
    }
  });

  // Handle isCategoryBrandB1G1 offer (same or different products)
  if (categoryBrandB1G1Products.length > 1) {
    categoryBrandB1G1Products.sort(
      (a, b) => validNumber(b.finalPrice) - validNumber(a.finalPrice)
    );

    const paidProduct = categoryBrandB1G1Products[0]; // Most expensive product
    const freeProduct = categoryBrandB1G1Products[1]; // Least expensive product

    allProductsSubTotal +=
      validProductQuantity(paidProduct?.customerChoiceProductQuantity) *
      validNumber(paidProduct.finalPrice);

    if (validProductQuantity(freeProduct?.customerChoiceProductQuantity) > 1) {
      saveAmount += validNumber(freeProduct.finalPrice); // Only one product free
      allProductsSubTotal +=
        (validProductQuantity(freeProduct?.customerChoiceProductQuantity) - 1) *
        validNumber(freeProduct.finalPrice); // Charge for the remaining items
    } else {
      saveAmount += validNumber(freeProduct.finalPrice); // If only one free product
    }
  } else if (categoryBrandB1G1Products.length === 1) {
    const singleProduct = categoryBrandB1G1Products[0];
    const quantity = validProductQuantity(
      singleProduct?.customerChoiceProductQuantity
    );

    // Apply B1G1 for the same product
    if (quantity >= 2) {
      const freeItems = Math.floor(quantity / 2);
      const paidItems = quantity - freeItems;
      allProductsSubTotal += paidItems * validNumber(singleProduct.finalPrice);
      saveAmount += freeItems * validNumber(singleProduct.finalPrice);
    } else {
      allProductsSubTotal += quantity * validNumber(singleProduct.finalPrice);
    }
  }

  // Handle isCategoryBrandB2G1 offer (same or different products)
  if (categoryBrandB2G1Products.length > 0) {
    // Sort by price, ascending (cheapest first)
    categoryBrandB2G1Products.sort(
      (a, b) => validNumber(a.finalPrice) - validNumber(b.finalPrice)
    );

    let totalProductsCount = categoryBrandB2G1Products.reduce(
      (sum, product) =>
        sum + validProductQuantity(product?.customerChoiceProductQuantity),
      0
    );

    let freeProductsCount = Math.floor(totalProductsCount / 3); // For every 3 products, 1 is free

    categoryBrandB2G1Products.forEach((product) => {
      const quantity = validProductQuantity(
        product?.customerChoiceProductQuantity
      );
      const price = validNumber(product.finalPrice);

      if (freeProductsCount > 0) {
        if (quantity <= freeProductsCount) {
          // If all quantity of this product is free
          saveAmount += quantity * price;
          freeProductsCount -= quantity;
        } else {
          // Some quantity of this product is free, the rest are charged
          saveAmount += freeProductsCount * price;

          allProductsSubTotal += (quantity - freeProductsCount) * price;

          freeProductsCount = 0;
        }
      } else {
        // All products are charged if no more free products are left
        allProductsSubTotal += quantity * price;
      }
    });
  }

  const totalPrice =
    validNumber(allProductsSubTotal) +
    validNumber(shippingCost) +
    validNumber(otherCost) -
    validNumber(couponDiscount);

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
