import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartProductsWithImage {
  image: string;
  title: string;
  price: number;
  productId: number;
  quantity: number;
}

const initialState: cartProductsWithImage[] = [];

export const CartProductsWithImageSlice = createSlice({
  name: "cartProductsWithImage",
  initialState,
  reducers: {
    productIncreament: (
      state,
      action: PayloadAction<{
        image: string;
        title: string;
        price: number;
        productId: number;
      }>
    ) => {

      const cartItem = state.find(
        (product) => product.productId === action.payload.productId
      );

      if (cartItem) {
        cartItem.quantity += 1
      } else {
        state.push({
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          productId: action.payload.productId,
          quantity: 1,
        });
      }
    },
    productDecreament: (
      state,
      action: PayloadAction<{
        productId: number
      }>
    ) => {
      const cartItem = state.find(
        (product) => product.productId === action.payload.productId);
      if ( cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1
      } 
      else {
        const restOfCart = state.filter((product) => product.productId !== action.payload.productId);
        return restOfCart
      }
    },
  },
});

export const { productIncreament, productDecreament } =
  CartProductsWithImageSlice.actions;
export default CartProductsWithImageSlice.reducer;
