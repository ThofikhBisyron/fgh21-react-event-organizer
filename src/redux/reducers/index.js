import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import home from "./home";
import event from "./event";
import ticket from "./ticket";


const reducer = combineReducers({
    auth,
    profile,
    home,
    event,
    ticket,


})

export default reducer