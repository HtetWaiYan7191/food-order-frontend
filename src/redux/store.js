import { configureStore } from "@reduxjs/toolkit";
import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
const store = configureStore({
    reducer: {
        food: foodSliceReducer,
        authentication: authSliceReducer,
    }
})

export default store;