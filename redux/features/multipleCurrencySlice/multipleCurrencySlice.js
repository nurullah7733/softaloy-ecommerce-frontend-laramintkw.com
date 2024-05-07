import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  multipleCurrency: [],
  selectedCurrency: "",
};

const multipleCurrencySlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMultipleCurrency(state, actions) {
      state.multipleCurrency = actions.payload;
    },
    setSelectedCurrency(state, actions) {
      state.selectedCurrency = actions.payload;
    },
  },
});

export const { setMultipleCurrency, setSelectedCurrency } =
  multipleCurrencySlice.actions;

export default multipleCurrencySlice.reducer;
