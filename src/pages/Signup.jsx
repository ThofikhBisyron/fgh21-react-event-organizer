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

 



function Signup(){
    const navigate = useNavigate(); 
//     function logindo(e) {
//     e.preventDefault();
//     const name = e.target.username.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     if (name === "admin" && email === "admin@mail.com" && password === "1234") {
//       window.alert("Login Success!");
//       navigate("/index");
//     } else {
//       window.alert("Wrong email or password!");
//     }
//   }
    
 
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
    
        if (name !== "") {
          if (email !== "") {
            if (password !== "") {
              if (confirmpass === password) {
                navigate("/Login");
                window.alert("Registration Success! Please Log In");
              } else {
                window.alert("Password and Confirm Password Must same!");
              }
            } else {
              window.alert("You must fill the password!");
            }
          } else {
            window.alert("You must fill the email!");
          }
        } else {
          window.alert("You must fill the name!");
        }
      }

    return(
        <div className="bg-yellow-300">
            <div className="flex ">
            <div className="md:w-[75%] h-[1000px] bg-[#000000] hidden md:block">
                <img src={orangelogin} alt="" className="w-[1100px] h-[1000px]" />       
            </div>
            <div className="md:w-[25%] w-[100%] mt-[20px] text-2xl md:ml-[140px] md:mr-[100px] ml-[50px] mr-[50px]">
                <div className="md:w-[316px] w-full md:h-[614px]">
                    <Link to="/Login"><div className="flex mb-[50px]"><span><img src={ticket} alt="" className="w-16 h-16"/></span><span className="text-[#000000] content-center">Athrust</span><span className="text-[#000000] content-center">Tick</span>  
                </div></Link>
                <div className="text-black text-base mb-[15px]" >Sign in</div>
                <div className="text-black text-sm mb-[50px]">Hi, Welcome back to Urticket! </div>
                <form onSubmit={btnlogin}> 
                    <div className="flex flex-col gap-5 w-full mb-[15px] ">
                    <input type="text" name="name" placeholder="Fullname" className="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <input type="email" name="email" placeholder="Email" className="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <div className="w-full"> 
                        <input type={New} name="password" placeholder="Password" className="absolute border-2 rounded-2xl w-[86%] md:max-w-[315px] h-[55px] align-middle pl-4"/> 
                        <div className="w-[100%] flex justify-end">
                            <button type="button" onClick={showp}><img src={show} alt="" className="flex w-[45px] h-[45px] relative md:ml-[260px] pt-[10px]"/></button>
                        </div>
                    </div>
                    <div>
                        <input type={New2} name="confirmpassword" placeholder="Confirm Password" className="absolute border-2 rounded-2xl w-[86%] md:max-w-[315px] h-[55px] align-middle pl-4"/> 
                        <div className="w-[100%] flex justify-end">
                            <button type="button" onClick={showp2}><img src={show} alt="" className="flex w-[45px] h-[45px] relative md:ml-[260px] pt-[10px]"/></button>
                        </div>
                    </div>
                    <div className="flex gap-3 text-sm ml-3"><input type="checkbox" name="cek"/>Accept terms and condition</div>
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