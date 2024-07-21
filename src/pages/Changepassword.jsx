import React from "react" 
import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
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
import Sidebar from "../components/Sidebar"




function Changepassword(){



    return(
        <div className="md:bg-[#F4F7FF] bg-white">
            <Navbar2/>
            <div className="flex mt-[50px]">
                <Sidebar/>
                <div className="flex w-[100%] bg-[#FFFFFF] rounded-[30px] mr-[70px] md:w-[70%]">
                    <div className="w-[876px] h-[413px] mt-[46px] ml-[46px]">
                        <div className ="text-lg mb-[50px]">Change Password</div>
                        <div className="flex flex-col md:flex-row justify-between"><div>Old Password</div> <input type="password" name="oldpassword" placeholder="Input Old Password.." className="h-[55px] w-[90%] md:w-[100%] border rounded-[15px] mb-[33px] mr-4 pl-4" /></div>
                        <div className="flex flex-col md:flex-row justify-between"><div>New Password</div> <input type="password" name="newpassword" placeholder="Input New Password.." className="h-[55px] w-[90%] md:w-[100%] border rounded-[15px] mb-[33px] mr-4 pl-4" /></div>
                        <div className="flex flex-col md:flex-row justify-between"><div>Confirm Password</div><input type="password" name="confirmpassword" placeholder="Input New Password.." className="h-[55px] w-[90%] md:w-[100%] border rounded-[15px] mb-[33px] mr-4 pl-4" /></div>
                        <button className="md:w-[100%] h-[61px] bg-blue-600 rounded-[15px] text-white w-[90%]">Update</button>
                    </div>
                </div>

            </div>
        <Footer/>
    </div>

    )
}
export default Changepassword