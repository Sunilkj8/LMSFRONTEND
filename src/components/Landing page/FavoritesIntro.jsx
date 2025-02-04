import React from "react";
import favoriteIcon from "../../assets/favoriteIcon.png";
const FavoritesIntro = () => {
  return (
    <div className="h-[80vh]   flex w-[99vw] justify-center items-center ">
      <div className="max-w-[87vw]   w-full h-[80%] rounded-3xl shadow-2xl bg-gradient-to-r from-gray-100   via-gray-200 to-gray-300 flex items-center p-10 flex-col gap-4   ">
        <div className="text-5xl font-bold">Add To Wishlist</div>
        <div className="flex flex-col items-center gap-10  ">
          <img
            src={favoriteIcon}
            className="h-[40%] rounded-full bg-gray-200"
            alt=""
          />
          <div className="    text-2xl font-semibold">
            Create a personalized collection of your favorite books to share
            with friends or discover new reads
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesIntro;
