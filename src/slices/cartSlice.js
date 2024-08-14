import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    quantity: 0,
    isOk: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            const existingProduct = state.items.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.price = existingProduct.price * existingProduct.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        getQuantity: (state, action) => {
            state.quantity = state.items.find(product => product.id === action.payload.id).quantity;

        }
    },

})

export const { updateCart, getQuantity } = cartSlice.actions

export default cartSlice.reducer