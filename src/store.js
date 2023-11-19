import { configureStore } from "@reduxjs/toolkit";
import fooSlice from "./redux/fooSlice";
import modalSlice from "./redux/modalSlice";
import postSlice from "./app/postSlice";
import testSlice from "./redux/testSlice";

export const store = configureStore({
  reducer: {
    // cart: fooSlice,
    // modal: modalSlice,
    // posts: postSlice,
    testCart: testSlice,
  },
});
