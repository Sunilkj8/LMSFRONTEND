import React, { useState } from "react";
// import animatedLibraryImage from "../assets/animatedLibraryImage.jpeg";
import bannerImage from "../../assets/bannerImage.png";
import atomicHabits from "../../assets/Atomic_habits.jpg";
import crackingTheCodingInterview from "../../assets/crackingTheCodingInterview.jpg";
import bannerImg1 from "../../assets/bannerimg1.png";
import bannerImg2 from "../../assets/bannerImg2.png";
import bannerImg3 from "../../assets/bannerImg3.png";
import bannerImg4 from "../../assets/bannerImg4.png";
import bannerImg5 from "../../assets/bannerImg5.png";
import bannerImg6 from "../../assets/bannerImg6.png";
import bannerImg7 from "../../assets/bannerImg7.png";
import bannerImg8 from "../../assets/bannerImg8.png";
import bannerImg9 from "../../assets/bannerImg9.png";
import bannerImg10 from "../../assets/bannerImg10.png";
import bannerImg11 from "../../assets/bannerImg11.png";
import bannerImg12 from "../../assets/bannerImg12.png";

import { useSpring, animated } from "react-spring";

import { CarouselCustomArrows } from "./MainCar";
const Banner = () => {
  const props = useSpring({
    from: {
      opacity: 0,
      x: 100,
    },
    to: {
      opacity: 1,
      x: 0,
    },

    delay: 300,
  });
  const props1 = useSpring({
    from: {
      opacity: 0,
      // y:100
    },
    to: {
      opacity: 1,
      // y:0
    },

    delay: 1100,
  });

  const greekBook = useSpring({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },

    delay: 500,
  });

  const leftBottom = useSpring({
    from: {
      opacity: 0,
      x: 0,
    },
    to: {
      opacity: 1,
      x: 100,
    },

    delay: 800,
  });

  const leftEarPhone = useSpring({
    from: {
      opacity: 0,
      y: 0,
    },
    to: {
      opacity: 1,
      y: 20,
    },

    delay: 800,
  });
  const rightEarPhone = useSpring({
    from: {
      opacity: 0,
      y: 0,
    },
    to: {
      opacity: 1,
      y: 20,
    },

    delay: 1000,
  });
  return (
    <>
      <div className=" blockElem mt-24 rounded-3xl  bg-[#000000]    max-w-[94vw] overflow-hidden  flex w-screen-2xl mx-auto  h-[100vh]     ">
        <div className="absolute w-full h-full bannerBg opacity-50"></div>
        <div className=" relative   w-[100%] flex items-center justify-center flex-col gap-5 ">
          <animated.div
            className="    items-center justify-center flex  flex-col gap-5 h-auto   text-center relative top-[0vh] text-white    p-10     w-[80%]"
            style={props1}
          >
            <div className=" gap-2 flex text-xl justify-center items-center">
              <span className="text-[#F0D334] text-2xl">★ </span>
              <div>Start Your Reading Journey</div>
            </div>
            <div className="text-8xl font-bold ">Where Every Page</div>
            <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3FDF87] to bg-[#BFF281] ">
              is a new Adventure
            </div>
          </animated.div>
          <animated.div
            style={rightEarPhone}
            className="relative bottom-14 w-[65%] text-center text-xl  text-gray-300    "
          >
            From classics to contemporary, our library offers a wide selection
            of books to suit every taste and interest.Start exploring our
            shelves today and uncover your next literary gem.
          </animated.div>

          <animated.div
            style={leftEarPhone}
            className=" relative bottom-10 text-center flex justify-center items-center text-xl cursor-pointer   h-[6vh] border-white bg-white text-black rounded-md w-[12vw] gap-2   hover:shadow-md duration-150 mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            Search Books
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
