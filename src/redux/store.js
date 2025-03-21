import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./camperSlice";

const store = configureStore({
  reducer: {
    campers: camperReducer,
  },
});

export default store;
