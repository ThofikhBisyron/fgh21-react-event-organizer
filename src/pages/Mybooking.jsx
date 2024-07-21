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
import calender from "../assets/img/calender.svg"
import { Input } from "postcss"
import Sidebar from "../components/Sidebar"




function Mybooking(){



    return(
        <div className="md:bg-[#F4F7FF]">
            <Navbar2/>
            <div className="flex mt-[50px]">
                <div className="md:w-[30%] w-[100%] hidden md:block">
                    <Sidebar/>
                </div>
                <div className=" md:w-[70%] w-[100%] bg-[#FFFFFF] md:rounded-[30px] md:mr-[70px]">
                   <div className="flex justify-between h-[50px] w-[85%] mt-[33px] ml-[50px] mr-[90px]">
                        <div className="font-semibold text-2xl">My Booking</div>
                        <div className="flex align-middle items-center"><img src={calender} alt="" />March</div>
                   </div>  
                   <div className="flex mt-[15%] flex-col md:w-[315px] h-[113] md:ml-[35%] gap-[15px] hidden">
                        <div className="text-center text-2xl font-bold">No tickets bought</div>
                        <div className="text-center text-[#B3B8B8]">It appears you haven’t bought any tickets yet. Maybe try searching these?</div>
                    </div>
            <div className="overflow-y-scroll shrink-0 h-96 ml-4">
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
            </div>
        </div>

    </div>
        <Footer/>
    </div>

    )
}
export default Mybooking