import React from "react";
import ratingStars from "../../assets/ratingStars.gif";
const RatingsIntro = () => {
  return (
    <div className="h-[80vh] flex w-[99vw] justify-center items-center ">
      <div className="max-w-[87vw] w-full h-[80%] rounded-3xl shadow-2xl bg-gradient-to-r from-gray-100 gap-20 via-gray-200 to-gray-300 flex items-center p-10 flex-col ">
      <div className="text-5xl font-bold">Rate & Review Your Reads</div>
        <div className="flex justify-center items-center flex-col gap-20 h-full">
          <div>
            <img src={ratingStars} alt="" />
          </div>
          <div className="flex flex-col  h-full w-full text-2xl font-semibold ">
            <div>Read books that have earned high praise. Discover top-rated titles across all genres.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsIntro;
