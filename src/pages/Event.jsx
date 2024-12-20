import React, { useEffect } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import location from "../assets/img/locat.svg";
import clock from "../assets/img/clock.svg";
import map from "../assets/img/maps.svg";
import subsquid from "../assets/img/subsquid.jpg";
import favorite from "../assets/img/love.svg";
import profile1 from "../assets/img/p1.svg";
import profile2 from "../assets/img/p2.svg";
import profile3 from "../assets/img/p3.svg";
import profile4 from "../assets/img/p4.svg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listevent } from "../redux/reducers/event";
import { inputwishlist } from "../redux/reducers/wishlist";

function Event() {
  const datatoken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  let {id} = useParams()
  const [event, setEvent] = React.useState([])
  const [mess, setMess] = React.useState(false)
  const [read, setRead] = React.useState(false)

  async function eventData(){
    const eventfetch = await fetch("http://localhost:8080/events/" + id)
    const eventdata = await eventfetch.json()
    setEvent(eventdata.results)
  }

  async function insertWishlist(e, eventid){
    e.preventDefault();

    const formData = new URLSearchParams()
    formData.append('event_id', eventid)

    const wishlistfetch = await fetch("http://localhost:8080/wishlist/", {
      method:'POST',
      headers: {
        Authorization: "Bearer " + datatoken,
      },
      body: formData,
    })
    const listwishlist = await wishlistfetch.json()
    console.log(listwishlist)
    if (listwishlist.success === true) {
      setMess(listwishlist.message)
    }else{
      setMess(listwishlist.message)
    }
  }
  useEffect(() =>{
    eventData()
  }, [])

  return (
    <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <div className="flex relative w-full h-full overflow-hidden md:rounded-[40px] mb-[52px] md:hidden">
          <img src={event.image} alt="" className=" h-full w-full object-cover md:hidden"/>
          <div className="flex flex-col px-5 py-24 justify-center absolute bg-gradient-to-t from-[black] to-[transparent] w-full h-full ">
            <div className="flex justify-between ">
              <div className="text-white text-2xl tracking-widest font-semibold mb-4">{event.tittle}</div>
              <div className="">
                <img src={favorite} alt="" className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="">
                <img src={location} alt="" />
              </div>
              <div className="text-white tracking-wide font-medium text-sm ">Jakarta, Indonesia</div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="">
                <img src={clock} alt="" />
              </div>
              <div className="text-white tracking-wide font-medium text-sm">Wed, 15 Nov, 4:00 PM</div>
            </div>
            <div className="text-white mb-2">Attendees</div>
            <div className="">
              <div className="flex mb-[8px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                  <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">62+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[48px] md:mr-[120px] md:ml-[120px] mb-[100px md:bg-gray-200 p-10 mb:p-[100px] rounded-3xl">
          <div className="md:flex flex-col md:w-2/5 h-[486px] mr-[88px] hidden">
            <div className="flex relative w-full h-full overflow-hidden rounded-[40px] mb-[52px] "> 
              <img src={event.image} alt="" className=" h-full w-full object-cover"/>
              <div className="absolute bg-gradient-to-t from-[black] to-[transparent] w-full h-full "></div>
            </div>
            <button onClick={(e) => insertWishlist(e, event.id)}>
              <div className="flex justify-center items-center gap-[16px]">
                <div className="">
                  <img src={favorite} alt="" className="w-[36px] h-[36px]"/>
                </div>
                <div className="font-semibold text-xl text-[#373A42] tracking-[1px]"> Add to Wishlist
                </div>
              </div>
            </button>
            <div className="items-center ml-28 mt-2">
            {mess && <div className="text-red-500">{mess}</div>}
            </div>
          </div>
          <div className="md:w-3/5 w-full">
            <div className=" md:flex flex-col border-b-2 border-solid border-[rgba(193,197,208,0.25)] mb-[25px] hidden">
              <div className="font-semibold text-2xl mb-[30px] tracking-[2px]">{event.tittle}
              </div>
              <div className="flex gap-[88px] mb-[30px]">
                <div className="flex gap-[4px] text-sm items-center tracking-[1px] font-medium">
                  <div className="">
                    <img src={location} alt="" />
                  </div>
                  <div className="text-[#373A42] font-medium text-sm">Jakarta, Indonesia
                  </div>
                </div>
                <div className="flex gap-[4px] text-sm items-center tracking-[1px] font-medium">
                  <div className="">
                    <img src={clock} alt="" />
                  </div>
                  <div className="text-[#373A42] font-medium text-sm">{event.date}
                  </div>
                </div>
              </div>
              <div className="text-sm tracking-[1px] font-medium text-[#373A42] mb-[28px]">Attendees</div>
              <div className="flex mb-[8px]">
                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile1} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile2} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                  <img src={profile3} alt="" />
                </div>
                <div className="ml-[-8px] h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] relative overflow-hidden">
                  <img src={profile4} alt="" />
                <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">62+
                  </div>
                </div>
              </div>
            </div>
            <div className="font-semibold tracking-[1px] text-xl mb-[16px]">Event Detail
            </div>
            <div className={`text-xs text-[rgba(55,58,66,0.75)] mb-[12px] break-words ${read ? "line-clamp-none" : "line-clamp-1"}`}>{event.description}
            </div>
            <button className="text-xs text-[#3366FF] font-medium mb-[25px]" onClick={() => setRead(!read)}>{read ? "Read Less" : "Read More"}
            </button>
            <div className="text-xl tracking-[1px] text-[#373A42] mb-[16px]">Location
            </div>
            <div className="w-full">
              <img src={map} alt="" className="h-[152px] w-full md:max-w-[315px] object-cover rounded-[20px] mb-[50px]"/>
            </div>
            <Link to={`/Ticket/${id}`}>
              <button type="submit" className="h-[55px] w-full md:max-w-[315px] bg-[#3366FF] rounde text-white rounded-[15px]">Buy Tickets
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Event;
