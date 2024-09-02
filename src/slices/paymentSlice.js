import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    paymentState: 'no_payment',
    error: ""
}

export const PaymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        updatePaymentState: (state, action) => {
            state.paymentState = action.payload;
        },
        setErrorState: (state, action) => {
            state.paymentState = 'error';
            state.error = action.payload;
        },
    }
})

export const
    {
        updatePaymentState,
        setErrorState
    } = PaymentSlice.actions

export default PaymentSlice.reducer