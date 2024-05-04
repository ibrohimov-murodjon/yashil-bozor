import { configureStore } from "@reduxjs/toolkit";
import hiSlice from "../slices/hiSlice";


const store = configureStore({
    reducer: {
        hello: hiSlice
    }
})

export default store