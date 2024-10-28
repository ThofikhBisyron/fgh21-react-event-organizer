import React from "react" ;
import logo from "../assets/img/logo_blur.svg"
import google from "../assets/img/google.svg"
import facebok from "../assets/img/facebook.svg"
import binancecover from "../assets/img/binancelogo.svg"
import binancelogo from "../assets/img/logobinance.png"
import family from "../assets/img/family.svg"
import Footer from "../components/Footer"
import show from "../assets/img/showpassword.svg"
import { Link, useNavigate } from "react-router-dom";
import orangelogin from "../assets/img/orangelogin.jpg"
import ticket from "../assets/img/logoticket.png"
import react from "react";

 



function Signup(){
    const navigate = useNavigate(); 
    const [message, setMessage] = React.useState(false)
    const [response, setResponse] = React.useState(false)

const [New, setNew] = React.useState("password")
    function showp() {
         if (New === "password") {
            setNew("text")
         }else {
            setNew("password")
         }
    }
    const [New2, setNew2] = React.useState("password")
    function showp2() {
         if (New2 === "password") {
            setNew2("text")
         }else {
            setNew2("password")
         }
    }
    function btnlogin(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpass = e.target.confirmpassword.value;
        const cek = e.target.cek.checked

        if (!name || !email || !password || !confirmpass) {
          setMessage("Please fill in all fields")
          return
        }
        if (password.length < 8) {
          setMessage("Password must be more than 8 words")
          return
      }
        if (password !== confirmpass) {
          setMessage("Passwords do not match")
          return
        }
        if(!cek) {
          setMessage("Accept terms and condition")
          return
        }

        console.log(name)
        console.log(email)
        console.log(password)
        const formData = new URLSearchParams()
        formData.append('full_name', name)
        formData.append('email', email)
        formData.append('password', password)
       
        fetch ('http://localhost:8080/auth/register', {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.success == true) {
            setResponse(data.message)
            navigate("/Login");
            return
          }else{
            setMessage("An error occurred, please try again")
            return
          }
        })
            
      }    

    return(
        <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
            <div className="flex ">
            <div className="md:w-[75%] h-[100vh] bg-[#000000] hidden md:block">
                <img src={orangelogin} alt="" className="w-full h-full hover:opacity-70 object-cover" />       
            </div>
            <div className="md:w-[25%] w-[100%] mt-[20px] text-2xl md:ml-[140px] md:mr-[100px] ml-[50px] mr-[50px]">
                <div className="md:w-[316px] w-full md:h-[614px]">
                    <Link to="/Login"><div className="flex mb-[50px]"><span><img src={ticket} alt="" className="w-16 h-16"/></span><span className="text-[#000000] content-center">Athrust</span><span className="text-[#000000] content-center">Tick</span>  
                </div></Link>
                <Link to="/Login"><div className="text-black text-base mb-[15px] hover:text-blue-400">Sign in</div></Link>
                <div className="text-black text-xl mb-[50px]">Hi, Welcome back to AthrusTick</div>
                <form onSubmit={btnlogin}> 
                {message && <div className="bg-red-400 mb-4">{message}</div>}
                {response && <div className="bg-green-400 mb-4">{response}</div>}
                    <div className="flex flex-col gap-5 w-full mb-[15px] ">
                    <input type="text" name="name" placeholder="Fullname" className="border-2 rounded-2xl h-[55px] w-full align-middle pl-4"/>
                    <input type="email" name="email" placeholder="Email" className="border-2 rounded-2xl h-[55px] w-full align-middle pl-4"/>
                    <div className="w-full flex items-center relative">
                        <input type={New} name="password" placeholder="Password" className="border-2 rounded-2xl w-full h-[55px] align-middle pl-4 pr-14"/> 
                        <button type="button" onClick={showp} className="absolute right-4">
                            <img src={show} alt="" className="w-6 h-6"/>
                        </button>
                    </div>
                    <div className="w-full flex items-center relative">
                        <input type={New2} name="confirmpassword" placeholder="Confirm Password" className="border-2 rounded-2xl w-full h-[55px] align-middle pl-4 pr-14"/> 
                        <button type="button" onClick={showp2} className="absolute right-4">
                            <img src={show} alt="" className="w-6 h-6"/>
                        </button>
                    </div>
                    <label className="flex gap-3 text-sm ml-3" htmlfor="cek">
                        <input type="checkbox" id="cek" name="cek"/>Accept terms and condition
                    </label>
                    </div>
                        <Link to="/Loginpassword"><div className="flex flex-col gap-7 text-sm text-right mb-5">Forgot Password?</div></Link>
                        <button type ="submit" className="w-[100%] h-[55px] bg-[#3366FF] mb-[48px] rounded-xl text-white">Sign Up</button> 
                    
                    <div className="align-middle text-center text-sm mb-[15px]">or sign in with</div>
                        <div className="flex gap-4 justify-center">
                            <button className="w-[95px] h-[52px] border pl-9 border-blue-500"><img src={google} alt="" /></button>
                            <button className="w-[95px] h-[52px] border pl-9 border-blue-500"><img src={facebok} alt="" /></button>
                        </div>
                </form>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>

    )
}
export default Signup