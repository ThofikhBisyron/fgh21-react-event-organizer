import React from "react";
import logo from "../assets/img/logo_blur.svg"



function Navbar(){

    return(
       <div class="bg-[#FFFFFF]">
            <div>
                <div class="flex justify-between align-middle content-center items-center mr-10 ml-10 h-[90px]">
                <div class="flex items-center "><img src={logo} alt=""/><span class="text-[#3366FF] text-2xl font-semibold">We</span><span class="text-[#FF3D71] text-2xl font-semibold">tick</span></div>
                <div class="flex gap-[50px] items-center">   
                    <span>home</span>
                    <span>Create Event</span>
                    <span>Location</span>
                </div>
                <div>
                    <button class="h-[40px] w-[100px]">Log In</button>
                    <button class="h-[40px] bg-[#3366FF] rounded-xl w-[169px] text-white">Sign Up</button>
                </div>
                </div>
            </div>
       </div>
    )
}
export default Navbar