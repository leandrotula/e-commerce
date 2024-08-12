import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isOk: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            const isPresent = state.items.find(product => product.id === action.payload.id)
            if (!isPresent) {
                state.items.push(action.payload)
                state.isOk = true
            } else {
                state.isOk = false
            }
        },
        resetCart: (state) => {
            state.isOk = false
        }
    },

})

export const { updateCart, resetCart } = cartSlice.actions

export default cartSlice.reducer