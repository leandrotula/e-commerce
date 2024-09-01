import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    currentItem: {},
    operationState: 'loading'
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(product =>
                parseInt(product.id) === parseInt(action.payload.id));

            if (itemIndex !== -1) {
                state.items[itemIndex] = {
                    ...state.items[itemIndex],
                    quantity: state.items[itemIndex].quantity + 1,
                    total_price: (state.items[itemIndex].quantity + 1) * state.items[itemIndex].price
                };
                state.currentItem = {...state.items[itemIndex]};
            } else {
                state.items.push({...action.payload, quantity: 0});
            }
        },
        removeItem: (state, action) => {
            const itemFound = state.items.find(item => item.id === action.payload.id);
            if (itemFound && itemFound.quantity > 0) {
                itemFound.quantity--;
                if (itemFound.quantity === 1) {
                    itemFound.total_price = itemFound.price
                }
                itemFound.total_price = itemFound.quantity * itemFound.price;
                state.currentItem = itemFound;
            }
        },
        setCurrentItem: (state, action) => {
            state.currentItem = {...action.payload, quantity: action.payload.quantity};
        },
        updateOperationState: (state, action) => {
            state.operationState = action.payload;
        },
        setErrorState: (state, action) => {
            state.operationState = 'error';
            state.error = action.payload;
        },
        setAllItems: (state, action) => {
            state.items = action.payload;
        }
    }
})

export const
    {
        addToCart,
        removeItem, decrementQuantity,
        setCurrentItem,
        updateOperationState, setAllItems
    } = cartSlice.actions

export default cartSlice.reducer