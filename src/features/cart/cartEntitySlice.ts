import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  productId: undefined | number;
  quantity: undefined | number;
}

interface CartEntityInterface {
  value: {
    userId: number | null;
    date: number | null;
    products: Product[];
  };
}

const initialState: CartEntityInterface = {
  value: {
    userId: null,
    date: null,
    products: [],
  },
};

export const CartEntitySlice = createSlice({
  name: "cartEntity",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const item = state.value.products.find(product => product.productId === action.payload.productId)
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.value.products.push(action.payload);
      }
    },
    decreaseProduct: (state,action:PayloadAction<Product>) => {
        const item = state.value.products.find((item: Product) => item.productId === action.payload.productId)
        if (item?.quantity <= 1) {
            state.value.products = state.value.products.filter((item,id) => item.productId !== action.payload.productId)
        }
        item.quantity -= action.payload.quantity
    }
  },
});

export const { addProduct, decreaseProduct } = CartEntitySlice.actions;
export default CartEntitySlice.reducer;