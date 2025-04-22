import React, { useEffect, useState } from "react";
import ticket1 from "../assets/img/ticket1.svg";



function Transaction(props){

    const [num, setNum] = useState(0);

    useEffect(() => {
        const current = props.currentData;
        current[props.index] = {
          id: props.data.id,
          name: props.data.name,
          price: num * props.data.price,
          quantity: num,
        };
        props.onChange([...current]);
        console.log(current)
      }, [num]);


    return(
    <div>
        <div className="flex items-center mb-[16px]">
            <div className="h-[45px] w-[45px] bg-[#F1EAFF] flex items-center justify-center rounded-[10px] mr-[16px]">
                <img src={ticket1} alt="" className="" />
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold">{props.data.name}
                    </div>
                    <div className="text-xs text-[#BDC0C4]">{props.data.quantity} Seats available
                    </div>
                </div>
                    <div className="flex flex-col gap-[1px] items-center">
                        <div className="text-[#373A42] font-semibold tracking-[1px]">Rp{props.data.price.toLocaleString("id")}
                        </div>  
                        <div className="text-xs tracking-[0.5] text-[#BDC0C4]">per person
                        </div>
                    </div>
            </div>
        </div>
            <div className="flex justify-between items-center mb-[50px]">
                <div className="pl-[60px] tracking-[1px] text-xs font-semibold">Quantity
                </div>
                <div className="flex gap-[20px] items-center">  
                    <button onClick={()=> setNum(num > 0 ? num - 1 : 0 )} className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">-
                    </button>
                    <div className="">{num}</div>
                    <button onClick={()=> setNum(num +1)} className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">+
                    </button>
                </div>
            </div>
    </div>
    )
}
export default Transaction