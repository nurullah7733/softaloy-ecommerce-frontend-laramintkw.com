import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  total: 0,
  products: [],
};

const bestSalesSlice = createSlice({
  name: "bestSales",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setTotal(state, actions) {
      state.total = actions.payload;
    },
    setProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export const { setLoading, setTotal, setProducts } = bestSalesSlice.actions;

export default bestSalesSlice.reducer;
