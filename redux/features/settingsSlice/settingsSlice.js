import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutUs: "",
  socialLinks: [],
  shippingCost: [],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAboutUs(state, actions) {
      state.aboutUs = actions.payload;
    },
    setSocialLinks(state, actions) {
      state.socialLinks = actions.payload;
    },
    setShippingCost(state, actions) {
      state.shippingCost = actions.payload;
    },
  },
});

export const {
  setAboutUs,
  setSocialLinks,
  setShippingCost,
  setDiscountCoupon,
} = settingsSlice.actions;

export default settingsSlice.reducer;
