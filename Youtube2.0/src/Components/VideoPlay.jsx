import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import jack from "../assets/jack.png";
import { API_KEY } from "../Api/youtube";
import axios from "axios";
import { useEffect } from "react";

const VideoPlay = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [singleVideo, setsingleVideo] = useState("");
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );

      setsingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
  return (
    <>
      {/* Left */}
      <div className="Left flex flex-col space-y-4 w-[853px]">
        <iframe
          className="rounded-xl"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}?si=Qidb4-CLK7P9cR9D`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-semibold">{singleVideo?.snippet?.title}</h1>
        <div className="flex justify-between">
          <div className="left flex space-x-3 ">
            <img
              className="rounded-[50%]  w-[2.5rem] h-[2.5rem] object-cover cursor-pointer"
              src={jack}
              alt="User Avatar"
            />
            <div>
              <p className="font-semibold cursor-pointer">
                {singleVideo?.snippet?.channelTitle}
              </p>
              <p className="text-gray-500 cursor-pointer">3.51K subscribers</p>
            </div>
            <button className=" bg-black hover:bg-[#272727] text-white font-semibold  py-2 px-4 border rounded-full">
              Subscribe
            </button>
          </div>
          <div className="right flex space-x-3 justify-center items-center ">
            <div className="flex cursor-pointer justify-between items-center bg-[#F2F2F2] hover:bg-[#E5E5E5]  text-black font-semibold px-2 py-1 rounded-md space-x-3">
              <AiOutlineLike size={23} />
              <BiDislike size={23} />
            </div>
            <div className="bg-[#F2F2F2] cursor-pointer hover:bg-[#E5E5E5] space-x-2  text-black font-semibold px-2 py-1 rounded-md flex justify-between items-center">
              <IoIosShareAlt size={23} /> <span>Share</span>
            </div>
            <div className="bg-[#F2F2F2] cursor-pointer hover:bg-[#E5E5E5] space-x-2  text-black font-semibold px-2 py-1 rounded-md flex justify-between items-center">
              <BsDownload size={20} />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
    </>
  );
};

export default VideoPlay;
// import React from "react";
// import RightSidebar from "./RightSidebar";
// import img from "../../assets/img2.jpg";

// const Play = () => {
//   return (
//     <div className="w-[60%] bg-green-500 flex flex-col justify-center items-start ">
//       <div className="space-y-3 ">
//         <div className="card w-[44rem] h-[24rem] bg-gray-500 rounded-lg ">
//           item
//         </div>
//         <p className="font-semibold ">
//           Full Highlights | Chennai Super Kings Vs Rajasthan Royals IPL Match 61
//           2024 | CSK VS GT
//         </p>
//         <div className="flex items-center justify-between">
//           <div className="left">
//             <div className="flex space-x-3 Channel">
//               <img className="w-[3rem] rounded-[50%]" src={img} alt="" />
//               <div>
//                 <p className="font-semibold">Total Gaming</p>
//                 <p>188K subscribers</p>
//               </div>
//               <button class="bg-transparent bg-black  text-white font-semibold  py-2 px-4 border rounded-full">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//           <div className="right">
//             <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
//               Like
//             </button>
//             <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
//               Download
//             </button>
//             <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
//               Share
//             </button>
//             <button className="px-2 py-1 m-1 font-semibold bg-gray-200 rounded-xl'">
//               :
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Play;
