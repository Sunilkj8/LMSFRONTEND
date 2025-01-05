import React from "react";

const FictionalHeading = () => {
  return (
    <div className="w-1/2   h-auto mt-9 flex  flex-col items-center">
      <div className="border-[0.5px] w-[8%] h-0 mt-5 border-[#7C94AD]"></div>
      <div className="text-center mt-5 wixui_rich_text">
        <div className=" text-2xl font-medium">This Month's</div>
        <div className=" text-6xl   font-bold uppercase ">
          {" "}
          Recommended Books
        </div>
      </div>
      <div className="border-[0.5px] w-[8%] h-0 mt-5 border-[#7C94AD]"></div>{" "}
    </div>
  );
};

export default FictionalHeading;
