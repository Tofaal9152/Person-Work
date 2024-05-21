import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import YoutubeLogo from "../assets/YoutubeLogo.jpeg";
import search from "../assets/search.png";
import upload from "../assets/upload.png";
import jack from "../assets/jack.png";
import { useDispatch, useSelector } from "react-redux";
import { decrement, hideNav, increment, incrementByAmount } from "../redux/Counter/counterSlice";


const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideNav());
  };

  return (
    <div className="flex fixed bg-white w-full max-w-full items-center justify-between px-[1%] py-[0.5%]">
      <div className="flex space-x-4 items-center justify-center">
        <RxHamburgerMenu onClick={handleClick} className="cursor-pointer" />
        <img className="w-[7rem]" src={YoutubeLogo} alt="YouTube Logo" />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex space-x-4 items-center justify-center rounded-full border-2 w-[35rem]">
          <input className="w-[30rem] p-[0.4rem] outline-none" type="text" />
          <img src={search} alt="Search" />
        </div>
        <MdOutlineKeyboardVoice size={30} />
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <img className="w-7" src={upload} alt="Upload" />
        <IoIosNotifications size={25} />
        <img className="rounded-[50%] w-10" src={jack} alt="User Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
