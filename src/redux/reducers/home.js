import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    datahome : []
}

const home = createSlice({
    name: 'home',
    initialState,
    reducers: {
        inputhome: (state, action) => {
            state.datahome = action.payload
        },
    }

})
export const {inputhome} = home.actions;
export default home.reducer