import React, { useEffect } from "react" 
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
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"




function Createevent(){
    const navigate = useNavigate()

    const dataToken = useSelector((state) => state.auth.token)
    const [eventcreated, setEventCreated] = React.useState([])
    console.log(eventcreated)
    if (dataToken == null) {
        navigate("Login")
    }

    const [pop, setpop] = React.useState(false)
    

    async function createdEvent() {
        const eventfetch = await fetch("http://103.93.58.89/events/created",{
            headers: {
                Authorization: "Bearer " + dataToken,
            }
        })
        const listevent = await eventfetch.json()
        console.log({listevent})
        setEventCreated(listevent.results)
    }

    useEffect(() =>{
        createdEvent()
    }, [pop])

    return(
        <div className="bg-gradient-to-bl from-yellow-300 to-amber-800">
            <Navbar/>
            <div className="flex mt-[50px]">
                <div className="md:w-[30%] w-[100%] hidden md:block">
                    <Sidebar/>
                </div>
                <div className=" md:w-[70%] w-[100%] md:bg-gray-200 bg-yellow-300 rounded-[30px] md:mr-[70px]">
                   <div className="md:flex flex flex-col gap-5 md:flex-row md:justify-between md:h-[50px] w-[90%] mt-[33px] ml-[50px] mr-[90px]">
                        <div className="font-semibold text-2xl">Manage Event</div>
                        <button onClick={()=>setpop(true)} className="border rounded-[15px] w-[125px] h-[50px] bg-[#EAF1FF] text-[#3366FF]">Create</button>
                   </div>
                   {eventcreated.length === null ? (
                    <div className="flex mt-[15%] flex-col md:w-[315px] h-[113] md:ml-[35%] gap-[15px]">
                        <div className="text-center text-2xl font-bold">No Event Created</div>
                        <div className="text-center text-[#B3B8B8]">It seems that you haven't created any events yet. Maybe try making one?</div>
                    </div>
                   ) : (
                    <div className="overflow-y-scroll shrink-0 h-96 ml-4">
                        {eventcreated.map((item) => {
                            return(
                                    <div className="flex flex-row gap-6 mt-14 shrink-0">
                                        <div className="text-center w-16 h-24 rounded-2xl border-2 pt-6">
                                            <div className="text-[#FF8900]">15</div>
                                            <div>Wed</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-3xl mb-4">{item.tittle}</div>
                                            <div className="text-[#373A42] text-sm">
                                                <div>{item.location}</div>
                                                <div>{item.date}</div>
                                            </div>
                                            <div className="flex gap-8">
                                                <div className="text-sm text-[#3366FF] mt-3">Detail</div>
                                                <div className="text-sm text-[#3366FF] mt-3">Update</div>
                                                <div className="text-sm text-[#3366FF] mt-3">Delete</div>
                                            </div>
                                        </div>
                                    </div>
                        )
                    })}
                    </div> 
                   )} 
                </div>  
            </div>
            {pop ? <Popup close={()=>setpop(false)}/> : ""}
            {/* <div className={pop ? "hidden" : ""}>
                <Popup butpop={butpop} setEventCreated={setEventCreated}/>
            </div> */}
        <Footer/>
    </div>

    )
}
export default Createevent