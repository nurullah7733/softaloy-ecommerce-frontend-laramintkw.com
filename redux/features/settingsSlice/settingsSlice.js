import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutUs: "",
  socialLinks: [],
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
  },
});

export const { setAboutUs, setSocialLinks } = settingsSlice.actions;

export default settingsSlice.reducer;
