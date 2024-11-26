import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartProductsWithImage {
  image: string;
  title: string;
  price: number;
  productId: number;
  quantity: number;
  unitPrice: number;
}

const initialState: cartProductsWithImage[] = [];

export const CartProductsWithImageSlice = createSlice({
  name: "cartProductsWithImage",
  initialState,
  reducers: {
    productIncreament: (
      state,
      action: PayloadAction<{
        image: string ;
        title: string ;
        price: number ;
        productId: number ;
      }>
    ) => {

      const cartItem = state.find(
        (product) => product.productId === action.payload.productId
      );

      if (cartItem) {
        cartItem.quantity += 1
        // cartItem.price += action.payload.price
        cartItem.unitPrice = +(cartItem.price * cartItem.quantity).toFixed(2)
      } else {
        state.push({
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          productId: action.payload.productId,
          unitPrice: action.payload.price,
          quantity: 1,
        });
      }
    },
    productDecreament: (
      state,
      action: PayloadAction<{
        productId: number;
        price: number;
      }>
    ) => {
      const cartItem = state.find(
        (product) => product.productId === action.payload.productId);
      if ( cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1
        cartItem.unitPrice = +(cartItem.price * cartItem.quantity).toFixed(2)
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
