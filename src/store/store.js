import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    userDetail: userReducer,
    // ...more reducers can be added here.
  },
  // other store option
  //middleware: [],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
