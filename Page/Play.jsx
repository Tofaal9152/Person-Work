import React from "react";
import RightSidebar from "./RightSidebar";
import img from "../../assets/img2.jpg";

const Play = () => {
  return (
    <div className="w-[60%] bg-green-500 flex flex-col justify-center items-start ">
      <div className="space-y-3 ">
        <div className="card w-[44rem] h-[24rem] bg-gray-500 rounded-lg ">
          item
        </div>
        <p className="font-semibold ">
          Full Highlights | Chennai Super Kings Vs Rajasthan Royals IPL Match 61
          2024 | CSK VS GT
        </p>
        <div className="flex items-center justify-between">
          <div className="left">
            <div className="flex space-x-3 Channel">
              <img className="w-[3rem] rounded-[50%]" src={img} alt="" />
              <div>
                <p className="font-semibold">Total Gaming</p>
                <p>188K subscribers</p>
              </div>
              <button class="bg-transparent bg-black  text-white font-semibold  py-2 px-4 border rounded-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="right">
            <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
              Like
            </button>
            <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
              Download
            </button>
            <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
              Share
            </button>
            <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
              :
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
