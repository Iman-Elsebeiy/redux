import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsR"
import cartReducer from "./cartR"


export  const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
  }
});