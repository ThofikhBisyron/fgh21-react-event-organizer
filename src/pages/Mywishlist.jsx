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
import Sidebar from "../components/Sidebar"
import lovewish from "../assets/img/lovewish.svg"
import { Input } from "postcss"




function Mywishlist(){



    return(
<div className="bg-yellow-300">
    <Navbar/>
        <div className="flex mt-[50px]">
            <Sidebar/>
            <div className=" md:w-[70%] w-[100%] bg-yellow-300 md:bg-gray-200 rounded-[30px] md:mr-[70px]">
                <div className="flex justify-between h-[50px] mt-[33px] ml-[50px]">
                    <div className="font-semibold text-2xl">My Wishlist</div>
                </div>  
                <div className="flex mt-[15%] flex-col md:w-[315px] h-[113] md:ml-[35%] gap-[15px] hidden">
                    <div className="text-center text-2xl font-bold">No tickets bought</div>
                    <div className="text-center text-[#B3B8B8]">It appears you haven’t bought any tickets yet. Maybe try searching these?</div>
                </div> 
            <div className="overflow-y-scroll shrink-0 h-96 ml-4">
                <div className="flex justify-between">
                    <div className="flex flex-row gap-6 mt-14 shrink-0">
                        <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                            <div className="text-[#FF8900]">15</div>
                            <div>Wed</div>
                        </div>
                    <div>
                        <div className="font-semibold text-3xl mb-4">Sights & Sounds Exhibition</div>
                        <div className="text-[#373A42] text-sm">
                            <div>Jakarta, Indonesia</div>
                            <div>Wed, 15 Nov, 4:00 PM</div>
                        </div>
                        <div className="text-sm text-[#3366FF] mt-3">Detail</div>
                    </div>
                    </div>
                    <div className="content-center">
                        <img src={lovewish} alt="" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-row gap-6 mt-14 shrink-0">
                        <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                            <div className="text-[#FF8900]">15</div>
                            <div>Wed</div>
                        </div>
                    <div>
                        <div className="font-semibold text-3xl mb-4">Sights & Sounds Exhibition</div>
                        <div className="text-[#373A42] text-sm">
                            <div>Jakarta, Indonesia</div>
                            <div>Wed, 15 Nov, 4:00 PM</div>
                        </div>
                        <div className="text-sm text-[#3366FF] mt-3">Detail</div>
                    </div>
                    </div>
                    <div className="content-center">
                        <img src={lovewish} alt="" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-row gap-6 mt-14 shrink-0">
                        <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                            <div className="text-[#FF8900]">15</div>
                            <div>Wed</div>
                        </div>
                    <div>
                        <div className="font-semibold text-3xl mb-4">Sights & Sounds Exhibition</div>
                        <div className="text-[#373A42] text-sm">
                            <div>Jakarta, Indonesia</div>
                            <div>Wed, 15 Nov, 4:00 PM</div>
                        </div>
                        <div className="text-sm text-[#3366FF] mt-3">Detail</div>
                    </div>
                    </div>
                    <div className="content-center">
                        <img src={lovewish} alt="" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-row gap-6 mt-14 shrink-0">
                        <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                            <div className="text-[#FF8900]">15</div>
                            <div>Wed</div>
                        </div>
                    <div>
                        <div className="font-semibold text-3xl mb-4">Sights & Sounds Exhibition</div>
                        <div className="text-[#373A42] text-sm">
                            <div>Jakarta, Indonesia</div>
                            <div>Wed, 15 Nov, 4:00 PM</div>
                        </div>
                        <div className="text-sm text-[#3366FF] mt-3">Detail</div>
                    </div>
                    </div>
                    <div className="content-center">
                        <img src={lovewish} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Footer/>
</div>

    )
}
export default Mywishlist