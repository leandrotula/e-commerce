import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../slices/cartSlice.js'
import PaymentReducer from '../slices/paymentSlice.js'

export const commerceStore = configureStore({
    reducer: {
        cart: CartReducer,
        payment: PaymentReducer
    },
})