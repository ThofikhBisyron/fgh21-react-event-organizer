import React from "react";
import logo from "../assets/img/logo_blur.svg"
import nav from "../assets/img/navbar.svg"
import profile from "../assets/img/profile.svg";
import profileimg from "../assets/img/profileimage.png"
import ticket from "../assets/img/logoticket.png"
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom"




function Navbar({locationRef}){
    const datauser = useSelector((state) => state.profile.datauser)
    const datatoken = useSelector((state) => state.auth.token);


    const [navb, setnavb] = React.useState(true)
    function butnav () {
        if ( navb === true ){
            setnavb(false)
        }else{
            setnavb(true)
        }

    }

    const handleLocationClick = () => {
        const locationElement = document.getElementById('location');
        if (locationElement) {
          window.scrollTo({
            top: locationElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };

    return(
    <div class="bg-orange-500">
        <div>
            <div className="w-{100%] flex md:flex-row flex-col justify-between md:align-middle content-center items-center mr-10 ml-10">
                <div className="flex items-center justify-between w-full md:w-[0]">
                    <Link to="/Index"><div className="flex items-center"><img src={ticket} className="w-20 h-20 md:w-20 md:h-20" alt=""/>
                            <span className="text-yellow-300 text-2xl font-semibold">Athrus</span>
                            <span className="text-yellow-300 text-2xl font-semibold">Tick</span>
                    </div></Link>
                    <div>
                        <button type="button" onClick={butnav} className="md:hidden"><img src={nav} alt=""/></button>
                    </div>
                    </div>
                    <div className={navb ? "md:flex hidden" : ""}>
                        <div className="md:flex md:flex-row flex-col md:gap-[50px] items-center md:ml-52 text-center text-white"> 
                            <Link to="/Index"><div className="m-2 hover:text-black">
                                <span>home</span>
                            </div></Link>
                            <Link to="/Createevent"><div className="m-2 hover:text-black">
                                <span>Create Event</span>
                            </div></Link>
                            <div className="m-2 hover:text-black">
                                <button onClick={handleLocationClick}>Location</button>
                            </div>
                        </div>  
                    </div>
                    { datatoken === null ? (<div className={navb ? "md:flex hidden" : ""}>
                        <div className="mb-5 items-center align-middle md:pt-5">
                            <Link to="/login"><button className="h-[40px] w-[120px] border-2 rounded-xl">Log In</button></Link>
                            <Link to="/Signup"><button className="h-[40px] bg-[#3366FF] rounded-xl w-[169px] text-white">Sign Up</button></Link>
                        </div>
                    </div>) : (<div className={navb ? "md:flex hidden" : ""}>
                        <div className="flex gap-4 mb-5 items-center align-middle md:pt-5">
                            <Link to="/Profile"><button><img src={datauser.profile.picture === null ? profileimg : datauser.profile.picture} alt="" className="w-10 h-10 rounded-full" /></button></Link>
                            <Link to="/Profile"><div className=" text-white hover:text-black">{datauser.profile.full_name}</div></Link>
                        </div>
                    </div>)}
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar