import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Products/ProductsSlice";
import CartSlice from "./Products/CartSlice";

export const store = configureStore({
  reducer: {
    productState: ProductsSlice,
    CartState: CartSlice,
  },
});
