import React, { useState } from "react";
import ratingStars from "../../assets/ratingStars1.png";
import favoriteIcon from "../../assets/favoriteIcon.png";
import { Rating } from "@mui/material";
import Heart from "react-animated-heart";
const InspiringBook = () => {
  const [isClick, setClick] = useState(false);

  return (
    <div className="  blockElem  h-[100vh] w-[99vw] flex justify-center items-center">
      <div className="   w-full h-[100vh] max-w-[94vw] flex items-center p-10 flex-col    gap-10 ">
        <div className="text-7xl text-black  font-extrabold text-center ">
          Rate and Review Your Favorite Reads
        </div>
        <div className="h-full flex gap-10 justify-center items-center">
          <div className="flex flex-col gap-5     bg-[#fff]  w-1/2  border-black h-full text-black items-center justify-center p-10">
            <img src={ratingStars} className="w-[12vw] h-[25vh]   " alt="" />
            <span className="text-4xl font-bold">Rate Books</span>
            

            <div className="text-2xl text-center font-light">
              Read books that have earned high praise. Discover top-rated titles
              across all genres.
            </div>
          </div>
          <div className="flex flex-col   w-1/2   h-full items-center justify-center gap-5 p-10 bg-[#fff] text-black">
            <img src={favoriteIcon} className="w-[12vw] h-[25vh]    " alt="" />
            <span className="text-4xl font-bold relative top-10">Add To Favorites</span>
 

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
