import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
  name: "selectedProducts",
  initialState: {},

  reducers: {
    selectedProducts: (state, action) => {
      return { ...state, ...action.payload };
    },

    removeSelectedProduct: () => {
      return {};
    },
  },
});

export const { selectedProducts, removeSelectedProduct } =
  selectedProductSlice.actions;

export default selectedProductSlice.reducer;
