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
import { Input } from "postcss"




function Changepassword(){



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
                <div class="flex w-[70%] bg-[#FFFFFF] rounded-[30px] mr-[70px]">
                    <div class="w-[876px] h-[413px] mt-[46px] ml-[46px]">
                        <div class ="text-lg mb-[50px]">Change Password</div>
                        <div class="flex justify-between">Old Password <input type="password" name="oldpassword" class="h-[55px] w-[100%] border rounded-[15px] mb-[33px]" /></div>
                        <div class="flex justify-between">New Password <input type="password" name="oldpassword" class="h-[55px] w-[100%] border rounded-[15px] mb-[33px]" /></div>
                        <div class="flex justify-between">Confirm Password<input type="password" name="oldpassword" class="h-[55px] w-[100%] border rounded-[15px] mb-[33px]" /></div>
                        <button class="w-[100%] h-[61px] bg-blue-600 rounded-[15px] text-white">Update</button>
                    </div>
                </div>

            </div>
        <Footer/>
    </div>

    )
}
export default Changepassword