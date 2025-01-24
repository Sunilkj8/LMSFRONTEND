import React from "react";
import manReading from "../../assets/manReading.avif";
import { motion } from "framer-motion";
import { fadeIn } from "../../helperFunctions/variants";
const AttractingQuote = () => {
  return (
    <>
      <div className="    mt-24  smooch-sans-font font-bold    h-[80vh] w-full flex justify-center  ">
        <div className="blockElem bg-[#EAE8F3] shadow-2xl   rounded-lg max-w-[87vw]  px-5 flex justify-between items-center w-full">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="  bebas-neue-regular  w-[60%]    flex justify-center items-center flex-col  font-extrabold gap-5"
          >
            <div className="tracking-normal text-8xl  ">What Goes Into the Mind,</div>
            <div className="text-8xl">comes out in life</div>
            <div className=" text-center cursor-pointer shadow-lg rounded-lg p-3 tracking-wider text-2xl bg-white">Explore Books</div>
          </motion.div>
          <motion.div>
            <motion.img
              // variants={fadeIn("left", 0.1)}
              // initial="hidden"
              // whileInView={"show"}
              // viewport={{ once: false, amount: 0.2 }}
              src={manReading}
              className="shadow-lg bg-red-200 rounded-full w-[100%]"
              alt=""
            />
          </motion.div>{" "}
        </div>
      </div>
    </>
  );
};

export default AttractingQuote;
