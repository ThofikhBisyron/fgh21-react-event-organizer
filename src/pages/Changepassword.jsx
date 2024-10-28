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
import { Input } from "postcss"
import Sidebar from "../components/Sidebar"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"




function Changepassword(){
    const datatoken = useSelector((state) => state.auth.token);
    console.log(datatoken)
    const [errorMessage, setErrorMessage] = React.useState('');

    async function changep(e){
        e.preventDefault()
        const old = e.target.oldpassword.value
        const newp = e.target.newpassword.value
        const conf = e.target.confirmpassword.value
        console.log(old)
        console.log(newp)
        console.log(conf)
        setErrorMessage('');
        if (newp.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        if (newp !== conf) {
            setErrorMessage('New password and confirmation password do not match.');
            return;
        }
        const formp = new URLSearchParams()
            formp.append("password", newp)
            formp.append("oldpassword", old)
        
        const pnew = await fetch("http://localhost:8080/users/password", {
        method: "PATCH",
        headers: {
                Authorization: "Bearer " + datatoken,
              },
        body: formp,
        });
        const response = await pnew.json()
        if (response.success) {
            setErrorMessage(response.message)
        } else {
            setErrorMessage(response.message)
        }
        

    }





    return(
        <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
            <Navbar/>
            <div className="flex mt-[50px]">
                <Sidebar/>
                <div className="flex w-[100%] md:bg-gray-200 rounded-[30px] mr-[70px] md:w-[70%]">
                    <form className="w-[876px] h-[413px] mt-[46px] ml-[46px]" onSubmit={changep} >
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className ="text-lg mb-[50px]">Change Password</div>
                        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
                            <div>Old Password</div> <input type="password" name="oldpassword" placeholder="Input Old Password.." className="h-[55px] w-[90%] md:w-[100%] border rounded-[15px] mb-[33px] mr-4 pl-4" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
                            <div>New Password</div> <input type="password" name="newpassword" placeholder="Input New Password.." className="h-[55px] w-[90%] md:w-[100%] border rounded-[15px] mb-[33px] mr-4 pl-4" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
                            <div>Confirm Password</div><input type="password" name="confirmpassword" placeholder="Input New Password.." className="h-[55px] w-[90%] md:w-[100%] border rounded-[15px] mb-[33px] mr-4 pl-4" />
                        </div>
                        <button type="submit" className="md:w-[100%] h-[61px] bg-blue-600 rounded-[15px] text-white w-[90%]">Update</button>
                    </form>
                </div>

            </div>
        <Footer/>
    </div>

    )
}
export default Changepassword