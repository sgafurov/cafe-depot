import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartShown: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      console.log("Adding to cart:", action);
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.cartItems.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    isCartShown: (state, action) => {
      state.isCartShown = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, isCartShown } = cartSlice.actions;

export default cartSlice.reducer;
