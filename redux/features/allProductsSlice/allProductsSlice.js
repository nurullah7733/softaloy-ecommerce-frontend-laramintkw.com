import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  total: 0,
  products: [],
};

const allProductsSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setTotal(state, actions) {
      state.total = actions.payload;
    },
    setAllProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const { setLoading, setTotal, setAllProducts } =
  allProductsSlice.actions;

export default allProductsSlice.reducer;
