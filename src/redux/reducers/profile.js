import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    datauser : []
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        datainput: (state, action) => {
            state.datauser = action.payload
        },
        removedata:(state) => {
            state.datauser = null
        }
    }

})
export const {datainput, removedata} = profile.actions;
export default profile.reducer