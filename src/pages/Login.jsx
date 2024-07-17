import React from "react" 
import logo from "../assets/img/logo_blur.svg"
import google from "../assets/img/google.svg"
import facebok from "../assets/img/facebook.svg"
import family from "../assets/img/family.svg"
import Footer from "../components/Footer"




function Login(){



    return(
        <div>
            <div class="flex ">
            <div class="w-[75%] h-[100vh] bg-[#3366FF]">
                <img src={family} alt="" class="pl-[17%] pt-[8%]" />       
            </div>
            <div class="w-[25%] mt-[20px] text-2xl ml-[140px] mr-[100px]">
                <div class="w-[316px] h-[614px]">
                    <div class="flex mb-[50px]"><span><img src={logo} alt=""/></span><span class="text-[#3366FF] content-center">we</span><span class="text-[#FF3D71] content-center">tick</span>  
                </div>
                <div class="text-black text-base mb-[15px]" >Sign in</div>
                <div class="text-black text-sm mb-[50px]">Hi, Welcome back to Urticket! </div>
                <form>
                    <div class="w-[315px] mb-[15px]">
                    <input type="text" name="username" placeholder="Username" class="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <input type="email" name="email" placeholder="Email" class="border-2 rounded-2xl h-[55px] w-[100%] align-middle pl-4"/>
                    <input type="password" name="password" placeholder="Password" class="border-2 rounded-2xl w-[100%] h-[55px] align-middle pl-4"/>
                    </div>
                    <div class="flex flex-col gap-7 text-sm text-right">Forgot Password?
                        <button class="w-[315px] h-[55px] bg-[#3366FF] mb-[48px] rounded-xl text-white">Sign In</button> 
                    </div>
                    <div class="align-middle text-center text-sm mb-[15px]">or sign in with</div>
                        <div class="flex gap-4 justify-center">
                            <button class="w-[95px] h-[52px] border pl-9 border-blue-500"><img src={google} alt="" /></button>
                            <button class="w-[95px] h-[52px] border pl-9 border-blue-500"><img src={facebok} alt="" /></button>
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