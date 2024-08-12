import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            state.items.push(action.payload)
        },
    },
})

export const { updateCart } = cartSlice.actions

export default cartSlice.reducer