import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
};

const relatedProductsSlice = createSlice({
  name: "relatedProducts",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setRelatedProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const { setLoading, setRelatedProducts } = relatedProductsSlice.actions;

export default relatedProductsSlice.reducer;
