import { configureStore } from "@reduxjs/toolkit";
import imageSlice  from "./Appslice";

const imagestore = configureStore({
  reducer: {
    auth: imageSlice,
  },
});

export default imagestore;
