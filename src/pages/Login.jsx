import React from "react" ;
import logo from "../assets/img/logo_blur.svg"
import google from "../assets/img/google.svg"
import facebok from "../assets/img/facebook.svg"
import family from "../assets/img/family.svg"
import Footer from "../components/Footer"
import show from "../assets/img/showpassword.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

 



function Login(){

const navigate = useNavigate();

function btnlogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "admin@mail.com" && password === "1234") {
        window.alert("Login Success!");
        navigate("/");
    } else {
        window.alert("Wrong email or password!");
    }
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
            <div className="flex ">
            <div className="md:w-[75%] h-[100vh] bg-[#3366FF] hidden md:block">
                <img src={family} alt="" className="pl-[17%] pt-[8%]" />       
            </div>
            <div className="md:w-[25%] w-[100%] mt-[20px] text-2xl md:ml-[140px] md:mr-[100px] ml-[50px] mr-[50px]">
                <div className="md:w-[316px] w-[100%] md:h-[614px]">
                    <Link to="/Index"><div className="flex mb-[50px]"><span><img src={logo} alt=""/></span><span className="text-[#3366FF] content-center">we</span><span className="text-[#FF3D71] content-center">tick</span>  
                </div></Link>
                <div className="text-black mb-[15px] font-semibold text-3xl" >Sign in</div>
                <div className="text-black text-sm mb-[50px]">Hi, Welcome back to Urticket! </div>
                <form onSubmit={btnlogin}> 
                    <div className="flex flex-col gap-5 md:w-[315px] w-full mb-[15px] ">
                    <input type="text" name="username" placeholder="Username" className="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <input type="email" name="email" placeholder="Email" className="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <div> 
                        <input type={New} name="password" placeholder="Password" className="absolute border-2 rounded-2xl w-full max-w-[86%] md:max-w-[315px] h-[55px] align-middle pl-4"/> 
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

    )
}
export default Login