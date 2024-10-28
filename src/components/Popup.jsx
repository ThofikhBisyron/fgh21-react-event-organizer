import react from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Popup(props) {
  const datatoken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loc, setLoc] = React.useState([])
  const [category, setCategory] = React.useState([])
  const [message, setMessage] = React.useState([])
  const [sections, setSections] = React.useState([{ name: "", price: "", quantity: "" }]);
  const addSection = () => {
    setSections([...sections, { name: "", price: "", quantity: "" }]);
  };
  
  const removeSection = (index) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  };

  useEffect(() => {
    async function Category() {
      const categoryFetch = await fetch(`http://localhost:8080/categories/?page=1&limit=100`)
      const categoryJson = await categoryFetch.json()
      console.log(categoryJson.results)
      setCategory(categoryJson.results)
      
    }
    Category()
  }, [])


 async function insertEvent(e) {
  e.preventDefault()
  const tittle = e.target.name.value
  const category = e.target.category.value
  const location = e.target.location.value
  const date = e.target.date.value
  const image = e.target.image.value
  const description = e.target.description.value

  const formdata = new URLSearchParams()
  formdata.append('tittle', tittle)
  formdata.append('date', date)
  formdata.append('image', image)
  formdata.append('description', description)
  formdata.append('location', location)

  const eventfetch = await fetch("http://localhost:8080/events/", {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + datatoken,
      },
    body: formdata,
  })
  const listevent = await eventfetch.json()
  console.log(listevent)
  if (listevent.success === true){
      const eventId = listevent.results.id

      const categoryForm = new URLSearchParams()
      categoryForm.append('event_id', eventId)
      categoryForm.append('category_id', category)

      const categoryResponse = await fetch(`http://localhost:8080/categories/`, {
        method: 'POST',
        body: categoryForm,
      })

      const categoryResult = await categoryResponse.json()
      console.log(categoryResult)

      if (categoryResult.success === true) {
        for (const section of sections) {
          const sectionForm = new URLSearchParams()
          sectionForm.append('event_id', eventId)
          sectionForm.append('name', section.name)
          sectionForm.append('price', section.price)
          sectionForm.append('quantity', section.quantity)

          const sectionResponse = await fetch(`http://localhost:8080/eventsection/`,{
            method: 'POST',
            body: sectionForm,
          })

          const sectionResult = await sectionResponse.json()
          console.log(sectionResult)
        }
      }

    props.close()
  }


 }

 useEffect(() =>{
  async function location() {
    const locationfetch = await fetch("http://localhost:8080/locations/")
    const listlocation = await locationfetch.json()
    setLoc(listlocation.results)
    
  }
  location()
}, [])  
  
  return (
    <div className="flex items-center justify-center bg-black/25 w-screen h-screen top-0 left-0 fixed">
      <div className="bg-white pr-[52px] w-4/5 h-screen rounded-[30px] pl-[52px] absolute shrink-0 overflow-y-scroll">
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
              <select type="text" name="category" id="category" placeholder="Select Category" className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]">
                {category.map((item) => {
                  return(
                    <option key={item.key} value={item.id}>{item.name}</option>
                  ) 
                })}
              </select>
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
        <div className="w-full flex justify-between">
        <div className="overflow-scroll max-h-[150px] mb-[30px] border border-gray-300 p-4 rounded-lg">
          {sections.map((section, index) => (
            <div key={index} className="flex gap-[60px] mb-[30px]">
              <div className="w-1/2">
                <label htmlFor={`section-name-${index}`} className="mb-[10px]">Section Name</label>
                <input
                  type="text"
                  name={`section-name-${index}`}
                  id={`section-name-${index}`}
                  value={section.name}
                  onChange={(e) => {
                    const newSections = [...sections];
                    newSections[index].name = e.target.value;
                    setSections(newSections);
                  }}
                  placeholder="Input Section Name ..."
                  className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px]"
                />
              </div>
              <div className="w-1/3">
                <label htmlFor={`section-price-${index}`} className="mb-[10px]">Price</label>
                <input
                  type="number"
                  name={`section-price-${index}`}
                  id={`section-price-${index}`}
                  value={section.price}
                  onChange={(e) => {
                    const newSections = [...sections];
                    newSections[index].price = e.target.value;
                    setSections(newSections);
                  }}
                  placeholder="Input Price ..."
                  className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px]"
                />
              </div>
              <div className="w-1/3">
                <label htmlFor={`section-quantity-${index}`} className="mb-[10px]">Quantity</label>
                <input
                  type="number"
                  name={`section-quantity-${index}`}
                  id={`section-quantity-${index}`}
                  value={section.quantity}
                  onChange={(e) => {
                    const newSections = [...sections];
                    newSections[index].quantity = e.target.value;
                    setSections(newSections);
                  }}
                  placeholder="Input Quantity ..."
                  className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px]"
                />
              </div>
              <div className="flex pt-6">
                <button type="button" onClick={() => removeSection(index)} className="text-red-700 bg-orange-300 p-2 rounded-2xl hover:opacity-70">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="items-center content-center mb-10 ml-4">
          <button type="button" onClick={addSection} className="bg-orange-950 text-white rounded-[15px] p-10 hover:opacity-60">Add Section</button>
        </div>
        </div>
        <div>
          <div className="w-full">
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
            type="submit"  onClick={props.butpop} className="h-[60px] w-full text-white bg-[#3366FF] max-w-[310px] rounded-[15px] hover:opacity-70">Save
          </button>
        </div>
        <div className="w-full text-right mb-[42px]">
          <button
            type="button" onClick={props.close} className="h-[60px] w-full text-white bg-[#3366FF] max-w-[310px] rounded-[15px] hover:opacity-70">Close
          </button>
        </div>
      </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
