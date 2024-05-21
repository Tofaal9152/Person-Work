import React from "react";
import thumbnaill from "../assets/thumbnaill.jpg";
import jack from "../assets/jack.png";
const Thumbnail = () => {
  return (
    <>
      
        <div className="flex flex-col space-y-4">
          <img src={thumbnaill} alt="thumbnail_of_JujutsuKaisen" />
          <div className="flex space-x-3">
            <img
              className="rounded-[50%]  w-[3rem] h-[3rem] object-cover"
              src={jack}
              alt="User Avatar"
            />
            <div className="flex flex-col space-y-1">
              <h1 className="heading font-semibold">
                Jujutsu Kaisen OP 4 | FULL ENGLISH Cover 【Dangle x Evolite】「
                SPECIALZ - King Gnu 」(now on Spotify)
              </h1>
              <p className="ChannelName text-sm text-gray-600 font-semibold">Total Gaming</p>
              <div>
                <p class="flex items-center space-x-2 text-gray-600">
                  <span>3.6K views</span>
                  <span>•</span>
                  <span>3 months ago</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
    </>
  );
};

export default Thumbnail;
