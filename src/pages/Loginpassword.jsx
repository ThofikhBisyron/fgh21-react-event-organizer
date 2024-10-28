import React from "react" ;
import logo from "../assets/img/logo_blur.svg"
import google from "../assets/img/google.svg"
import facebok from "../assets/img/facebook.svg"
import family from "../assets/img/family.svg"
import Footer from "../components/Footer"
import binancecover from "../assets/img/binancelogo.svg"
import binancelogo from "../assets/img/logobinance.png"
import orangelogin from "../assets/img/orangelogin.jpg"
import show from "../assets/img/showpassword.svg"
import ticket from "../assets/img/logoticket.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Loginpassword() {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false)

  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  function btnlogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    if (email === "admin@mail.com") {
      setError("Check Your Email!");
      navigate("/login");
    } else {
      setError("Your Email not Register");
    }
  }
  return (
    <div className="bg-gradient-to-b from-yellow-300 via-orange-500 to-amber-800">
            <div className="flex ">
            <div className="bg-[#000000] h-[100vh] md:w-[75%] hidden md:block">
                <img src={orangelogin} alt="" className="w-full h-full hover:opacity-70 object-cover" />       
            </div>
            <div className="md:w-[25%] w-full mt-[20px] text-2xl md:ml-[140px] md:mr-[100px] ml-[50px] mr-[50px]">
                <div className="md:w-[316px] w-[100%] md:h-[614px]">
                  <Link to="/Login"><div className="flex mb-[50px]"><span><img src={ticket} alt="" className="w-16 h-16"/></span><span className="text-[#000000] content-center">Athrus</span><span className="text-[#000000] content-center">Tick</span>  
                </div></Link>
                <div className="text-black mb-[15px] font-semibold text-3xl" >Forgot Password</div>
                <div className="text-black text-sm mb-[50px]">You’ll get mail soon on your email</div>
                <form onSubmit={btnlogin}> 
                    {error && <div className="text-red-400">{error}</div>}  
                    <div className="flex flex-col gap-5 md:w-[315px] w-full mb-[15px] ">
                    <input type="email" name="email" placeholder="Email" className="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    </div>
                    <div className="flex flex-col gap-7 text-sm text-right">Forgot Password?
                        <button type ="submit" className="w-[100%] h-[55px] bg-[#3366FF] mb-[48px] rounded-xl text-white">Send</button> 
                    </div>
                </form>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Loginpassword;
