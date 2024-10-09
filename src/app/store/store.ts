import { configureStore } from "@reduxjs/toolkit";
import CartEntityReducer from "../../features/cart/cartEntitySlice";
import CartProductsWithImageReducer from "../../features/cart/cartProductsWithImage";

export const store = configureStore({
    reducer: {
        cartEntity: CartEntityReducer,
        cartProductsWithImage: CartProductsWithImageReducer
    },
  })

  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch