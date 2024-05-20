import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  productDetails: [],
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setProductDetails(state, actions) {
      state.productDetails = actions.payload;
    },
  },
});

export const { setLoading, setProductDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
