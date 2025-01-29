import React from "react";
import favouritesDemo from "../../assets/favouritesDemo.png";

const FavouriteIntro = () => {
  return (
    <div className=" overflow-hidden h-screen w-[99vw] flex justify-center items-center">
      <div className="blockElem h-full w-full max-w-[87vw]">
        <div className="h-full w-full   flex  items-center justify-center">
          <div className="text-4xl text-center absolute   w-[50%] font-extrabold  wixui_rich_text   right-[40vw]   h-full    items-center flex z-10   ">
          Create a personalized reading list by saving your favorite books. Never lose track of a book you want to read again
          </div>
          <img
            src={favouritesDemo}
            className="  relative left-[25vw] w-[80%]    "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FavouriteIntro;
