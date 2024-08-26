import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  mainSlidersForMobile: [],
};

const mainSlidersForMobileSlice = createSlice({
  name: "mainSlidersForMobile",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setMainSlidersForMobile(state, actions) {
      state.mainSliders = actions.payload;
    },
  },
});

export const { setLoading, setMainSlidersForMobile } =
  mainSlidersForMobileSlice.actions;

export default mainSlidersForMobileSlice.reducer;
