import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
    count:0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        hideNav: (state) => {
            state.value = !state.value;
        },
    },
})

export const { increment, decrement, incrementByAmount, hideNav } = counterSlice.actions

export default counterSlice.reducer
