import React from "react";
import { motion } from "framer-motion";
const ReviewsFeatureShowcase = () => {
  const animateArr = [1];

  return (
    <div className="flex blockElem justify-center items-center h-screen w-full  ">
      <div className="flex items-center  flex-col max-w-[94vw] w-full h-full p-5 gap-3">
        <div className="text-6xl font-extrabold">
          Write Reviews & Find Your Next Read
        </div>
        <div className="w-full gap-3 flex h-[90%]">
          <div className="w-1/2   items-center justify-center h-full   relative">
            <div className="absolute top-[20vh] left-[8vw] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-[20vh] left-[18vw] w-72 h-72 bg-yellow-200  rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-[30vh] left-[13vw] w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          </div>
          <div className="absolute flex justify-center p-10 top-[30vh] left-[5vw]  h-[50vh] items-center flex-col gap-4 w-[40vw]">
            {animateArr.map(() => {
              return (
                <div className="h-[95%] w-[100%] bg-black rounded-xl  justify-center shadow-2xl border flex flex-col text-white gap-2 p-2 px-5">
                  <motion.div
                    initial={{ width: "0", opacity: 0 }}
                    whileInView={{ width: "8%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "anticipate" }}
                    className="  h-[10%] bg-transparent  shadow-lg  flex items-center text-2xl font-thin p-5 rounded-full  font-[monospace] px-1"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class=" text-black size-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="8" r="4"></circle>
                    </svg>
                     
                  </motion.div>
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "60%", opacity: 1 }}
                    transition={{ duration: 2, ease: "anticipate" }}
                    className=" flex items-center  h-[15%] bg-transparent  shadow-lg rounded-sm capitalize text-2xl font-[monospace]    px-1 font-thin "
                  >
                    headline
                  </motion.div>
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "80%", opacity: 1 }}
                    transition={{ duration: 3, ease:'anticipate' }}
                    className=" h-[40%] bg-white  shadow-lg rounded-md flex items-center px-1 text-2xl font-thin text-black font-[monospace]"
                  >
                    Description
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 h-full   flex justify-center items-center text-5xl text-left  font-thin">
            Share your thoughts and opinions...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsFeatureShowcase;
