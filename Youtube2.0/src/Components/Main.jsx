import React from "react";
import MainTopButton from "./MainTopButton";
import MainCard from "./MainCard";

const Main = () => {
  return (
    <>
      <div className="flex flex-col mt-[3.5rem] ml-[1.5rem]">
        <MainTopButton />
        <MainCard />
      </div>
    </>
  );
};

export default Main;
