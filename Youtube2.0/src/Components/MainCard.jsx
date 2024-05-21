import React, { useEffect, useState } from "react";
import axios from "axios";
import YOUTUBE_VIDEO_API from "../Api/youtube";
import { API_KEY } from "../Api/youtube";
import { BASE_URL } from "../Api/youtube";
import Thumbnail from "./Thumbnail";

const MainCard = () => {
  const [video, setvideo] = useState([]);
  // API CAlL
  const FetchingYoutubeVideo = async () => {
    try {
      // const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      setvideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchingYoutubeVideo();
  }, []);

  return (
    <>
      {video.map((e) => {
        return (
          <div className="grid grid-cols-3 space-x-4 mt-3 mr-3">
            <Thumbnail />
          </div>
        );
      })}
    </>
  );
};

export default MainCard;
