
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
import profileimg from "../assets/img/profileimage.png"
import Sidebar from "../components/Sidebar"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react";
import { datainput } from "../redux/reducers/profile"





function Profile(){
    const datauser = useSelector((state) => state.profile.datauser)
    const datatoken = useSelector((state) => state.auth.token)
    const [national, setNational] = React.useState([])
    const [message, setMessage] = React.useState(false)
    const dispatch = useDispatch()
    const [selectedNationality, setSelectedNationality] = React.useState(datauser.profile.nationality_id);

    async function home(){
      const dataH = await fetch('http://localhost:8080/profile/',{
        headers: {
          Authorization: "Bearer " + datatoken,
        }
      })
    }
    
    useEffect(() =>{
        home()
      }, [])
  
      useEffect(() =>{
        async function Nationalities(){
          const fetchnational = await fetch("http://localhost:8080/profile/national")
          const listnational = await fetchnational.json()
          setNational(listnational.results)     
        }
        Nationalities()
      }, [])

    
      async function uploadImage(e) {
        const file = e.target.files[0];
      
        if (!file) {
          setMessage("Please select an image to upload.");
          return;
        }
  
        if (file.size > 2 * 1024 * 1024) {
          setMessage("File size exceeds 2 MB.");
          return;
        }
      
        const formData = new FormData();
        formData.append('profileImg', file);
      
        const fetchimg = await fetch("http://localhost:8080/profile/", {
          method: 'PATCH',
          headers: {
            Authorization: "Bearer " + datatoken,
          },
          body: formData,
        })
          const dataimg = await fetchimg.json()
          console.log(dataimg)
          if (dataimg.success === true) {
            dispatch(datainput({
              ...datauser, 
              profile: {
              ...datauser.profile,
              picture: dataimg.results.profile.picture
              }
            }))
            console.log(dataimg)
            setMessage(dataimg.message) 
          }else
            setMessage(dataimg.message)
      }
      
      async function updatep(e){
        e.preventDefault()
        const name = e.target.name.value
        const user = e.target.user.value 
        const email = e.target.email.value 
        const phone = e.target.phone.value 
        const prof = e.target.profession.value
        const national = e.target.national.value 
        const birth = e.target.birth.value

        const profilePicture = datauser.profile.picture
 
        const formData = new URLSearchParams()
        formData.append('full_name', name)
        formData.append('username', user)
        formData.append("email", email)
        formData.append("phone_number", phone)
        formData.append("profession", prof)
        formData.append("nationality_id", national)
        formData.append("birth_date", birth)

        if (e.target.files !== "") {
          const file = e.target.files;
          const newFormData = new FormData();
          newFormData.append('profileImg', file);
          await fetch("http://localhost:8080/profile/", {
              method: 'PATCH',
              headers: {
                  Authorization: "Bearer " + datatoken,
              },
              body: newFormData,
          });
      } else {
          formData.append('picture', profilePicture);
      }
        
        const datafetch = await fetch("http://localhost:8080/profile/update",{
          method: 'PATCH',
          headers: {
            Authorization: "Bearer " + datatoken,
          },  
          body: formData,
        })
        const dataprofile = await datafetch.json()
        console.log(dataprofile)
        if (dataprofile.success === true){
          const updatedProfile = {
            ...datauser,
            ...dataprofile.results,
            profile: {
              ...datauser.profile,
              nationality_id: national,
              picture: profilePicture,
            }
          }
          dispatch(datainput(updatedProfile))
          setSelectedNationality(updatedProfile.profile.nationality_id); 
          setMessage(dataprofile.message)
        }else{
          setMessage(dataprofile.message)
        }
        }

    return(
        <div className="bg-gradient-to-bl from-yellow-300 to-amber-800">
            <Navbar/>
            <div className="flex mt-[50px]">
                <div className="md:w-[30%] hidden md:block">
                    <Sidebar/>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:w-[70%] w-[100%] md:bg-gray-200 rounded-[30px] mr-[70px]">
                    <div className="md:w-[60%] w-[100%]">
                        <div className="ml-[50px] mb-[50px] mt-[46px] hidden md:block">Profile</div>
                    <form className="flex flex-col w-full md:w-[80%] ml-[50px]" onSubmit={updatep}>
                        {message && <div className="text-red-400 mb-10">{message}</div>}
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Name</label>
                            <input type="text" name="name" defaultValue={datauser.profile.full_name} className="h-[55px] w-[100%] border rounded-2xl md:ml-[95px] pl-5 "/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Username</label> 
                            <input type="text" name="user" defaultValue={datauser.user.username} className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5  "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Email</label>
                            <input type="text" name="email" defaultValue={datauser.user.email} className="h-[55px] w-[100%] border rounded-2xl md:ml-[99px] pl-5  "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>  
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Phone Number</label>
                            <input type="text" name="phone" defaultValue={datauser.profile.phone_number} className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5  "/>
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
                            <input type="text" name="profession" defaultValue={datauser.profile.profession} placeholder="Endivepreneur" className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5  "/>
                            </div>
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Nationality</label>
                            <select type="text" name="national" className="h-[55px] w-[100%] border rounded-2xl md:ml-[65px] pl-5" value={selectedNationality} onChange={(e) => setSelectedNationality(e.target.value)}>
                                {national.map((item) => {
                                return (    
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                );
                              })}
                              </select>
                            
                            </div>  
                            <div className="flex mb-[50px] flex-col md:flex-row gap-2 md:items-center">
                            <label>Birthday Date</label>
                            <input type="date" name="birth" defaultValue={datauser.profile.birth_date} className="h-[55px] w-[100%] border rounded-2xl md:ml-[75px] pl-5  "/>
                            {/* <div className="ml-3 border-b-2 text-blue-500 w-6">Edit</div> */}
                            </div>
                            <div className="w-full h-[60px] bg-slate-400 text-center align-middle rounded-3xl content-center">
                                <button type="submit" className="text-3xl ">SAVE</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[30%] w-full ml-9 mt-24">
                        <div className="w-full" onSubmit={uploadImage}>
                            <div className="flex justify-center">
                                <img src={datauser.profile.picture === null ? profileimg : datauser.profile.picture} alt="" className="w-[137px] h-[137px] mb-[50px] rounded-full" />
                            </div>
                            <div className="w-full md:w-full  h-[40px] bg-white rounded-[10px] text-center content-center border border-blue-500">
                                <label htmlFor="img">Choose Photo</label>
                                <input type="file" name="img" id="img" className="hidden" accept=".jpg, .jpeg, .png" onChange={uploadImage}/>
                            </div>
                        </div>
                            <div className="md:flex flex-col gap-[15px] ml-[50px] md:mt-10 hidden ">
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