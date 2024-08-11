import { configureStore } from "@reduxjs/toolkit";
import skibidiflixReducer from "./skibidiflixSlice";

export default configureStore({
  reducer: {
    skibidiflixData: skibidiflixReducer,
  },
});
