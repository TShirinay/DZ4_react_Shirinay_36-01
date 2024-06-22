import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    counter: 0
}


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers:{
        increment: (state, action) => {
           state.counter = state.counter + action.payload
        },
        decrement: (state, action) => {
            state.counter = state.counter - action.payload
        },
        increment10: (state, action) => {
            state.counter = state.counter + action.payload
        },
        decrement10: (state, action) => {
            state.counter = state.counter - action.payload
        },
        resetReducer:(state, action) => {
            state.counter = 0
        }
    }
})
export const {increment, decrement, increment10, decrement10, resetReducer, } = counterSlice.actions
export default counterSlice.reducer