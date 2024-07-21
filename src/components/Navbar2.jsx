import React from "react";
import logo from "../assets/img/logo_blur.svg"
import nav from "../assets/img/navbar.svg"
import profile from "../assets/img/profile.svg";
import { Link } from "react-router-dom";



function Navbar2(){
// const navb = React.useRef("hidden");

//   const navbar = () => {
//     console.log("test...")
//     if (navb.current === "hidden") {
        
//         console.log("testIf...")
//         navb.current = "flex";
//         console.log(navb.current)
//     } else {
//         navb.current = "hidden";
//         console.log(navb.current)
//     }
//   };
const [navb, setnavb] = React.useState(true)
function butnav () {
    if ( navb === true ){
        setnavb(false)
    }else{
        setnavb(true)
    }

}
 


    return(
    <div class="md:bg-white">
        <div>
            <div className="w-{100%] flex md:flex-row flex-col justify-between md:align-middle content-center items-center mr-10 ml-10">
                <div className="flex items-center justify-between w-full md:w-[0]">
                    <Link to="/Index"><div className="flex items-center"><img src={logo} alt=""/>
                            <span className="text-[#3366FF] text-2xl font-semibold">We</span>
                            <span className="text-[#FF3D71] text-2xl font-semibold">tick</span>
                    </div></Link>
                    <div>
                        <button type="button" onClick={butnav} className="md:hidden"><img src={nav} alt=""/></button>
                    </div>
                    </div>
                    <div className={navb ? "md:flex hidden" : ""}>
                        <div className="md:flex md:flex-row flex-col md:gap-[50px] items-center md:ml-52 text-center"> 
                            <Link to="/Index"><div className="m-2">
                                <span>home</span>
                            </div></Link>
                            <Link to="/Createevent"><div className="m-2">
                                <span>Create Event</span>
                            </div></Link>
                            <div className="m-2">
                                <span>Location</span>
                            </div>
                        </div>  
                    </div>
                    <div className={navb ? "md:flex hidden" : ""}>
                        <div className="flex gap-4 mb-5 items-center align-middle md:pt-5">
                            <Link to="/Profile"><button><img src={profile} alt="" className="w" /></button></Link>
                            <Link to="/Profile"><div className=" text-black">Jhon Thomson</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar2