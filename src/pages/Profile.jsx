
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
import { useSelector } from "react-redux"
import React, { useEffect } from "react";





function Profile(){
    const datauser = useSelector((state) => state.profile.datauser)
    console.log(datauser)
    console.log(datauser.profile)
    console.log(datauser.user)
    const datatoken = useSelector((state) => state.auth.token)
    // const [listprofesion, setlistprofesion] = React.useState([])
    // const [listnationality, setlistnationality] = React.useState([])
    const [national, setNational] = React.useState([])
    useEffect(() =>{
        async function home(){
          const dataH = await fetch('http://localhost:8080/profile/',{
            headers: {
              Authorization: "Bearer " + datatoken,
            }
          })
        }
        home()
      }, [])

      useEffect(() =>{
        async function Nationalities(){
          const fetchnational = await fetch("http://localhost:8080/profile/national")
          const listnational = await fetchnational.json()
          // console.log(eventdata.results)
          // dispatch(listevent(eventdata.results))
          console.log(listnational.results[82].name)
          console.log(listnational)
          setNational(listnational.results)
          
    
          
        }
        Nationalities()
      }, [])


      function updatep(e){
        e.preventDefault()
        const name = e.target.name.value
        const user = e.target.user.value 
        const email = e.target.email.value 
        const phone = e.target.phone.value 
        const prof = e.target.profession.value
        const national = e.target.national.value 
        const birth = e.target.birth.value

        const formData = new URLSearchParams()
        formData.append('full_name', name)
        formData.append('username', user)
        formData.append("email", email)
        formData.append("phone_number", phone)
        formData.append("profession", prof)
        formData.append("nationality_id", national)
        formData.append("birth_date", birth)
   
      }

      
    // useEffect(() => {
    //     async function nasional() {
    //       const dataNasional = await fetch(
    //         "https://wsw6zh-8888.csb.app/profile/nationalities",
    //         {
    //           headers: {
    //             Authorization: "Bearer " + datatoken,
    //           },
    //         }
    //       );
    //       const listnasional = await dataNasional.json();
    //       setlistnationality(listnasional.results);
    //     }
        
    //     nasional();
    //   }, []);   

    return(
        <div className="bg-yellow-300">
            <Navbar/>
            <div className="flex mt-[50px]">
                <div className="md:w-[30%] hidden md:block">
                    <Sidebar/>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:w-[70%] w-[100%] bg-yellow-300 md:bg-gray-200 rounded-[30px] mr-[70px]">
                    <div className="md:w-[60%] w-[100%]">
                        <div className="ml-[50px] mb-[50px] mt-[46px] hidden md:block">Profile</div>
                    <form className="flex flex-col w-[100%] ml-[50px]">
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Name</label>
                            <input type="text" name="name" defaultValue={datauser.profile[0].full_name} className="h-[55px] w-[100%] border rounded-2xl md:ml-[95px] pl-5 mr-32"/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Username</label> 
                            <input type="text" name="user" defaultValue={datauser.user.username} className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5 mr-32 "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Email</label>
                            <input type="text" name="email" defaultValue={datauser.user.email} className="h-[55px] w-[100%] border rounded-2xl md:ml-[99px] pl-5 mr-32 "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>  
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Phone Number</label>
                            <input type="text" name="phone" defaultValue={datauser.profile[0].phone_number} className="h-[55px] w-[100%] border rounded-2xl md:ml-[85px] pl-5 mr-32 "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Gender</label>
                            <div className="flex gap-[50px] md:ml-[95px] w-full">
                                <div><input type="radio" checked/>Male</div>
                                <div><input type="radio"/>Female</div>
                            </div>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Profession</label>
                            <input type="text" name="profession" defaultValue={datauser.profile[0].profession} placeholder="Endivepreneur" className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5 mr-32 "/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Nationality</label>
                            <select type="text" name="national" className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5 mr-32">
                                {national.map((item) => {
                                return (    
                                 <option value="" selected="" >{item.name}
                                  </option>
                                );
                              })}
                              </select>
                            
                            </div>  
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Birthday Date</label>
                            <input type="text" name="birth" defaultValue={datauser.profile[0].birth_date} className="h-[55px] w-[100%] border rounded-2xl md:ml-[82px] pl-5 mr-32 "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>
                            <div className="w-full h-[60px] bg-slate-400 text-center align-middle rounded-3xl content-center">
                                <button type="submit" className="text-3xl ">SAVE</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[40%] w-full ml-9">
                        <div className="w-full h-[303px] md:border-l-2 mt-9" >
                            <div className="flex justify-center">
                                <img src={datauser.profile[0].picture} alt="" className="w-[137px] h-[137px] mb-[50px] rounded-full" />
                            </div>
                            <div className="hidden md:block">
                                <button className="w-full md:w-[60%]  h-[40px] md:ml-20 bg-white rounded-[10px] text-center border border-blue-500" >Choose Photo</button>
                            </div>
                        </div>
                            <div className="flex flex-col gap-[15px] ml-[50px] hidden md:block">
                                <div>Image size: max, 2 MB</div>
                                <div>Image formats: .JPG, .JPEG, .PNG</div>
                            </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>

    )
}
export default Profile