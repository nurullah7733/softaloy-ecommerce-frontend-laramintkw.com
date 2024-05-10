import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
};

const bestSalesSlice = createSlice({
  name: "bestSales",
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

export const { setLoading, setProducts } = bestSalesSlice.actions;

export default bestSalesSlice.reducer;
