import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import home from "./home";
import event from "./event";
import ticket from "./ticket";
import wishlist from "./wishlist";
import transaction from "./transaction";


const reducer = combineReducers({
    auth,
    profile,
    home,
    event,
    ticket,
    wishlist,
    transaction,
})

export default reducer