import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/getProdtucts";

const initialState = {
  products: [],
  loading: false,
  error: "",
};
const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: "",
      };
    },
    [getProducts.pending]: (state, action) => {
      return {
        products: [],
        loading: true,
        error: "",
      };
    },
    [getProducts.rejected]: (state, action) => {
      return {
        products: [],
        loading: false,
        error: action.error.message,
      };
    },
  },
});

export default ProductSlice.reducer;
