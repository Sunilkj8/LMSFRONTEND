import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function AniHeart({bookName}) {
  const [isClick, setClick] = useState(false);
  return (
    <div className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative left-[9vw] bottom-3  ">
      <Heart
        isClick={isClick}
        onClick={(e) => {
          console.log(e.target);
          
          setClick(!isClick);
        }}
      />
    </div>
  );
}
