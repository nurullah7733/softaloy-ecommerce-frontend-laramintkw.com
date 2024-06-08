import { configureStore } from "@reduxjs/toolkit";
import multipleCurrencySlice from "./features/multipleCurrencySlice/multipleCurrencySlice";
import bestSalesSlice from "./features/bestSalesSlice/bestSalesSlice";
import trendingProductsSlice from "./features/trendingProductsSlice/trendingProductsSlice";
import newProductsSlice from "./features/newProductsSlice/newProductsSlice";
import mainSlidersSlice from "./features/getMainSliders/getMainSliders";
import brandsSlice from "./features/getBrands/getBrands";
import getCategorySlice from "./features/getCategorySlice/getCategorySlice";
import megaMenuProductsSlice from "./features/megaMenuProductsSlice/megaMenuProductsSlice";
import productDetailsSlice from "./features/productDetailsSlice/productDetailsSlice";
import relatedProductsSlice from "./features/relatedProductsSlice/relatedProductsSlice";
import allProductsSlice from "./features/allProductsSlice/allProductsSlice";
import subSubCategoriesSlice from "./features/subSubCategorySlice/subSubCategorySlice";
import searchProductsSlice from "./features/searchProductsSlice/searchProductsSlice";
import addToCartProductsSlice from "./features/addToCartSlice/addToCartSlice";
import settingsSlice from "./features/settingsSlice/settingsSlice";
import shippingAddressFormSlice from "./features/shippingAddressFormSlice/shippingAddressFormSlice";
import sidebarCartsOpenSlice from "./features/sidebarCartsOpen/sidebarCartsOpenSlice";

export default configureStore({
  reducer: {
    multipleCurrency: multipleCurrencySlice,
    bestSales: bestSalesSlice,
    trendingProducts: trendingProductsSlice,
    newProducts: newProductsSlice,
    mainSliders: mainSlidersSlice,
    brands: brandsSlice,
    categories: getCategorySlice,
    megaMenuProducts: megaMenuProductsSlice,
    productDetails: productDetailsSlice,
    relatedProducts: relatedProductsSlice,
    allProducts: allProductsSlice,
    subSubCategories: subSubCategoriesSlice,
    searchProducts: searchProductsSlice,
    addToCarts: addToCartProductsSlice,
    settings: settingsSlice,
    shippingAddressForm: shippingAddressFormSlice,
    sidebarCartsOpen: sidebarCartsOpenSlice,
  },
});
