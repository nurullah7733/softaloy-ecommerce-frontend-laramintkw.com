import { configureStore } from "@reduxjs/toolkit";
import multipleCurrencySlice from "./features/multipleCurrencySlice/multipleCurrencySlice";
import bestSalesSlice from "./features/bestSalesSlice/bestSalesSlice";
import trendingProductsSlice from "./features/trendingProductsSlice/trendingProductsSlice";
import newProductsSlice from "./features/newProductsSlice/newProductsSlice";
import mainSlidersSlice from "./features/getMainSliders/getMainSliders";
import brandsSlice from "./features/getBrands/getBrands";

export default configureStore({
  reducer: {
    multipleCurrency: multipleCurrencySlice,
    bestSales: bestSalesSlice,
    trendingProducts: trendingProductsSlice,
    newProducts: newProductsSlice,
    mainSliders: mainSlidersSlice,
    brands: brandsSlice,
  },
});
