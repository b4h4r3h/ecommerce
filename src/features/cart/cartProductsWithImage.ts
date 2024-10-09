import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductInterFace {
    productId: number | null;
    quantity: number | null
}

interface cartProductsWithImage {
    // value: {
    //   userId: number | null;
    //   date: number | null;
    image: string | null;
    title: string | null;
    price: number | null;
    products: undefined | ProductInterFace[]
    // };
  }

const initialState : cartProductsWithImage[] = []

export const CartProductsWithImageSlice = createSlice({
    name: "cartProductsWithImage",
    initialState,
    reducers: {
        productIncreament: (state, action: PayloadAction<{ image: string | null; title: string | null; price: number | null; productId: number; quantity: number; }>) => {
            const cartItem = state.find(item => item.products.some(product => product.productId === action.payload.productId));

            if (cartItem) {
                const product = cartItem.products.find(product => product.productId === action.payload.productId);
                
                if (product) {
                    product.quantity += action.payload.quantity;
                } else {
                    cartItem.products.push({ productId: action.payload.productId, quantity: action.payload.quantity });
                }
            } 
            else {
                state.push({
                    image: action.payload.image,
                    title: action.payload.title,
                    price: action.payload.price,
                    products: [{ productId: action.payload.productId, quantity: action.payload.quantity }]
                });
            }
        },
        productDecreament: (state, action: PayloadAction<{ productId: number; quantity: number; }>) => {
            const cartItem = state.find(item => item.products.some(product => product.productId === action.payload.productId));

            if (cartItem) {
                const product = cartItem.products.find(product => product.productId === action.payload.productId);
                
                if (product) {
                    if (product.quantity && product.quantity > action.payload.quantity) {
                        product.quantity -= action.payload.quantity;
                    } else {
                        cartItem.products = cartItem.products.filter(product => product.productId !== action.payload.productId);
                    }
                }

                if (cartItem.products.length === 0) {
                    return state.filter(item => item !== cartItem);
                }
            }
        },
    },
});


export const {productIncreament, productDecreament} = CartProductsWithImageSlice.actions;
export default CartProductsWithImageSlice.reducer