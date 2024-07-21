import React, { useRef } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import filter from "../assets/img/filter.svg";
import ticket1 from "../assets/img/ticket1.svg";
import ticket2 from "../assets/img/ticket2.svg";
import ticket3 from "../assets/img/ticket3.svg";
import ticket from "../assets/img/ticket.svg";
import { Link } from "react-router-dom";
 



function Ticket() {
  let [count, set] = React.useState(0)
    function min(){
        count = count - 1
        set(count)

    }
    function plus(){
        count = count + 1
        set(count)
    }
    if (count <= -1){
        count = 0
    }
    // 2
    let [count2, set2] = React.useState(0)
    function min2(){
        count2 = count2 - 1
        set2(count2)

    }
    function plus2(){
        count2 = count2 + 1
        set2(count2)
    }
    if (count2 <= -1){
        count2 = 0
    }
    // 3
    let [count3, set3] = React.useState(0)
    function min3(){
      count3 = count3 -1
      set3(count3)
    } 
    function plus3(){
      count3 = count3 + 1
      set3(count3)
    }
    if (count3 <= -1){
      count3 = 0
    }

  return (
    <div className="md:bg-[#F4F7FF]">
      <div className="navbar">
        <Navbar2 />
      </div>
      <div className="">
        <div className="flex md:flex-row flex-col md:mt-[48px] md:mr-[120px] md:ml-[120px] md:mb-[100px] bg-white rounded-[30px] p-[100px]">
          <div className=" md:w-[50%] w-[100%]  h-[486px] mr-[88px]">
            <img src={ticket} alt="" className="w-auto h-full" />
          </div>
          <div className="md:w-[50%] w-[100%] md:ml-[88px]">
            <div className="mb-[25px] border-b-[2px]">
              <div className="flex items-center justify-between mb-[50px]">
                <div className="font-semibold tracking-[1px] text-xl text-[#373A42]">Tickets
                </div>
                <div className="flex items-center gap-[24px]">
                  <button className="font-semibold tracking-[1px] text-xs text-[#FC1055]">BY PRICE
                  </button>
                  <button type="submit" className=""><img src={filter} alt="" className="h-[24px] w-[24px]" />
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-[16px]">
                <div className="h-[45px] w-[45px] bg-[#F1EAFF] flex items-center justify-center rounded-[10px] mr-[16px]">
                  <img src={ticket1} alt="" className="" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold"> SECTION REG, ROW 1
                    </div>
                    <div className="text-xs text-[#BDC0C4]">12 Seats available
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1px] items-center">
                    <div className="text-[#373A42] font-semibold tracking-[1px]">$15
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
                  <button onClick={min} className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">-
                  </button>
                  <div className="">{count}</div>
                  <button onClick={plus}className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">+
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-[16px]">
                <div className="h-[45px] w-[45px] bg-[#FFEAEF] flex items-center justify-center rounded-[10px] mr-[16px]">
                  <img src={ticket2} alt="" className="" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold"> SECTION REG, ROW 2
                    </div>
                    <div className="text-xs text-[#BDC0C4]">9 Seats available
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1px] items-center">
                    <div className="text-[#373A42] font-semibold tracking-[1px]">$35
                    </div>
                    <div className="text-xs tracking-[0.5] text-[#BDC0C4]">per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[50px]">
                <div className="pl-[60px] tracking-[1px] text-xs font-semibold">
                  Quantity
                </div>
                <div className="flex gap-[20px] items-center">
                  <button onClick={min2} className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">
                    -
                  </button>
                  <div className="">{count2}</div>
                  <button onClick={plus2}className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#373A42]">
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-[16px]">
                <div className="h-[45px] w-[45px] bg-[#FFF4E7] flex items-center justify-center rounded-[10px] mr-[16px]">
                  <img src={ticket3} alt="" className="" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-sm text-[#373A42] font-semibold">SECTION REG, ROW 2
                    </div>
                    <div className="text-xs text-[#BDC0C4]">6 Seats available
                    </div>
                  </div>
                  <div className="flex flex-col gap-[1px] items-center">
                    <div className="text-[#373A42] font-semibold tracking-[1px]">$50
                    </div>
                    <div className="text-xs tracking-[0.5] text-[#BDC0C4]">per person
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-[25px]">
                <div className="pl-[60px] tracking-[1px] text-xs font-semibold">
                  Quantity
                </div>
                <div className="flex gap-[20px] items-center">
                  <button onClick={min3} className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">
                    -
                  </button>
                  <div className="">{count3}</div>
                  <button onClick={plus3} className="border border-solid w-[36px] h-[32px] border-[#C1C5D0] rounded-[6px] text-[#C1C5D0]">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#373A42] tracking-[1px] font-semibold">
                Ticket Section
              </div>
              <div className="text-[#3366FF] tracking-[1px] font-semibold">
                {("vip1(" + count + ")") + ("vip2(" + count2) + ")" + ("vip3(" + count3 + ")")}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[16px]">
              <div className="text-[#373A42] tracking-[1px] font-semibold">
                Quantity
              </div>
              <div className="text-[#3366FF] tracking-[1px] font-semibold">
                {count + count2 + count3}
              </div>
            </div>
            <div className="text-sm flex justify-between mb-[50px]">
              <div className="text-[#373A42] tracking-[1px] font-semibold">
                Total Payment
              </div>
              <div className="text-[#3366FF] tracking-[1px] font-semibold">
                {(count * 15) + (count2 * 35) + (count3 * 50)}$
              </div>
            </div>
            <Link to="/payment">
              <button type="submit" className="h-[55px] w-full md:max-w-[315px] bg-[#3366FF] text-white rounded-[15px]">Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
export default Ticket;
