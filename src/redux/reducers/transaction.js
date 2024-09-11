import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const initialState = {
    data : [],
    qty : 0,
    eventid: 0,
    eventTittle: "",
    totalPay: 0,
    ticketSec: [],
    secId : [],
    quantity: [],
}

const section = createSlice({
    name : "section",
    initialState,
    reducers: {
        inputSection: (state, action) => {
            state.data = [action.payload]
        },
        inputqty : (state, action) => {
            state.qty = action.payload
        },
        inputEventId: (state, action) => {
            state.eventid = action.payload
        },
        inputEventTitle: (state, action) => {
            state.eventTittle = action.payload
        },
        inputTotalPayment: (state, action) => {
            state.totalPay = action.payload
        },
        inputTicketSection: (state, action) => {
            state.ticketSec = action.payload
        },
        inputSectionId: (state, action) => {
            state.secId = action.payload
        },
        inputQuantity: (state, action) => {
            state.quantity = action.payload
        },
    },
        
})

export const {
    inputSection, 
    inputqty, 
    inputEventId, 
    inputEventTitle, 
    inputTotalPayment,
    inputTicketSection,
    inputSectionId,
    inputQuantity,
} = section.actions
export default section.reducer