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
import Sidebar from "../components/Sidebar"
import lovewish from "../assets/img/lovewish.svg"
import { Input } from "postcss"
import react from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"




function Mywishlist(){
    const datatoken = useSelector((state) => state.auth.token);
    const [wishlist, setWishlist] = react.useState([])
    console.log(wishlist)
    const [message, setMessage] = React.useState("")

    async function dataListwish() {
        const wishlistfetch = await fetch("http://localhost:8888/wishlist/findevent", {
            headers: {
                Authorization: "Bearer " + datatoken,
              },
        }) 
        const datawishlist = await wishlistfetch.json()
        setWishlist(datawishlist.results)
    }
    async function deleteWishlist(id) {
        const wishlistdelete = await fetch("http://localhost:8888/wishlist/" + id,{
            method:"DELETE", 
            headers:{
                Authorization: "Bearer " + datatoken,
            }
        })
        const datawishlist = await wishlistdelete.json()
        if (wishlistdelete.ok){
            dataListwish()
            setMessage("Wishlist item deleted successfully.")
        }
    }
    setTimeout(() =>{
        setMessage()
    }, 4000)

    useEffect(() =>{
        dataListwish()
      }, [])

    return(
<div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
    <Navbar/>
        <div className="flex mt-[50px]">
            <Sidebar/>
            <div className=" md:w-[70%] w-full md:bg-gray-200 rounded-[30px] md:mr-[70px]">
                <div className="flex justify-between h-[50px] mt-[33px] ml-[50px]">
                    <div className="font-semibold text-2xl">My Wishlist</div>
                </div>  
                <div className="text-green-600 animate-pulse ml-10">{message}</div>
                {wishlist === null ? (<div className="flex mt-[15%] flex-col md:w-[315px] h-[113] md:ml-[35%] gap-[15px]">
                        <div className="text-center text-2xl font-bold">There is no favorite event</div>
                        <div className="text-center text-[#B3B8B8]">It seems there is no favorite event here. Maybe try searching?</div>
                    </div> ): (
                         <div className="overflow-y-scroll shrink-0 h-96 ml-4">
                         {wishlist.map((item) => {
                             return(
                                 <div className="flex justify-between mr-10">
                                     <div className="flex flex-row gap-6 mt-14">
                                         <div className="text-center pt-6">
                                             <img src={item.image} className="w-40"/>
                                         </div>
                                     <div className="mt-7">
                                         <div className="font-semibold text-3xl mb-4">{item.tittle}</div>
                                         <div className="text-[#373A42] text-sm">
                                             <div>{item.location}</div>
                                             <div>{item.date}</div>
                                         </div>
                                         <div className="text-sm text-[#3366FF] mt-3">{item.description}</div>
                                     </div>
                                     </div>
                                     <div className="flex justify-center flex-col items-center">
                                        <div>
                                            Delete
                                        </div>
                                        <button className="p-0" onClick={()=> deleteWishlist(item.id)}>
                                            <div className="hover:bg-gray-500 flex items-center justify-center rounded-full">
                                                <img src={lovewish} alt="" className="" />
                                            </div>
                                        </button>
                                     </div>
                                  </div>
                             )
                         })}
                     </div>
                     )}
                    
         
           
        </div>
    </div>
        <Footer/>
</div>

    )
}
export default Mywishlist