import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartSidebarOpen: false,
};

const sidebarCartsOpenSlice = createSlice({
  name: "sidebarCartsOpen",
  initialState,
  reducers: {
    setCartSidebarOpen(state) {
      state.isCartSidebarOpen = !state.isCartSidebarOpen;
    },
  },
});

export const { setCartSidebarOpen } = sidebarCartsOpenSlice.actions;

export default sidebarCartsOpenSlice.reducer;
