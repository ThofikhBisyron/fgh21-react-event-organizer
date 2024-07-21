import React from "react";

function Popup() {
  return (
    <div className="flex items-center justify-center bg-black/25 w-full h-screen relative">
      <div className="bg-white pr-[52px] w-4/5 rounded-[30px] pl-[52px] absolute ">
        <div className="pt-[32px] font-semibold tracking-[1px] mb-[44px]">Create Event</div>
        <div className="w-full flex gap-[60px]">
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Name</label>
            <div>
              <input type="text" name="name" id="name" placeholder="Input Name Event ..." className="h-[55px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Category</label>
            <div className="">
              <input type="text" name="name" id="name" placeholder="Select Category" className="h-[55px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-[60px]">
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Location</label>
            <div>
              <input type="text" name="name" id="name" placeholder="Select Location" className="h-[55px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Date Time Show</label>  
            <div className="">
              <input type="text" name="name" id="name" placeholder="01/01/2022" className="h-[55px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-[60px]">
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Price</label>
            <div className="">
              <input type="number"name="name" id="name" placeholder="Input Price ..." className="h-[55px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="name" className="mb-[10px]">Image</label>
            <div>
              <input type="text" name="name" id="name" placeholder="Chose File ..." className="h-[55px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"/>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-[10px]">Detail</div>
          <input type="text" name="" id="" placeholder="Input Detail ..." className="h-[95px] border border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[46px] "/>
        </div>
        <div className="w-full text-right mb-[42px]">
          <button
            type="submit" className="h-[60px] w-full text-white bg-[#3366FF] max-w-[310px] rounded-[15px]">Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
