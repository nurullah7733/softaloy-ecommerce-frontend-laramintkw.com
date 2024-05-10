import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
};

const newProductsSlice = createSlice({
  name: "newProducts",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const { setLoading, setProducts } = newProductsSlice.actions;

export default newProductsSlice.reducer;
