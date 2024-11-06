import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductInterFace {
  productId: number;
  quantity: number;
}

interface cartProductsWithImage {
  image: string;
  title: string;
  price: number;
  products: ProductInterFace[];
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
        products: ProductInterFace[];
        // productId: number;
        // quantity: number;
      }>
    ) => {
      const cartItem = state.find((item) =>
        item.products.find(
          (product) => product.productId === action.payload.productId
        )
      );
      if (cartItem) {
        console.log("cartItem:", JSON.parse(JSON.stringify(cartItem)));
      } else {
        state.push({
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          productId: action.payload.productId,
        });
      }
      // if (cartItem) {
      //   console.log("cartItem",cartItem)
      // } else {
      //   state.push({
      //     image: action.payload.image,
      //     title: action.payload.title,
      //       price: action.payload.price,
      //       products: [
      //         {
      //           productId: action.payload.productId,
      //           quantity: 1,
      //         },
      //       ]
      //   })
      // }
      // console.log(cartItem,"cartItem")
      // console.log(state,"state")
      // console.log(action,"action")
      // return [...state,action.payload]

      // const cartItem = state.find((item) => item
      // item.products.some(
      //   (product) => product.productId === action.payload.productId
      // )
      // );

      // if (cartItem) {
      //   const product = cartItem.products.find(
      //     (product) => product.productId === action.payload.productId
      //   );

      //   if (product) {
      //     //   product.quantity += action.payload.quantity;
      //     product.quantity += 1;
      //   } else {
      //     cartItem.products.push({
      //       productId: action.payload.productId,
      //       quantity: action.payload.quantity,
      //     });
      //   }
      // } else {
      //   state.push({
      //     image: action.payload.image,
      //     title: action.payload.title,
      //     price: action.payload.price,
      //     products: [
      //       {
      //         productId: action.payload.productId,
      //         quantity: action.payload.quantity,
      //       },
      //     ],
      //   });
      // }
    },
    productDecreament: (
      state,
      action: PayloadAction<{
        productId: number | null;
        quantity: number | null;
      }>
    ) => {
      const cartItem = state.find((item) =>
        item.products.some(
          (product) => product.productId === action.payload.productId
        )
      );

      if (cartItem) {
        const product = cartItem.products.find(
          (product) => product.productId === action.payload.productId
        );

        if (product) {
          //   if (product.quantity && product.quantity > action.payload.quantity) {
          // product.quantity -= action.payload.quantity;
          product.quantity -= 1;
          //   } else {
          //     cartItem.products = cartItem.products.filter(
          //       (product) => product.productId !== action.payload.productId
          //     );
          //   }
        }

        if (cartItem.products.length === 0) {
          return state.filter((item) => item !== cartItem);
        }
      }
    },
  },
});

export const { productIncreament, productDecreament } =
  CartProductsWithImageSlice.actions;
export default CartProductsWithImageSlice.reducer;
