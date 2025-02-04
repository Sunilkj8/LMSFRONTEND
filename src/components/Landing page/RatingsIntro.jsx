import React from "react";
import ratingStars from "../../assets/ratingStars.gif";
const RatingsIntro = () => {
  return (
    <div className="h-[80vh] blockElem mt-[30vh] flex w-[99vw] justify-center items-center ">
      <div className="max-w-[87vw] w-full   h-[100%] justify-center  gap-10     flex items-center p-10 flex-col ">
      <div className="text-5xl font-bold">Rate & Review Your Reads</div>
        <div className="flex justify-center items-center flex-col gap-20 h-full">
          <div>
            <img src={ratingStars} alt="" />
          </div>
          <div className="flex flex-col w-[75%]  h-full  text-center text-2xl font-semibold ">
            <div>Read books that have earned high praise. Discover top-rated titles across all genres.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsIntro;
