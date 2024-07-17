import React from "react";
import logo from "../assets/img/logo_blur.svg"
import facebook from"../assets/img/footer-facebook.svg"
import wa from "../assets/img/footer-wa.svg"
import ig from "../assets/img/footer-ig.svg"
import x from "../assets/img/footer-x.svg"


function Footer(){

    return(
        <div class="flex flex-col bg-[#F4F7FF] justify-center mt-[100px]">
            <div class="flex w-[930px] h-[308px] gap-[125px] ml-[25%]">
                <div class="-w[232px] -h[140px]">
                    <div class="flex items-center mb-[30px]"><img src={logo} alt=""/><span class="text-[#3366FF] text-2xl font-semibold">We</span><span class="text-[#FF3D71] text-2xl font-semibold">tick</span></div>
                    <div class="text-xs mb-[15px]">Find events you love with our</div>
                    <div class="flex gap-y-3.5">   
                        <button><img src={facebook} alt="" /></button>
                        <button><img src={wa} alt="" /></button>
                        <button><img src={ig} alt="" /></button>
                        <button><img src={x} alt="" /></button>
                    </div>
                </div>
                <div>   
                    <div class="mb-[20px] font-bold text-base">Wetick</div>
                    <div class="text-[#C1C5D0] text-sm">About Us</div>
                    <div class="text-[#C1C5D0] text-sm">Features</div>
                    <div class="text-[#C1C5D0] text-sm">Blog</div>
                    <div class="text-[#C1C5D0] text-sm">Payments</div>
                    <div class="text-[#C1C5D0] text-sm">Mobile App</div>
                </div>
                <div>
                    <div class="mb-[20px] font-bold text-base">Features</div>
                    <div class="text-[#C1C5D0] text-sm">Booking</div>
                    <div class="text-[#C1C5D0] text-sm">Create Event</div>
                    <div class="text-[#C1C5D0] text-sm">Discover</div>
                    <div class="text-[#C1C5D0] text-sm">Register</div>
                </div>
                <div>
                    <div class="mb-[20px] font-bold text-base">Company</div>
                    <div class="text-[#C1C5D0] text-sm">Partnership</div>
                    <div class="text-[#C1C5D0] text-sm">Help</div>
                    <div class="text-[#C1C5D0] text-sm">Terms of Service</div>
                    <div class="text-[#C1C5D0] text-sm">Privacy Policy</div>
                    <div class="text-[#C1C5D0] text-sm">Sitemap</div>
                </div>
            </div>
                <div class="text-base ml-[25%]">© 2020 Wetick All Rights Reserved</div>
        </div>
    )
}
export default Footer