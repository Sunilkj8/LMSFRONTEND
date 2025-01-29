import React from "react";
import ratingsDemo from "../../assets/ratingDemo.png";
const RatingsIntro = () => {
  return (
    <div className="h-screen w-[99vw] flex justify-center items-center">
      <div className="blockElem h-full w-full max-w-[87vw]">
        <div className="h-full w-full   flex  items-center justify-center">
           
            <img src={ratingsDemo} className="  relative right-[20vw] w-[80%]    " alt="" />
        

          <div className="text-4xl text-center absolute   w-[50%] font-extrabold  wixui_rich_text   left-[40vw]   h-full    items-center flex   ">
            Rate your favorite books and discover new reads based on the
            opinions of other readers
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsIntro;
