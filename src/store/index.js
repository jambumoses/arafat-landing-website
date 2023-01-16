import { configureStore } from "@reduxjs/toolkit";
import constantSlice from "./constantSlice";
import productSlice from "./products-slice";


const store = configureStore({
    reducer: {
        api : productSlice.reducer,
        constant : constantSlice.reducer,
    },
});

export default store;