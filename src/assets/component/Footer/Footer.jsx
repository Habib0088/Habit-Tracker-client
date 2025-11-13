import React from "react";
import { FaFacebook, FaTelegram, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black  py-5 space-y-5">
      <div className="flex justify-center items-center">
        <img
          className="w-[50px] h-[50px] rounded-full "
          src="https://i.ibb.co.com/3yy1pp75/logo2.png"
          alt=""
        />
        <h1 className="font-bold text-white text-2xl ml-4">Habit Tracker</h1>
      </div>
      {/* Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-3  mx-auto text-white justify-center  items-center">
        <div className=" text-center" >
          <h3 className="text-white">Contact</h3>
          <p className="text-white">2/3 Road-4 Uttora Dhaka</p>
        </div>
        <div className="text-center">Terms & Conditions</div>
        <div className="text-center mx-auto" >
          <ul className="flex gap-4">
            <li className="hover:scale-115">
              <FaFacebook />
            </li>
            <li className="hover:scale-115 rounded-full">
              <FaWhatsappSquare />
            </li>
            <li className="hover:scale-115">
              <FaTelegram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
