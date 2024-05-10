import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  brands: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setBrnads(state, actions) {
      state.brands = actions.payload;
    },
  },
});

export const { setLoading, setBrnads } = brandsSlice.actions;

export default brandsSlice.reducer;
