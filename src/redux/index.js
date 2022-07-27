import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './card/reducer'

export const store = configureStore({
  reducer:{
    cart: cartReducer,
  },
})