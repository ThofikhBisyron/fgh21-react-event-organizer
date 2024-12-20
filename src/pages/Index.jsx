import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import people from "../assets/img/family.svg";
import { BsDot } from "react-icons/bs";
import museum from "../assets/img/museum.svg";
import cars from "../assets/img/subsquid.jpg";
import profile1 from "../assets/img/p1.svg";
import profile2 from "../assets/img/p2.svg";
import profile3 from "../assets/img/p3.svg";
import profile4 from "../assets/img/p4.svg";
import jakarta from "../assets/img/jakarta.svg";
import bandung from "../assets/img/bandung.svg";
import bali from "../assets/img/bali.svg";
import aceh from "../assets/img/aceh.svg";
import solo from "../assets/img/solo.svg";
import jogja from "../assets/img/jogja.svg";
import semarang from "../assets/img/semarang.svg";
import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";
import black1 from "../assets/img/black1.svg";
import black2 from "../assets/img/black2.svg";
import black3 from "../assets/img/black3.svg";
import black4 from "../assets/img/black4.svg";
import black5 from "../assets/img/black5.svg";
import black6 from "../assets/img/black6.svg";
import ticket from "../assets/img/logoticket.png"
import orangebanner from "../assets/img/orangebanner.jpg";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { inputhome } from "../redux/reducers/home";
import { useDispatch} from "react-redux";
import { data } from "autoprefixer";
import { MdTextFields } from "react-icons/md";

function Index() {
  const datatoken = useSelector((state) => state.auth.token);
  const datahome = useSelector((state) => state.home.datahome)
  const [loc, setLoc] = React.useState([])
  const dispatch = useDispatch()
  const [partner, setPartner] = React.useState([])
  const [see, setsee] = React.useState(true)
  const [category, setCategory] = React.useState([])
  const [datacategory, setDataCategory] = React.useState(1)
  const [page, setPage] = React.useState(1)
  const [prevpage, setPrevPage] = React.useState(1)
  const [search, setSearch] = React.useState("")
  const locationRef = useRef(null);
  const [loadingEvent, setLoadingEvent] = React.useState(false)
  console.log(page)
  console.log(category)


function seeall () 
{
    if ( see === true ){
        setsee(false)
    }else{
        setsee(true)
    }

}

function handleCategoryChange(value) {
  if (datacategory !== value) {
    setCategory([])
    setDataCategory(value); 
    setPage(1); 
  }
}

async function home(searchValue){
  setLoadingEvent(true)
  const eventSearch = searchValue ? `?search=${searchValue}` : "";
  const dataHome = await fetch(`http://159.65.11.166:21214/events/${eventSearch}` ,{
    headers: {
      Authorization: "Bearer " + datatoken,
    }
  }, )
  const listevent = await dataHome.json()
  dispatch(inputhome(listevent.results)) 
    setTimeout(() => {
      setLoadingEvent(false) 
    }, 1000)
  
} 

function SearchSubmit(e) {
  e.preventDefault();
  home(search);
}

function seeAllEvent() {
  setSearch("")
  home("")
}

useEffect(() =>{
  if (search) {
    home(search)
  }
}, [search])

useEffect(() =>{
  home()
},[])

useEffect(() =>{
  async function partnersData(){
    const eventfetch = await fetch("http://159.65.11.166:21214/partners/")
    const datapartners = await eventfetch.json()
    setPartner(datapartners.results)
  }
  partnersData()
}, [])

useEffect(() =>{
  async function location() {
    const locationfetch = await fetch("http://159.65.11.166:21214/locations/")
    const listlocation = await locationfetch.json()
    setLoc(listlocation.results)
    
  }
  location()
}, []) 

async function eventCategory() {
  const Categoryfetch = await fetch(`http://159.65.11.166:21214/categories/events/?id=${datacategory}&page=${page}&limit=3`)
  const listCategory = await Categoryfetch.json()
  if (listCategory.results.length === 0){
    setPage(prevpage)
  } else {
    setPrevPage(page)
    setCategory(listCategory.results)
  }
  
}
useEffect(() => {
  eventCategory()
}, [datacategory, page])


  return (
    <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
      <div>
        <Navbar/>
      </div>
      <div className="mb-[150px]">
        <div className="h-[600px] bg-[#3366FF]  mb-[175px]">
          <div className="w-full h-full flex items-end justify-end">
            <img src={orangebanner} alt="" className="w-full h-[600px] object-cover" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="bg-[#FFCFDB] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-[#FF3D71] flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
            EVENT
          </div>
          <div className="font-[#333333] text-[36px] font-semibold mb-12">
            Events For You
          </div>
          <div className="mb-[50px] w-full">
            <div className="flex gap-11 justify-center">
              <div className="hidden md:flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>13</div>
                <div>Mon</div>
              </div>
              <div className="flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>14</div>
                <div>Tue</div>
              </div>
              <div className="flex flex-col font-medium gap-3 items-center border-2 w-16 h-21 pt-2 pb-2 rounded-xl text-[#FF8900] text-s border-[#FF8900]">
                <div>15</div>
                <div>Wed</div>
                <div>
                  <BsDot />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>16</div>
                <div>Thu</div>
              </div>
              <div className="hidden md:flex flex-col gap-3 items-center w-16 h-21 pt-2 pb-2 rounded-xl text-s ">
                <div>17</div>
                <div>Fri</div>
              </div>
            </div>
          </div>
        </div>
        <form className="mb-20 ml-16" onSubmit={SearchSubmit}>
          <input type="text" name="search" placeholder="Search Event Here" className="h-12 w-1/3 bg-orange-100 rounded-xl pl-4" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        {loadingEvent ? (
          <div className="text-center text-gray-500 animate-pulse text-4xl mb-20">Loading...</div>
        ) : (
          <>
          {datahome.length === 0 ? 
            (<div className="border-2 border-orange-300 text-white rounded-full p-5 mb-10 mr-20 ml-20 animate-pulse animate-infinite">
              <div className="text-4xl text-center">
                The text you entered is not in the events list
              </div>
            </div>) : (
              
              <div className="flex gap-4 overflow-x-scroll mb-10 ml-10">
              {datahome.map((data) =>{
                return(
                  <Link to={`/Events/${data.id}`}>
                    <div className="flex w-[260px] flex-shrink-0 h-[376px] overflow-hidden rounded-[40px] relative ">
                      <img
                        src={data.image}
                        alt=""
                        className="flex w-full h-full rounded-[40px] relative mb-[52px] overflow-hidden object-cover"
                      />
                      <div className="absolute bg-gradient-to-t from-black ... w-[260px] h-[376px]">
                        <div className="flex flex-col justify-end h-full gap-6 ml-6 pb-7">
                          <div className="text-white">{new Date(data.date).toLocaleDateString("en-CA")}</div>
                          <div className="text-white">{data.tittle}</div>
                          <div className="flex mb-[8px]">
                            {/* {data.attendees.map((item) =>{
                              return(
                                <div className="h-[32px] w-[32px] bg-black rounded-full border border-2 border-solid border-[#3366FF] overflow-hidden">
                                <img src={'https://wsw6zh-8888.csb.app/' + item.picture} alt="" />
                              </div>
                              )
                            })} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
              </div>
            )}
            </>
        )} 
        
        
        
        <div className="w-full flex flex-col items-center">
          <div>
            <button type="button" className="border-2 tracking-[0.5px] border-[#3366FF] w-[255px] h-[40px] mb-[175px] rounded-2xl text-[#3366FF]" onClick={seeAllEvent}>See All
            </button>
          </div>
          <div className="w-full mb-[175px]">
            <div className="mx-5 bg-[#0a0a0ab9] rounded-2xl">
              <div className="p-16">
                <div className="flex justify-center mb-6 text-white items-center gap-4 w-[160px] h-[30px] text-center bg-[#668CFF] rounded-xl ">
                  <div className="before:content-['\2501']"></div>
                  <div className="font-semibold text-sm tracking-[2px]">
                    LOCATION
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-7 mb-[50px] text-center" id="location" ref={locationRef}>
                  <div>
                    <div className="text-4xl text-white font-medium">
                      Discover Events Near You
                    </div>
                  </div>
                  {loc.map((item) => {
                    return(
                    <div className="flex flex-col gap-2 text-white items-center">
                      <img src={item.image} alt="" className="w-full h-full" />
                    <div className="font-medium">{item.name}</div>
                  </div>
                    )
                  })}
                  
                  {/* <div className="flex flex-col gap-2 text-white items-center">
                    <img src={bandung} alt="" className="w-full h-full" />
                    <div className="font-medium">Bandung</div>
                  </div>
                  <div className={
                      see
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }>
                    <img src={bali} alt="" className="w-full h-full" />
                    <div className="font-medium">Bali</div>
                  </div>
                  <div className={
                      see
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }>
                    <img src={aceh} alt="" className="w-full h-full" />
                    <div className="font-medium">Aceh</div>
                  </div>
                  <div className={
                      see
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }>
                    <img src={solo} alt="" className="w-full h-full" />
                    <div className="font-medium">Solo</div>
                  </div>
                  <div className={
                      see
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }>
                    <img src={jogja} alt="" className="w-full h-full" />
                    <div className="font-medium">Yogyakarta</div>
                  </div>
                  <div className={
                      see
                        ? "md:flex flex-col gap-2 text-white items-center hidden"
                        : "md:flex flex-col gap-2 text-white items-center"
                    }>
                    <img src={semarang} alt="" className="w-full h-full" />
                    <div className="font-medium">Semarang</div>
                  </div> */}

                </div>
                <div className="w-full text-center">
                  <button onClick={seeall} className="bg-white w-[255px] h-[40px] rounded-xl text-[#3366FF]">See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mb-[50px]">
            <div className="bg-[#FFCFDB] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-[#FF3D71] flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
              CATEGORY
            </div>
            <div className="font-[#333333] text-[36px] font-semibold text-center mb-12">
              Browse Events By Category
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-14 mb-10">
            <button className={`font-semibold ${datacategory === 1 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="1" onClick={() => handleCategoryChange(1)}>Music</button>
            <button className={`font-semibold ${datacategory === 2 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="2" onClick={() => handleCategoryChange(2)}>Arts</button>
            <button className={`font-semibold ${datacategory === 3 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="3" onClick={() => handleCategoryChange(3)}>Outdoors</button>
            <button className={`font-semibold ${datacategory === 4 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="4" onClick={() => handleCategoryChange(4)}>Workshop</button>
            <button className={`font-semibold ${datacategory === 5 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="5" onClick={() => handleCategoryChange(5)}>Sport</button>
            <button className={`font-semibold ${datacategory === 6 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="6" onClick={() => handleCategoryChange(6)}>Festival</button>
            <button className={`font-semibold ${datacategory === 7 ? "text-blue-600" : "text-[#C1C5D0]"} `} value="7" onClick={() => handleCategoryChange(7)}>Fashion</button>
          </div>
        </div>
        <div className="flex items-center overflow-x-scroll justify-between">
          <button 
            className="md:w-[45px] ml-10 md:h-[45px] md:shadow-md md:bg-white md:flex  items-center justify-center rounded-md hidden hover:active:bg-blue-300"
            onClick={() => {if (page > 1) setPage(page - 1)}}
            >
            <img src={arrowLeft} alt="" className="" />
          </button>
          {category.length === 0 ? (
            <div className="">
              <div className="text-2xl text-white animate-pulse animate-infinite">
                There are no events that have been included in the category yet
              </div>
            </div>) : (
            category.map((item) => {
              return (
                <div className="relative w-[300px] h-[350px] rounded-3xl overflow-hidden ml-8 flex-shrink-0">
                  <img src={item.image} alt="" className="w-full h-full"/>
                    <div className="absolute bg-[#0a0a0a] w-full h-[162px] bottom-0 px-4 pb-4">
                      <div className="flex mb-[8px] mt-[-16px]">
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
                          <div className="absolute bg-[rgba(234,163,81,0.5)] h-full w-full text-white text-sm flex items-center justify-center top-0 left-0">
                            62+
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col text-white gap-2 mt-7">
                        <div>{item.date}</div>
                        <div className="font-semibold text-xl tracking-wider">
                          {item.tittle}
                        </div>
                      </div>
                    </div>
                </div>
              )
            })
          )}

          <button 
            className="md:w-[45px] md:h-[45px] mr-10 md:shadow-md md:bg-[#3366FF] md:flex  items-center justify-center rounded-md hidden hover:active:bg-blue-300" 
            onClick={() => setPage(page + 1)}
            >
            <img src={arrowRight} alt="" className="" /> 
          </button>
        </div>
        <div className="flex justify-between mt-10 mr-20 ml-20">
          <button 
            className="w-[45px] h-[45px] shadow-md bg-white md:hidden items-center content-center justify-center rounded-md hover:active:bg-blue-300"
            onClick={() => {if (page > 1) setPage(page - 1)}}
          >
            <img src={arrowLeft} alt="" className="pl-2" />
          </button>
          <button 
            className="w-[45px] h-[45px] shadow-md bg-[#3366FF] md:hidden items-center content-center justify-center rounded-md hover:active:bg-blue-300"
            onClick={() => setPage(page + 1)}
          >
            <img src={arrowRight} alt="" className="pl-3" />
          </button>
        </div> 
      </div>
      <div className="bg-[#373A42] p-16 flex flex-col items-center mb-16">
        <div className="bg-[#979797] h-[30px] w-[150px] rounded-full text-xs tracking-[3px] font-semibold text-white flex gap-[10px] items-center justify-center before:content-['\2501'] mb-[25px] ">
          PARTNER
        </div>
        <div className="font-semibold text-4xl text-white mb-5">
          Our Trusted Partners
        </div>
        <div className="text-[#C1C5D0] mb-8">By companies like :</div>
        <div className="grid grid-cols-2 md:grid-cols-6 items-center gap-6">
          {partner.map((item) => {
            return(
              <div> 
            <img src={item.image} alt="" />
          </div>
            )
          })}
          {/* <div>
            <img src={partner[0].image} alt="" />
          </div>
          <div>
            <img src={partner[1].image} alt="" />
          </div>
          <div>
            <img src={partner[2].image} alt="" />
          </div>
          <div>
            <img src={partner[3].image} alt="" />
          </div>
          <div>
            <img src={partner[4].image} alt="" />
          </div>
          <div>
            <img src={partner[5].image} alt="" />
          </div> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
