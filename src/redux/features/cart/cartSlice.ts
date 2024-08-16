import { TProduct } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export type TCartItem = {
  product: TProduct;
  quantity: number;
};
type TInitialState = {
  cartItems: TCartItem[];
};

const initialState: TInitialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const existingItem = state.cartItems.find((item) => item.product._id === payload.product._id);
      if (!existingItem) {
        state.cartItems.push({ product: payload.product, quantity: payload.quantity });
      }
    },
    removeFromCart(state, { payload }) {
      state.cartItems = state.cartItems.filter((item) => item.product._id !== payload);
    },

    increaseQuantity(state, { payload }) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.product._id === payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity(state, { payload }) {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.product._id === payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
