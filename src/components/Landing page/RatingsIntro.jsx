import React from "react";
import ratingsFav from "../../assets/ratingsFav.png";
import downArrow from "../../assets/downArrow.png";
const RatingsIntro = () => {
  return (
    <div className="h-[200vh] w-[99vw] flex justify-center items-center flex-col  ">
       <div className="text-5xl text-center     w-[50%]  leading-normal font-bold       h-full    items-center flex text-black   ">
            Rate & save your favorites for a personalized reading experience
          </div>
      <div className="  bg-[#000612] rounded-2xl shadow-2xl blockElem h-full w-full max-w-[87vw] max-h-[100vh] flex  justify-center px-10">
        <div className="absolute opacity-45 ratingFavBg w-full h-full "></div>
       
        <div className="h-full w-full   flex  items-center justify-between z-30    ">
        
          <div className="w-[100%] flex justify-center flex-col items-center gap-10 p-10  mb-32">
            <img src={downArrow} alt="" className="h-[20%] w-[10%]" />
            <img
              src={ratingsFav}
              className="   w-[70%] h-full    rounded-md     "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsIntro;
