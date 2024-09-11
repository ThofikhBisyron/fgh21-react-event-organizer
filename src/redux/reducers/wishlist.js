import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    datawishlist : []
}

const wishlist = createSlice({
    name : "wishlist",
    initialState,
    reducers: {
        inputwishlist : (state, action) => {
            state.datawishlist = action.payload
        }
    }

})

export const {inputwishlist} = wishlist.actions
export default wishlist.reducer