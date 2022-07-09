import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";


const store=configureStore({
    reducer:{messageHandler:messageSlice}
})

export default store;