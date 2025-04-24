import React from "react" ;
import logo from "../assets/img/logo_blur.svg"
import google from "../assets/img/google.svg"
import facebok from "../assets/img/facebook.svg"
import family from "../assets/img/family.svg"
import Footer from "../components/Footer"
import show from "../assets/img/showpassword.svg"
import binancelogo from "../assets/img/logobinance.png"
import orangelogin from "../assets/img/orangelogin.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {login} from "../redux/reducers/auth"
import { Provider, useDispatch, useSelector } from 'react-redux';
import { datainput } from "../redux/reducers/profile";
import { data } from "autoprefixer";
import { FaSpinner } from "react-icons/fa6";
import { useState } from "react";
import ticket from "../assets/img/logoticket.png"



 



function Login(){

const navigate = useNavigate();
const datatoken = useSelector((state) => state.auth.token)

const [load, setLoad] = React.useState(false)

const dispatch = useDispatch();
const [emailError, setEmailError] = React.useState("");
const [passwordError, setPasswordError] = React.useState("");
const [responses, setResponses] = React.useState(false)

function btnlogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!email) {
        setEmailError("Email is required");
        hasError = true;
    }

    if (!password) {
        setPasswordError("Password is required");
        hasError = true;
    }

    if (hasError) return;
    setLoad(true)
    const formData = new URLSearchParams()
        formData.append('email', email)
        formData.append('password', password)
       
        fetch ('http://143.198.222.47:10001/auth/login', {
            method: 'POST',
            body: formData,
        })

        .then((response) => response.json())
        .then((data) => {
            if (data.success === true){
               setResponses(data.message)
                dispatch(login(data.results))
                async function profile() {

                    const dataProfile = await fetch(
                        "http://143.198.222.47:10001/profile/" ,
                   {
                    headers: {
                        Authorization: "Bearer " + data.results,
                        },
                    }
                );
                const listdata = await dataProfile.json()
                
                dispatch(datainput(listdata.results))
                console.log(listdata.results)
                navigate("/Index")
            }
            profile ()
                
            }else {
                setResponses(data.message)
                setLoad(false)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

const [New, setNew] = React.useState("password")
    function showp() {
         if (New === "password") {
            setNew("text")
         }else {
            setNew("password")
         }
    }

    return(
        <div>
            <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
            <div className="flex ">
            <div className="md:w-[75%] h-[100vh] bg-[#000000] hidden md:block">
                <img src={orangelogin} className="w-full h-full hover:opacity-70 object-cover" alt=""/>       
            </div>
            <div className="md:w-[25%] w-[100%] mt-[20px] text-2xl md:ml-[140px] md:mr-[100px] ml-[50px] mr-[50px]">
                <div className="md:w-[316px] w-[100%] md:h-[614px]">
                    <Link to="/Index"><div className="flex mb-[50px]"><span><img src={ticket} alt="" className="w-16 h-16"/></span><span className="text-[#000000] content-center">Athrus</span><span className="text-[#000000] content-center">Tick</span>  
                </div></Link>
                <div className="text-black mb-[15px] font-semibold text-3xl" >Sign in</div>
                <div className="text-black text-sm mb-[50px]">Hi, Welcome back to Urticket! <Link to="/Signup"><div className="hover:text-blue-300">Can't Login ? Sign Up</div></Link></div>
                <form onSubmit={btnlogin}> 
                    {responses && <div className="text-green-400">{responses}</div>}
                    <div className="flex flex-col gap-5 md:w-[315px] w-full mb-[15px] ">
                    {emailError && <div className="text-red-500">{emailError}</div>}
                    <input type="email" name="email" placeholder="Email #admin@mail.com" className="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <div className="relative w-full">
                    {passwordError && <div className="text-red-500">{passwordError}</div>}
                        <input type={New} name="password" placeholder="Password #12345678" className="absolute border-2 rounded-2xl w-full h-[55px] align-middle pl-4"/> 
                        <div className="w-[100%] flex justify-end">
                            <button type="button" onClick={showp}><img src={show} alt="" className="flex relative w-[45px] h-[45px] md:ml-[260px] pt-[10px]"/></button>
                        </div>
                    </div>
                    </div>  
                    <Link to="/Loginpassword"><div className="flex flex-col gap-7 text-sm text-right mb-5">Forgot Password?</div></Link>
                        <button type ="submit" className="w-[100%] h-[55px] bg-[#3366FF] mb-[48px] rounded-xl text-white">Sign In</button> 
                    
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
        {load ? <div className="bg-blue-400/50 fixed w-full h-screen top-0 left-0">
            <div className="flex justify-center items-center  h-screen">
                < FaSpinner className="animate-spin flex justify-center items-center w-60"/>
            </div>
        </div> : ""}
        
    </div>

    )
}
export default Login