import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
};

const megaMenuProductsSlice = createSlice({
  name: "megamenuProducts",
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

export const { setLoading, setProducts } = megaMenuProductsSlice.actions;

export default megaMenuProductsSlice.reducer;
