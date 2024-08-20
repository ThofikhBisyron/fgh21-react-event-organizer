import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    dataticket : []
}

const ticket = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        inputticket: (state, action) => {
            state.dataticket = action.payload
        },
    }

})
export const {inputticket} = ticket.actions;
export default ticket.reducer