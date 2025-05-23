import profile from "../assets/img/profile.svg"
import profilejhon from "../assets/img/profilejhon.svg"
import cardprofile from "../assets/img/cardprofile.svg"
import blueedit from "../assets/img/blue-edit.svg"
import changep from "../assets/img/changepassword.svg"
import book from "../assets/img/mybook.svg"
import wishlist from "../assets/img/wishlist.svg"
import setting from "../assets/img/settings.svg"
import logoutt from "../assets/img/redlog.svg"
import profileimg from "../assets/img/profileimage.png"
import { Result } from "postcss"
import createevent from "../assets/img/createevent.svg"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removedata } from "../redux/reducers/profile"
import { logout } from "../redux/reducers/auth"
import React from "react"
import nav from "../assets/img/navbar.svg"

function Sidebar(){
    const dataToken = useSelector((state) => state.auth.token)
    const datauser = useSelector((state) => state.profile.datauser) || { user: [], profile: [] };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [popout, setPopOut] = React.useState(true)

    if (dataToken == null) {
        navigate("/Login")
    }

    function log(){
        dispatch(logout())
        dispatch(removedata())
        navigate("/Login")
    }

    function ToogleSideBar() {
        setPopOut(!popout)
    }


        return ( 
            <>
            <button onClick={ToogleSideBar} className="md:hidden fixed top-20 active:bg-slate-500 z-20">
                <img src={nav} className="w-10 h-10"/>
            </button>   
            <div className={`md:w-[30%] ${popout ? "hidden" : "fixed left-0 top-20 right-0 bottom-0 z-10 bg-slate-500 bg-opacity-90"} md:block md:static md:z-auto md:left-auto`}>
                    <div className="flex flex-col w-[242px] h-[508px] ml-[70px]">   
                        <div className="flex mb-[50px] gap-4">
                        <img src={datauser === null ? profileimg : datauser?.profile?.picture} alt="" className="w-14 h-14 rounded-full" />
                        <div>
                            <div>{datauser === null ? "" : datauser?.profile?.full_name}</div>
                            <div>{datauser === null ? "----" : datauser?.profile?.profession}</div>
                        </div>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                        <Link to="/Profile"><div className="flex gap-[25px] hover:text-blue-500"><img src={profilejhon} alt="" />Profile</div></Link>
                            <div className="flex gap-[25px] ml-[49px] hover:text-blue-500"><img src={cardprofile} alt="" />Card</div>
                        <Link to="/Profile"><div className="flex gap-[25px] ml-[49px] hover:text-blue-500"><img src={blueedit} alt="" />Edit Profile</div></Link>
                        <Link to="/Changepassword"><div className="flex gap-[25px] ml-[49px] hover:text-blue-500 "><img src={changep} alt="" />Change Password</div></Link>
                        {datauser?.user?.role_id === 2 ? 
                        (<Link to="/Createevent"><div className="flex gap-[25px] hover:text-blue-500"><img src={createevent} alt="" />Create Event</div></Link>) : "" }
                        
                        <Link to="/Mybooking"><div className="flex gap-[25px] hover:text-blue-500"><img src={book} alt="" />My Booking</div></Link>
                        <Link to="/Mywishlist"><div className="flex gap-[25px] hover:text-blue-500 "><img src={wishlist} alt="" />My Wishlist</div></Link>
                            <div className="flex gap-[25px] hover:text-blue-500"><img src={setting} alt="" />Settings</div>
                        <button onClick={log} type="button" className="flex gap-[25px] hover:text-blue-500"><img src={logoutt} alt="" />Logout</button>
                        </div>
                    </div>
                </div>
            </>
    )
}
export default Sidebar