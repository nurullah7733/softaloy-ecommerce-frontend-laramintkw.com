import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  mainSliders: [],
};

const mainSlidersSlice = createSlice({
  name: "mainSliders",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setMainSliders(state, actions) {
      state.mainSliders = actions.payload;
    },
  },
});

export const { setLoading, setMainSliders } = mainSlidersSlice.actions;

export default mainSlidersSlice.reducer;
