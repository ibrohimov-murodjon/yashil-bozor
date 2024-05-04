import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

const hiSlice = createSlice({
    name: 'hello',
    initialState,
    reducers:{
        increment: (state, {payload})=>{
            return state
        }
    }
})

export const {increment} = hiSlice.actions
export default hiSlice.reducer