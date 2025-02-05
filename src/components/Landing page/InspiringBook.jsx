import React from "react";
import ratingStars from "../../assets/ratingStars.gif";
import favoriteIcon from "../../assets/favoriteIcon.gif";
const InspiringBook = () => {
  return (
    <div className=" blockElem h-[130vh] w-[99vw] flex justify-center items-center">
      <div className="w-full h-[100vh] max-w-[94vw] flex items-center p-10    bg-white text-black flex-col gap-10 ">
        <div className="text-7xl font-extrabold text-center ">
          Rate and Review Your Favorite Reads
        </div>
        <div className="h-full flex gap-10 justify-center items-center">
          <div className="flex flex-col gap-5   w-1/2 border-r border-black h-full items-center justify-center p-10">
            <img src={ratingStars} className="w-[12vw] h-[25vh]   " alt="" />
            <div className="text-2xl text-center font-bold">
              Read books that have earned high praise. Discover top-rated titles
              across all genres.
            </div>
          </div>
          <div className="flex flex-col   w-1/2   h-full items-center justify-center gap-5 p-10">
            <img src={favoriteIcon} className="w-[12vw] h-[25vh]    " alt="" />
            <div className="text-2xl text-center font-bold">
            Create a personalized reading list by saving your favorite books. Never lose track of a book you want to read again.

            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default InspiringBook;
