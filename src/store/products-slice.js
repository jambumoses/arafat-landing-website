import {createSlice} from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: "api",
    initialState: {commerceAPI: null},
    reducers:{
        getProducts(state,action){
            state.data = action.payload;
        },
        addToCart(state,action){},
        removeFromCart(state,action){},
        clearCart(state,action){},
    }
});

export const productActions = productSlice.actions;
export default productSlice;