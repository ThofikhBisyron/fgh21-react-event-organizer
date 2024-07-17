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




function Profile(){



    return(
        <div class="bg-[#F4F7FF]">
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
                    <div class="w-[60%]">
                        <div class="ml-[50px] mb-[50px] mt-[46px]">Profile</div>
                        <form class="flex flex-col w-[468px] h-[535px] ml-[50px]">
                            <div class="flex mb-[50px]">
                            <label>Name</label>
                            <input type="text" name="name" class="h-[55px] border rounded-2xl ml-[107px]"/>
                            </div>
                            <div class="flex mb-[50px]">
                            <label>Username</label>
                            <div class="ml-[73px]">jhon0</div>
                            </div>
                            <div class="flex mb-[50px]">
                            <label>Email</label>
                            <div class="ml-[111px]">jhont0@mail.com</div>
                            </div>  
                            <div class="flex mb-[50px]">
                            <label>Phone Number</label>
                            <div class="ml-[111px]">081234567890</div>
                            </div>
                            <div class="flex mb-[50px]">
                            <label>Gender</label>
                            <div class="flex gap-[50px] ml-[111px] w-[500px]">
                                <div><input type="radio"/>Male</div>
                                <div><input type="radio"/>Female</div>
                            </div>
                            </div>
                            <div class="flex mb-[50px]">
                            <label>Profession</label>
                            <input type="text" name="name" class="h-[55px] border rounded-2xl ml-[107px]"/>
                            </div>
                            <div class="flex mb-[50px]">
                            <label>Birthday Date</label>
                            <div class="ml-[73px]">24/10/2000</div>
                            </div>
                        </form>
                    </div>
                    <div class="w-[40%]">
                        <div class="w-[255px] h-[303px] border-l-2 pl-[50px]" >
                            <div class="flex justify-center">
                                <img src={profile} alt="" class="w-[137px] h-[137px] mb-[50px] ml-[50px]" />
                            </div>
                            <div>
                                <button class="w-[255px] h-[40px] bg-white rounded-[10px] text-center" >Choose Photo</button>
                            </div>
                        </div>
                            <div class="flex flex-col gap-[15px] ml-[50px]">
                                <div>Image size: max, 2 MB</div>
                                <div>Image formats: .JPG, .JPEG, .PNG</div>
                            </div>
                    </div>
                </div>

            </div>
        <Footer/>
    </div>

    )
}
export default Profile