import React, { useState } from "react";
import ratingStars from "../../assets/ratingStars.gif";
import favoriteIcon from "../../assets/favoriteIcon.gif";
import { Rating } from "@mui/material";
import Heart from "react-animated-heart";
const InspiringBook = () => {
  const [isClick, setClick] = useState(false);

  return (
    <div className="  blockElem  h-[130vh] w-[99vw] flex justify-center items-center">
      <div className=" shadow-2xl rounded-3xl w-full h-[100vh] max-w-[94vw] flex items-center p-10    bg-gradient-to-r from-[#EA627D]  to-[#A56BEC] text-white flex-col gap-10 ">
        <div className="text-7xl text-black bg-gradient-to-r from-[#EA627D]  to-[#A56BEC] bg-clip-text  font-extrabold text-center ">
          Rate and Review Your Favorite Reads
        </div>
        <div className="h-full flex gap-10 justify-center items-center">
          <div className="flex flex-col gap-5   rounded-3xl shadow-2xl bg-[#e2264cb9]  w-1/2  border-black h-full items-center justify-center p-10">
            {/* <img src={ratingStars} className="w-[12vw] h-[25vh]   " alt="" /> */}
            <span className="text-4xl font-bold">Rate Books</span>
            <div className=" bg-gradient-to-r from-yellow-50 to-yellow-100 p-10 rounded-xl shadow-xl">
              <Rating name="size-large" defaultValue={0} size="large" />
            </div>

            <div className="text-2xl text-center font-light">
              Read books that have earned high praise. Discover top-rated titles
              across all genres.
            </div>
          </div>
          <div className="flex flex-col   w-1/2   h-full items-center justify-center gap-5 p-10 bg-[#771fe3a9] rounded-3xl shadow-2xl">
            {/* <img src={favoriteIcon} className="w-[12vw] h-[25vh]    " alt="" /> */}
            <span className="text-4xl font-bold relative top-10">Add To Favorites</span>

            <div className=" bg-gradient-to-r from-red-50 to-red-100 w-[13vw] flex  justify-center rounded-xl shadow-2xl relative top-10">
              <Heart
                isClick={isClick}
                onClick={() => {
                  setClick(!isClick);
                }}
              />
            </div>

            <div className="text-2xl mt-12 text-center font-light">
              Create a personalized reading list by saving your favorite books.
              Never lose track of a book you want to read again.
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default InspiringBook;
