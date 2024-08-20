import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import card from "../assets/img/card.svg";
import arrowUp from "../assets/img/arrow-up.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import payment from "../assets/img/payment.svg";
import bank from "../assets/img/bank.svg";
import retail from "../assets/img/retail.svg";
import money from "../assets/img/money.svg";
import { Link } from "react-router-dom";

function Payment() {


  return (
    <div className="bg-yellow-300">
      <Navbar />
      <div className="">
        <div className="flex flex-col md:flex-row md:mt-[48px] md:mr-[120px] md:ml-[120px] mb-[100px] gap-y-20 bg-yellow-300 md:bg-gray-200 rounded-[30px] p-[100px]">
          <div className=" md:w-[50%] w-[100%] h-[486px] md:mr-[88px]">
            <div className="text-[#373A42] tracking-[1px] font-semibold text-xl mb-[50px]">Payment Method
            </div>
            <label htmlFor="card" className="flex justify-between items-center mb-[16px]">
              <div className="flex gap-[16px] items-center">
                <input type="radio" name="card" id="card" />
                <span className="">
                  <img src={card} alt="" className="p-[10px] bg-[#E7DBFF] rounded-[10px]"/>
                </span>
                <span className="font-semibold tracking-[1px] text-sm">Card
                </span>
              </div>
              <div className="">
                <img src={arrowUp} alt="" />
              </div>
            </label>
            <div className="flex justify-between pl-[30px] gap-[6px] items-center mb-[40px]">
              <div className="">
                <img src={payment} alt="" />
              </div>
              <div className="w-[45px] h-[45px] border border-dotted border-[#3366FF] text-3xl rounded-[10px] flex justify-center items-center text-[#3366FF]">
                +
              </div>
            </div>
            <label htmlFor="bank" className="flex justify-between items-center mb-[16px]">
              <div className="flex gap-[16px] items-center">
                <input type="radio" name="card" id="bank" />
                <span className=""><img src={bank} alt="" className="p-[11px] bg-[#FECFDD] rounded-[10px]"/>
                </span>
                <span className="font-semibold tracking-[1px] text-sm">Bank Transfer
                </span>
              </div>
              <div className="">
                <img src={arrowDown} alt="" />
              </div>
            </label>
            <label htmlFor="retail" className="flex justify-between items-center mb-[16px]">
              <div className="flex gap-[16px] items-center">
                <input type="radio" name="card" id="retail" />
                <span className="">
                  <img src={retail} alt="" className="pt-[10px] pb-[10px] pl-[13px] pr-[13px] bg-[#FFE7CC] rounded-[10px]"/>
                </span>
                <span className="font-semibold tracking-[1px] text-sm">Retail</span>
              </div>
              <div className="">
                <img src={arrowDown} alt="" />
              </div>
            </label>
            <label htmlFor="money" className="flex justify-between items-center mb-[16px]">
              <div className="flex gap-[16px] items-center">
                <input type="radio" name="card" id="money" />
                <span className="">
                  <img src={money} alt="" className="pt-[10px] pb-[10px] pl-[11px] pr-[11px] bg-[#D6E0FF] rounded-[10px]"/>
                </span>
                <span className="font-semibold tracking-[1px] text-sm">E-Money</span>
              </div>
              <div className=""><img src={arrowDown} alt=""/>
              </div>
            </label>
          </div>
          <div className="md:w-[50%] w-[100%] md:ml-[88px]">
            <div className="text-xl tracking-[1px] text-[#373A42] font-semibold mb-[50px]">Ticket Detail
            </div>
            <div className="justify-between mb-[16px] hidden md:flex flex-row">
              <div className="text-sm text-[#373A42] tracking-[0.5px] font-semibold">Event
              </div>
              <div className="text-sm text-[#3366FF] tracking-[0.5px] font-semibold">Sights & Sounds Exhibition
              </div>
            </div>
            <div className="flex justify-between mb-[16px]">
              <div className="text-sm text-[#373A42] tracking-[0.5px] font-semibold">Ticket Section
              </div>
              <div className="text-sm text-[#3366FF] tracking-[0.5px] font-semibold">VIP
              </div>
            </div>
            <div className="flex justify-between mb-[16px]">
              <div className="text-sm text-[#373A42] tracking-[0.5px] font-semibold">Quantity
              </div>
              <div className="text-sm text-[#3366FF] tracking-[0.5px] font-semibold">2
              </div>
            </div>
            <div className="flex justify-between mb-[50px]">
              <div className="text-sm text-[#373A42] tracking-[0.5px] font-semibold">Total Payment
              </div>
              <div className="text-sm text-[#3366FF] tracking-[0.5px] font-semibold">$70
              </div>
            </div>
            <Link to="/Mybooking"><button type="submit" className="w-full h-[50px] bg-[#3366FF] text-white rounded-[15px]">Payment</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
