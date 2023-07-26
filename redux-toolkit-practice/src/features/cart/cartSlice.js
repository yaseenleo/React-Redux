//A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file.

import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice, "cart slice");

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
//export default object.property
