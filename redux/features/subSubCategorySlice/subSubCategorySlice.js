import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  subSubCategories: [],
};

const subSubCategoriesSlice = createSlice({
  name: "subsubcategories",
  initialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setSubSubCategories(state, actions) {
      state.subSubCategories = actions.payload;
    },
  },
});

export const { setLoading, setSubSubCategories } =
  subSubCategoriesSlice.actions;

export default subSubCategoriesSlice.reducer;
