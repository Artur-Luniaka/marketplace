import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./goods/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goods: goodsReducer,
  },
});
