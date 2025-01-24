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
      <div className=" blockElem mt-24 bg-[white] shadow-2xl rounded-xl max-w-[90vw] overflow-hidden  flex w-screen-2xl mx-auto  h-[100vh]   wixui_rich_text ">
        <div className=" relative   w-[100%] flex items-center justify-center  gap-5  ">
          {/* <img
              src={bannerImg9}
              className="absolute bottom-5 h-[30%]"
              alt=""
            /> */}
          <animated.div
            style={leftEarPhone}
            className="absolute  left-[50vw]    h-[40vh] w-[20vw] top-0"
          >
            <img
              src={bannerImg10}
              className="absolute   top-[20vh] left-[0vw] h-[13vh]"
              alt=""
            />
          </animated.div>
          <animated.div
            style={rightEarPhone}
            className="absolute  left-[50vw]  h-[40vh] w-[20vw] top-0"
          >
            <img
              src={bannerImg11}
              className="absolute  top-[15vh] left-[5vw] h-[13vh]"
              alt=""
            />
          </animated.div>

          <animated.div
            style={leftBottom}
            className="   left-0 bottom-0 flex   absolute h-[50%] w-auto"
          >
            <img
              src={"https://m.media-amazon.com/images/I/41DmBeq8oIL._SY445_SX342_.jpg"}
              className="relative h-[80%] bottom-[15vh] left-24"
              alt=""
            />
            <img
              src={"https://m.media-amazon.com/images/I/31QRYQI5TPL._SY445_SX342_.jpg"}
              className=" h-[80%] absolute bottom-[10vh]"
              alt=""
            />
            {/* <img
              src={bannerImg6}
              className=" rotate-180 absolute left-[10vw]  bottom-[-20vh]"
              alt=""
            /> */}
          </animated.div>
          <animated.div
            style={props}
            className="  flex justify-center items-center absolute top-24 right-0 h-[50%] w-[25%]"
          >
            {" "}
            <img
              src={bannerImg1}
              className="absolute right-[10vw] top-0 w-[85%]"
              alt=""
            />
            <img src={bannerImg4} className="w-[65%]" alt="" />
            <img
              src={bannerImg3}
              className="  w-[20%] h-[68%] top-[-3vh] right-[3vw] absolute"
              alt=""
            />
          </animated.div>
          <animated.div
            style={greekBook}
            className=" flex  justify-center items-center   absolute bottom-0 right-0 h-[50%] w-[25%]"
          >
            {" "}
            <img src={bannerImg2} className="h-[90%] " alt="" />
            <img
              src="https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg"
              className="h-[70%] shadow-2xl left-0 bottom-2 absolute"
              alt=""
            />
          </animated.div>

          {/* <animated.div
            style={leftBottom}
            className="flex justify-center items-center absolute bottom-0   h-[30vh] w-[30vw]"
          >
            <img src={bannerImg12} className="absolute bottom-[0vh]" alt="" />
          </animated.div> */}

          <animated.div
            className="   items-center justify-center flex  flex-col gap-5 h-[70%] text-center relative top-[10vh]    p-10 smooch-sans-font   w-[40%]"
            style={props1}
          >
            <div className=" gap-2 flex text-xl">
              <span className="text-[#F0D334] text-2xl">★ </span>Start Your
              Reading Journey
            </div>
            <div className="text-6xl ">Where Every Page</div>
            <div className="text-6xl ">is a new Adventure</div>
            <div className="text-xl  ">
              From classics to contemporary, our library offers a wide selection
              of books to suit every taste and interest.Start exploring our
              shelves today and uncover your next literary gem.
            </div>
            <div className="border text-center flex justify-center items-center text-xl cursor-pointer  h-[6vh] border-black rounded-full w-[12vw] gap-2 hover:scale-[1.01] hover:shadow-md duration-150">
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
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
