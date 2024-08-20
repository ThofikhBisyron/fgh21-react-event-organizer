import profile from "../assets/img/profile.svg"
import profilejhon from "../assets/img/profilejhon.svg"
import cardprofile from "../assets/img/cardprofile.svg"
import blueedit from "../assets/img/blue-edit.svg"
import changep from "../assets/img/changepassword.svg"
import book from "../assets/img/mybook.svg"
import wishlist from "../assets/img/wishlist.svg"
import setting from "../assets/img/settings.svg"
import logoutt from "../assets/img/redlog.svg"
import { Result } from "postcss"
import createevent from "../assets/img/createevent.svg"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removedata } from "../redux/reducers/profile"
import { logout } from "../redux/reducers/auth"

function Sidebar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function log(){
        dispatch(logout())
        dispatch(removedata())
        navigate("/Login")
    }


return ( 


<div className="md:w-[30%] hidden md:block">
                    <div className="flex flex-col w-[242px] h-[508px] ml-[70px]">
                        <div className="flex mb-[50px] gap-4">
                        <img src={profile} alt="" className="w-[55px] h-[55px]" />
                        <div>
                            <div>Jhon Thomson</div>
                            <div>Entrepreneur, ID</div>
                        </div>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                        <Link to="/Profile"><div className="flex gap-[25px] hover:text-blue-500"><img src={profilejhon} alt="" />Profile</div></Link>
                            <div className="flex gap-[25px] ml-[49px] hover:text-blue-500"><img src={cardprofile} alt="" />Card</div>
                        <Link to="/Profile"><div className="flex gap-[25px] ml-[49px] hover:text-blue-500"><img src={blueedit} alt="" />Edit Profile</div></Link>
                        <Link to="/Changepassword"><div className="flex gap-[25px] ml-[49px] hover:text-blue-500 "><img src={changep} alt="" />Change Password</div></Link>
                        <Link to="/Createevent"><div className="flex gap-[25px] hover:text-blue-500"><img src={createevent} alt="" />Create Event</div></Link>
                        <Link to="/Mybooking"><div className="flex gap-[25px] hover:text-blue-500"><img src={book} alt="" />My Booking</div></Link>
                        <Link to="/Mywishlist"><div className="flex gap-[25px] hover:text-blue-500 "><img src={wishlist} alt="" />My Wishlist</div></Link>
                            <div className="flex gap-[25px] hover:text-blue-500"><img src={setting} alt="" />Settings</div>
                        <button onClick={log} type="button" className="flex gap-[25px] hover:text-blue-500"><img src={logoutt} alt="" />Logout</button>
                        </div>
                    </div>
                </div>
    )
}
export default Sidebar