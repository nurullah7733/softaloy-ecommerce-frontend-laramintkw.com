import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setCategory(state, actions) {
      state.categories = actions.payload;
    },
  },
});

export const { setLoading, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
