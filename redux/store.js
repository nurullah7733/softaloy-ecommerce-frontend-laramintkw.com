import { configureStore } from "@reduxjs/toolkit";
import multipleCurrencySlice from "./features/multipleCurrencySlice/multipleCurrencySlice";

export default configureStore({
  reducer: {
    multipleCurrency: multipleCurrencySlice,
  },
});
