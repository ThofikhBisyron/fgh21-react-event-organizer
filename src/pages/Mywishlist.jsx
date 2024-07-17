import React from "react" 
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profile from "../assets/img/profile.svg"
import profilejhon from "../assets/img/profilejhon.svg"
import cardprofile from "../assets/img/cardprofile.svg"
import blueedit from "../assets/img/blue-edit.svg"
import changep from "../assets/img/changepassword.svg"
import book from "../assets/img/mybook.svg"
import wishlist from "../assets/img/wishlist.svg"
import setting from "../assets/img/settings.svg"
import logout from "../assets/img/redlog.svg"
import calender from "../assets/img/calender.svg"
import { Input } from "postcss"




function Mywishlist(){



    return(
        <div class="bg-[#F4F7FF]">
            <Navbar/>
            <div class="flex mt-[50px]">
                <div class="w-[30%]">
                    <div class="flex flex-col w-[242px] h-[508px] ml-[70px]">
                        <div class="flex mb-[50px]">
                        <img src={profile} alt="" class="w-[55px] h-[55px]" />
                        <div>
                            <div>Jhon Thomson</div>
                            <div>Entrepreneur, ID</div>
                        </div>
                        </div>
                        <div class="flex flex-col gap-[30px]">
                            <div class="flex gap-[25px]"><img src={profilejhon} alt="" />Profile</div>
                            <div class="flex gap-[25px] ml-[49px]"><img src={cardprofile} alt="" />Card</div>
                            <div class="flex gap-[25px] ml-[49px]"><img src={blueedit} alt="" />Edit Profile</div>
                            <div class="flex gap-[25px] ml-[49px]"><img src={changep} alt="" />Change Password</div>
                            <div class="flex gap-[25px]"><img src={book} alt="" />My Booking</div>
                            <div class="flex gap-[25px]"><img src={wishlist} alt="" />My Wishlist</div>
                            <div class="flex gap-[25px]"><img src={setting} alt="" />Settings</div>
                            <div class="flex gap-[25px]"><img src={logout} alt="" />Logout</div>
                        </div>
                    </div>
                </div>
                <div class=" w-[70%] bg-[#FFFFFF] rounded-[30px] mr-[70px]">
                   <div class="flex justify-between h-[50px] w-[970px] mt-[33px] ml-[50px] mr-[90px]">
                        <div class="font-semibold text-2xl">My Wishlist</div>
                   </div>  
                   <div class="flex mt-[15%] flex-col w-[315px] h-[113] ml-[35%] gap-[15px]">
                        <div class="text-center text-2xl font-bold">No tickets bought</div>
                        <div class="text-center text-[#B3B8B8]">It appears you haven’t bought any tickets yet. Maybe try searching these?</div>
                    </div> 
                </div>

            </div>
        <Footer/>
    </div>

    )
}
export default Mywishlist