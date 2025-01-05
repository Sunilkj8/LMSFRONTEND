import React from "react";
// import animatedLibraryImage from "../assets/animatedLibraryImage.jpeg";
import bannerImage from "../../assets/bannerImage.png";
import atomicHabits from "../../assets/Atomic_habits.jpg";
import crackingTheCodingInterview from "../../assets/crackingTheCodingInterview.jpg";

import { CarouselCustomArrows } from "./MainCar";
const Banner = () => {
  return (
    <>
      <div className=" bg-[#F8E9EC]  flex w-screen-2xl mx-auto justify-between h-[100vh] relative wixui_rich_text ">
        <div className="  w-[100%] flex items-center justify-center px-28 gap-5 ">
          <div className="w-[60%] h-[70%] bg-[#FFFFFF] flex justify-center items-center flex-col py-5">
            {/* <span className="flex text-center mt-10 font-extrabold text-4xl text-red-400 tracking-wide">Featured Books</span> */}
            <CarouselCustomArrows />{" "}
          </div>
          <div className="w-[40%] h-[70%] bg-[white] flex flex-col items-center justify-center relative   ">
            <div className="flex h-full absolute justify-center items-center   left-[3vw]   top-[-25vh]  text-xl flex-col font-medium gap-3  ">
              <span className="text-2xl uppercase   rounded-md      text-black p-3 ">
                Cracking{" "}
                <span className="  lowercase text-sm     ">
                  {" "}
                  the <span className="uppercase text-2xl  "> Coding Interview</span>
                </span>
              </span>
              <span className="text-[gray] font-[monospace]">Gayle Laakmann McDowell</span>
            </div>
            <div className="h-full mt-28 flex justify-center items-center flex-col ">
              <img
                src={crackingTheCodingInterview}
                className="h-[50%] shadow-2xl "
                alt=""
              />
              <div className="mt-10 bg-black p-3    text-white cursor-pointer uppercase font-[monospace]">
                Visit Book
              </div>
            </div>
          </div>
          {/* <div className=" w-[100%] flex justify-center items-center     text-center flex-col  ">
            <h1 className="text-9xl font-extrabold mb-16 tracking-widest  ">
              bookVault <br />
            </h1>
            <span className="text-gray-700 font-medium font-mono text-3xl tracking-wide  ">
              {" "}
              The Vault of Ideas and Inspiration...
            </span>
          </div> */}
        </div>
        {/* <div className="w-[99vw]  -z-10 absolute h-full    flex items-center justify-center   ">
          <img
            className="w-full h-full opacity-80  "
            src={bannerImage}
            alt="bannerImage"
          />
        </div> */}
      </div>
    </>
  );
};

export default Banner;
