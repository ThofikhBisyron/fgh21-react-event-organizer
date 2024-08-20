import React from 'react';
import Login from "./pages/Login"
import Footer from "./components/Footer"
import Navbar from './components/Navbar';
import './assets/style.css'
import Profile from './pages/Profile';
import Changepassword from './pages/Changepassword';
import Mybooking from "./pages/Mybooking";
import Mywishlist from "./pages/Mywishlist";
import Createevent from "./pages/Createevent"
import Index from "./pages/Index"
import Popup from "./components/Popup"
import Payment from "./pages/Payment"
import Ticket from "./pages/Ticket"
import Event from './pages/Event';
import Signup from './pages/Signup'
import Sidebar from './components/Sidebar'
import Loginpassword from './pages/Loginpassword'
import Navbar2 from './components/Navbar2';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/store";

const Router = createBrowserRouter([
    {
        path : "/", 
        element : <Login/>
    },
    {
        path : "/Loginpassword", 
        element : <Loginpassword/>
    },
    {
        path : "/Index", 
        element : <Index/>
    },
    {
        path : "/Changepassword",
        element : <Changepassword/>
    },
    {
        path : "/Createevent", 
        element : <Createevent/>
    },
    {
        path : "/Events/:id", 
        element : <Event/>
    },
    {
        path : "/Login", 
        element : <Login/>
    },
    {
        path : "/Mybooking", 
        element : <Mybooking/>
    },
    {
        path : "/Mywishlist", 
        element : <Mywishlist/>
    },
    {
        path : "/Payment", 
        element : <Payment/>
    },
    {
        path : "/Profile", 
        element : <Profile/>
    },
    {
        path : "/Ticket/:id", 
        element : <Ticket/>
    },
    {
        path : "/Sidebar", 
        element : <Sidebar/>
    },
    {
        path : "/Signup", 
        element : <Signup/>
    },
    
])
function App() {
    return(
        <Provider store={store}>
       < RouterProvider router = {Router} />
       </Provider>
    )
}  
export default App