import React from "react";
import Play from "./Play";
import RightSidebar from "./RightSidebar";
import DescriptionBox from "./DescriptionBox";


const Page = () => {
  return (
    <div className="flex justify-between ">
      <div className="font-semibold">
        <Play />
        <DescriptionBox/>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Page;
