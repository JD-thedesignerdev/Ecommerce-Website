"use client"
import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        appendCart: (state, action) => {
            state.cart.push(action.payload);
        }
    }
})

export const { appendCart } = CartSlice.actions;