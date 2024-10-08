import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Popup(props) {
  const datatoken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loc, setLoc] = React.useState([])


 async function insertEvent(e) {
  e.preventDefault()
  const tittle = e.target.name.value
  // const category = e.target.category.value
  const location = e.target.location.value
  const date = e.target.date.value
  // const price = e.target.price.value
  const image = e.target.image.value
  const description = e.target.description.value

  const formdata = new URLSearchParams()
  formdata.append('tittle', tittle)
  formdata.append('date', date)
  formdata.append('image', image)
  formdata.append('description', description)
  formdata.append('location', location)

  const eventfetch = await fetch("http://103.93.58.89:21214/events/", {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + datatoken,
      },
    body: formdata,
  })
  const listevent = await eventfetch.json()
  console.log(listevent)
  if (listevent.success === true){
    props.close()
  }


 }

 useEffect(() =>{
  async function location() {
    const locationfetch = await fetch("http://103.93.58.89:21214/locations/")
    const listlocation = await locationfetch.json()
    console.log(listlocation.results)
    setLoc(listlocation.results)
    
  }
  location()
}, [])  
  
  return (
    <div className="flex items-center justify-center bg-black/25 w-screen h-screen top-0 left-0 fixed">
      <div className="bg-white pr-[52px] w-4/5 rounded-[30px] pl-[52px] absolute ">
        <div className="pt-[32px] font-semibold tracking-[1px] mb-[44px]">Create Event</div>
        <form onSubmit={insertEvent}>
        <div className="w-full flex gap-[60px]">
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Name</label>
            <div>
              <input type="text" name="name" id="name" placeholder="Input Name Event ..." className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="category" className="mb-[10px]">Category</label>
            <div className="">
              <input type="text" name="category" id="category" placeholder="Select Category" className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-[60px]">
          <div className="w-1/2">
            <label htmlFor="location" className="mb-[10px]">Location</label>
            <div>
              <select type="text" name="location" id="location" placeholder="Select Location" className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]">
              {loc.map((item) => {
                return(
                  <option key={item.key} value={item.id}>{item.name}</option>
                )
              })}
              </select>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="date" className="mb-[10px]">Date Time Show</label>  
            <div className="">
              <input type="datetime-local" name="date" id="date" placeholder="01/01/2022" className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-[60px]">
          <div className="w-1/2">
            <label htmlFor="price" className="mb-[10px]">Price</label>
            <div className="">
              <input type="number" name="price" id="price" placeholder="Input Price ..." className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="image" className="mb-[10px]">Image</label>
            <div>
              <input type="text" name="image" id="image" placeholder="Chose File ..." className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-[10px]" htmlFor="description">Detail</div>
          <input type="text" name="description" id="description" placeholder="Input Detail ..." className="h-[95px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[46px] "/>
        </div>
      <div className="flex">
        <div className="w-full text-right mb-[42px]">
          <button
            type="submit"  onClick={props.butpop} className="h-[60px] w-full text-white bg-[#3366FF] max-w-[310px] rounded-[15px]">Save
          </button>
        </div>
        <div className="w-full text-right mb-[42px]">
          <button
            type="button" onClick={props.close} className="h-[60px] w-full text-white bg-[#3366FF] max-w-[310px] rounded-[15px]">Close
          </button>
        </div>
      </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
