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
import Sidebar from "../components/Sidebar"
import Popup from "../components/Popup"




function Createevent(){

const [pop, setpop] = React.useState(true)
function butpop () {
    if ( pop === true ){
        setpop(false)
    }else{
        setpop(true)
    }

}



    return(
        <div className="bg-yellow-300">
            <Navbar/>
            <div className="flex mt-[50px]">
                <div className="md:w-[30%] w-[100%] hidden md:block">
                    <Sidebar/>
                </div>
                <div className=" md:w-[70%] w-[100%] md:bg-gray-200 bg-yellow-300 rounded-[30px] md:mr-[70px]">
                   <div className="md:flex flex flex-col gap-5 md:flex-row md:justify-between md:h-[50px] w-[90%] mt-[33px] ml-[50px] mr-[90px]">
                        <div className="font-semibold text-2xl">Manage Event</div>
                        <button onClick={butpop} className="border rounded-[15px] w-[125px] h-[50px] bg-[#EAF1FF] text-[#3366FF]">Create</button>
                   </div>  
                   <div className="flex mt-[15%] flex-col md:w-[315px] h-[113] md:ml-[35%] gap-[15px]">
                        <div className="text-center text-2xl font-bold">No tickets bought</div>
                        <div className="text-center text-[#B3B8B8]">It appears you haven’t bought any tickets yet. Maybe try searching these?</div>
                    </div> 
                </div>  
            </div>
            <div className={pop ? "hidden" : ""}>
                <Popup/>
            </div>
        <Footer/>
    </div>

    )
}
export default Createevent