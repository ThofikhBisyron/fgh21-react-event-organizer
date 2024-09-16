import React from "react";
import logo from "../assets/img/logo_blur.svg"
import facebook from"../assets/img/footer-facebook.svg"
import wa from "../assets/img/footer-wa.svg"
import ig from "../assets/img/footer-ig.svg"
import x from "../assets/img/footer-x.svg"
import ticket from "../assets/img/logoticket.png"


function Footer(){

    return(
        <div>
            <div>
                <div className="w-full">
                <div className="flex md:gap-56 gap-10 md:ml-20 ml-6 flex-col md:flex-row mb-20 mt-40">
                    <div className="">
                        <div class="flex items-center mb-[30px]"><img src={ticket} alt="" className="w-10 h-10"/>
                            <span className="text-[#757217] text-2xl font-semibold">Athrus</span>
                            <span className="text-[#757217] text-2xl font-semibold">Tick</span>
                        </div>
                        <div className="text-xs mb-[15px]">Find events you love with our</div>
                        <div>   
                            <button><img src={facebook} alt=""/></button>
                            <button><img src={wa} alt="" /></button>
                            <button><img src={ig} alt="" /></button>
                            <button><img src={x} alt="" /></button>
                        </div>
                    </div>
                    <div>   
                        <div className="mb-[20px] font-bold text-base">Wetick</div>
                        <div className="text-grey-300 text-sm">About Us</div>
                        <div className="text-grey-300 text-sm">Features</div>
                        <div className="text-grey-300 text-sm">Blog</div>
                        <div className="text-grey-300 text-sm">Payments</div>
                        <div className="text-grey-300 text-sm">Mobile App</div>
                    </div>
                    <div>
                        <div className="mb-[20px] font-bold text-base">Features</div>
                        <div className="text-grey-300 text-sm">Booking</div>
                        <div className="text-grey-300 text-sm">Create Event</div>
                        <div className="text-grey-300 text-sm">Discover</div>
                        <div className="text-grey-300 text-sm">Register</div>
                    </div>
                    <div>
                        <div className="mb-[20px] font-bold text-base">Company</div>
                        <div className="text-grey-300 text-sm">Partnership</div>
                        <div className="text-grey-300 text-sm">Help</div>
                        <div className="text-grey-300 text-sm">Terms of Service</div>
                        <div className="text-grey-300 text-sm">Privacy Policy</div>
                        <div className="text-grey-300 text-sm">Sitemap</div>
                    </div>
                </div>
                </div>
                <div className="text-base md:ml-52 ml-4">© 2020 Wetick All Rights Reserved</div>
            </div>
        </div>
    )
}
export default Footer