import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../slices/cartSlice.js'

export const commerceStore = configureStore({
    reducer: {
        cart: CartReducer
    },
})