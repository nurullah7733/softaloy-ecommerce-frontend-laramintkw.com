import { createSlice } from "@reduxjs/toolkit";
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

  let allProductsSubTotalBeforeDiscount = 0;
  let allProductsSubTotal = 0;
  let saveAmount = 0;

  let categoryBrandB1G1Products = {};
  let categoryBrandB2G1Products = {};

  // Initialize an array to store the prices of valid products for B2G1 offer
  let pricesForB2G1 = [];

  products.forEach((product) => {
    const quantity = validProductQuantity(
      product?.customerChoiceProductQuantity
    );
    const price = validNumber(product?.finalPrice);

    // Handle isEachProductB1G1 offer
    if (product?.offers?.isEachProductB1G1) {
      if (quantity >= 2) {
        const freeItems = Math.floor(quantity / 2);
        const paidItems = quantity - freeItems;
        allProductsSubTotal += paidItems * validNumber(price);
        saveAmount += freeItems * validNumber(price);
      } else {
        allProductsSubTotal += quantity * validNumber(price);
      }
      allProductsSubTotalBeforeDiscount += quantity * validNumber(price);
      return; // Skip further processing for this product
    }

    // Handle isEachProductB2G1 offer
    if (product?.offers?.isEachProductB2G1) {
      const setsOfThree = Math.floor(quantity / 3);
      const paidItems = quantity - setsOfThree;
      allProductsSubTotal += paidItems * validNumber(price);
      saveAmount += setsOfThree * validNumber(price);
      allProductsSubTotalBeforeDiscount += quantity * validNumber(price);
      return; // Skip further processing for this product
    }

    // Collect products for B1G1 and B2G1 offers based on categoryId and brandId
    if (product?.offers?.isCategoryBrandB1G1) {
      const key = `${product.categoryId}-${product.brandId}`;
      if (!categoryBrandB1G1Products[key]) {
        categoryBrandB1G1Products[key] = [];
      }
      categoryBrandB1G1Products[key].push({ ...product, quantity });
    } else if (product?.offers?.isCategoryBrandB2G1) {
      const key = `${product.categoryId}-${product.brandId}`;
      if (!categoryBrandB2G1Products[key]) {
        categoryBrandB2G1Products[key] = [];
      }
      categoryBrandB2G1Products[key].push({ ...product, quantity });
    } else {
      // Regular product calculation
      allProductsSubTotal += quantity * price;
      allProductsSubTotalBeforeDiscount += quantity * price;
    }
  });

  // Handle isCategoryBrandB1G1 offer (same or different products)
  for (const key in categoryBrandB1G1Products) {
    const products = categoryBrandB1G1Products[key];
    if (products.length > 1) {
      products.sort(
        (a, b) => validNumber(b.finalPrice) - validNumber(a.finalPrice)
      );

      const paidProduct = products[0]; // Most expensive product
      const freeProduct = products[1]; // Least expensive product

      const paidProductQuantity = validProductQuantity(paidProduct?.quantity);
      const freeProductQuantity = validProductQuantity(freeProduct?.quantity);

      allProductsSubTotal +=
        paidProductQuantity * validNumber(paidProduct.finalPrice);
      allProductsSubTotalBeforeDiscount +=
        paidProductQuantity * validNumber(paidProduct.finalPrice);

      if (freeProductQuantity > 1) {
        saveAmount += validNumber(freeProduct.finalPrice); // Only one product free
        allProductsSubTotal +=
          (freeProductQuantity - 1) * validNumber(freeProduct.finalPrice); // Charge for the remaining items
        allProductsSubTotalBeforeDiscount +=
          freeProductQuantity * validNumber(freeProduct.finalPrice);
      } else {
        saveAmount += validNumber(freeProduct.finalPrice); // If only one free product
        allProductsSubTotalBeforeDiscount +=
          freeProductQuantity * validNumber(freeProduct.finalPrice);
      }
    } else if (products.length === 1) {
      const singleProduct = products[0];
      const quantity = validProductQuantity(singleProduct?.quantity);

      // Apply B1G1 for the same product
      if (quantity >= 2) {
        const freeItems = Math.floor(quantity / 2);
        const paidItems = quantity - freeItems;
        allProductsSubTotal +=
          paidItems * validNumber(singleProduct.finalPrice);
        saveAmount += freeItems * validNumber(singleProduct.finalPrice);
        allProductsSubTotalBeforeDiscount +=
          quantity * validNumber(singleProduct.finalPrice);
      } else {
        allProductsSubTotal += quantity * validNumber(singleProduct.finalPrice);
        allProductsSubTotalBeforeDiscount +=
          quantity * validNumber(singleProduct.finalPrice);
      }
    }
  }

  // Handle isCategoryBrandB2G1 offer (same or different products)
  for (const key in categoryBrandB2G1Products) {
    const products = categoryBrandB2G1Products[key];

    // Collect prices for B2G1 offer
    for (const product of products) {
      const quantity = validProductQuantity(product.quantity);
      for (let i = 0; i < quantity; i++) {
        pricesForB2G1.push(validNumber(product.finalPrice));
      }
    }

    // Sort prices to find the cheapest ones
    pricesForB2G1.sort((a, b) => a - b);

    // Calculate the number of free products (1 free for every 3 products)
    const totalProducts = pricesForB2G1.length;
    const freeProductsCount = Math.floor(totalProducts / 3); // 1 free for every 3 products

    if (freeProductsCount > 0) {
      const cheapestPrice = pricesForB2G1[0];
      saveAmount += freeProductsCount * cheapestPrice; // Total savings from free products
    }

    // Total price for the valid products
    allProductsSubTotalBeforeDiscount += pricesForB2G1.reduce(
      (acc, curr) => acc + curr,
      0
    );
    // The subtotal after discounts
    allProductsSubTotal +=
      pricesForB2G1.reduce((acc, curr) => acc + curr, 0) -
      freeProductsCount * pricesForB2G1[0]; // Deduct the cheapest product's price for the free items

    // Reset pricesForB2G1 for the next group
    pricesForB2G1 = [];
  }

  const totalPrice =
    validNumber(allProductsSubTotal) +
    validNumber(shippingCost) +
    validNumber(otherCost) -
    validNumber(couponDiscount);

  return {
    allProductsSubTotalBeforeDiscount:
      allProductsSubTotalBeforeDiscount.toFixed(3),
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
  allProductsSubTotalBeforeDiscount: 0,
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

      delete state.productQuantities[productId];

      setAddToCartInLocalStorage(state.products);

      const {
        allProductsSubTotalBeforeDiscount,
        allProductsSubTotal,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );
      state.allProductsSubTotal = allProductsSubTotal;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
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

      const {
        allProductsSubTotal,
        allProductsSubTotalBeforeDiscount,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );

      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    decreaseQuantity(state, actions) {
      const productId = actions.payload;
      const productInCart = state.products.find(
        (product) => product._id === productId
      );

      if (productInCart && productInCart.customerChoiceProductQuantity > 1) {
        productInCart.customerChoiceProductQuantity--;
      }

      const {
        allProductsSubTotal,
        allProductsSubTotalBeforeDiscount,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );

      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    removeProductFromCarts(state, actions) {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload
      );
      const {
        allProductsSubTotal,
        allProductsSubTotalBeforeDiscount,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
      state.saveAmount = saveAmount;
    },

    setDiscountCoupon(state, actions) {
      state.couponDiscount = actions.payload;
      const {
        allProductsSubTotal,
        allProductsSubTotalBeforeDiscount,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
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
      state.allProductsSubTotalBeforeDiscount = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.saveAmount = saveAmount;
    },

    setOtherCost(state, actions) {
      state.otherCost = actions.payload;
      const {
        allProductsSubTotal,
        allProductsSubTotalBeforeDiscount,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
      state.saveAmount = saveAmount;
    },

    setAddToCartFromLocalStorage(state, actions) {
      state.products = actions.payload;
      const {
        allProductsSubTotal,
        allProductsSubTotalBeforeDiscount,
        totalPrice,
        saveAmount,
      } = calculateSubTotalAndTotal(
        state.products || [],
        state.shippingCost || 0,
        state.otherCost || 0,
        state.couponDiscount || 0
      );
      setAddToCartInLocalStorage(state.products);
      state.allProductsSubTotal = allProductsSubTotal;
      state.totalPrice = totalPrice;
      state.allProductsSubTotalBeforeDiscount =
        allProductsSubTotalBeforeDiscount;
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
