import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  multipleCurrency: [],
  selectedCurrency: [],
};

const multipleCurrencySlice = createSlice({
  name: "multipleCurrency",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setMultipleCurrency(state, actions) {
      state.multipleCurrency = actions.payload;
    },
    setSelectedCurrency(state, actions) {
      state.selectedCurrency = actions.payload;
    },
  },
});

export const { setLoading, setMultipleCurrency, setSelectedCurrency } =
  multipleCurrencySlice.actions;

export default multipleCurrencySlice.reducer;
