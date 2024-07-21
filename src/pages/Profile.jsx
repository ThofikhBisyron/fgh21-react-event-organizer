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




function Profile(){



    return(
        <div className="md:bg-[#F4F7FF]">
            <Navbar2/>
            <div className="flex mt-[50px]">
                <div className="md:w-[30%] hidden md:block">
                    <Sidebar/>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:w-[70%] w-[100%] bg-[#FFFFFF] rounded-[30px] mr-[70px]">
                    <div className="md:w-[60%] w-[100%]">
                        <div className="ml-[50px] mb-[50px] mt-[46px] hidden md:block">Profile</div>
                        <form className="flex flex-col w-[100%] ml-[50px]">
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Jhon Tomson" className="h-[55px] w-[100%] border rounded-2xl md:ml-[107px] pl-5 mr-32"/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Username</label>
                            <div className="md:ml-[79px]">jhon0</div>
                            <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Email</label>
                            <div className="md:ml-[111px]">jhont0@mail.com</div>
                            <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div>
                            </div>  
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Phone Number</label>
                            <div className="md:ml-[40px]">081234567890</div>
                            <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Gender</label>
                            <div className="flex gap-[50px] md:ml-[95px] w-full">
                                <div><input type="radio"/>Male</div>
                                <div><input type="radio"/>Female</div>
                            </div>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Profession</label>
                            <input type="text" name="name" placeholder="Entrepreneur" className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5 mr-32"/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Nationality</label>
                            <input type="text" name="name" placeholder="Indonesia" className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5 mr-32"/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2">
                            <label>Birthday Date</label>
                            <div className="md:ml-[50px]">24/10/2000</div>
                            <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[40%] w-full ml-9">
                        <div className="w-[100%] h-[303px] md:border-l-2 mt-9" >
                            <div className="flex justify-center">
                                <img src={profile} alt="" className="w-[137px] h-[137px] mb-[50px]" />
                            </div>
                            <div className="hidden md:block">
                                <button className="w-full md:max-w-[255px]  h-[40px] md:ml-20 bg-white rounded-[10px] text-center border border-blue-500" >Choose Photo</button>
                            </div>
                        </div>
                            <div className="flex flex-col gap-[15px] ml-[50px] hidden md:block">
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