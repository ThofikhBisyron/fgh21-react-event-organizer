import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    dataevent : []
}

const event = createSlice({
    name: 'event',
    initialState,
    reducers: {
        listevent: (state, action) => {
            state.dataevent = action.payload
        },
    }

})
export const {listevent} = event.actions;
export default event.reducer