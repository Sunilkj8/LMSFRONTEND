import React from "react";
import favoriteIcon from "../../assets/favoriteIcon.gif";
const FavoritesIntro = () => {
  return (
    <div className="h-[80vh] mb-24 blockElem   flex w-[99vw] justify-center items-center ">
      <div className="max-w-[87vw]   w-full h-[80%]     flex items-center p-10 flex-col gap-4   ">
        <div className="text-5xl font-bold">Mark As Favorites</div>
        <div className="flex flex-col items-center gap-5  ">
          <img
            src={favoriteIcon}
            className="h-[30%] rounded-full bg-gray-200"
            alt=""
          />
          <div className="    text-2xl w-[60%] text-center font-semibold">
            Create a personalized collection of your favorite books to share
            with friends or discover new reads.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesIntro;
