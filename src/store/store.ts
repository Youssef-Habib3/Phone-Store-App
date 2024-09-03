import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import cancelSlice from "./features/cancelSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    cancel: cancelSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
