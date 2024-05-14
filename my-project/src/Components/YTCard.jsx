import React from "react";

const YTCard = () => {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="grid grid-cols-3 gap-4">
      {cardArray.map((item,index) => {
        return <div key="index" className="card w-[22rem] h-[12rem] bg-gray-100">{item}</div>;
      })}
    </div>
  );
};

export default YTCard;
