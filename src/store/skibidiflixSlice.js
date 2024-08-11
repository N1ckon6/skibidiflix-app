import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageURL: "",
  bannerData: [],
};

export const skibidiflixSlice = createSlice({
  name: "skibidiflix",
  initialState,
  reducers: {
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});

export const { setImageURL, setBannerData } = skibidiflixSlice.actions;

export default skibidiflixSlice.reducer;
