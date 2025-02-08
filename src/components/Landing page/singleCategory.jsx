import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SingleCategory = ({ image, title }) => {
  const [reveal, setReveal] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => {
        navigate("/books");
        setTimeout(() => {
          window.scroll(0, 0);
        }, 500);
      }}
      className="relative h-[55vh] cursor-pointer flex justify-center rounded-md    bg-[#000000d0]   items-center   "
    >
      <motion.div
        animate={{ opacity: reveal ? 0.3 : 0.7 }}
        className="absolute w-full flex justify-center items-center h-full opacity-55  rounded-3xl "
      >
        <img src={image} className="  w-full h-full" alt="" />
      </motion.div>{" "}
      <motion.div
        onMouseOver={() => {
          setReveal(true);
        }}
        onMouseOut={() => {
          setReveal(false);
        }}
        animate={{ opacity: reveal ? 1 : 0.5 }}
        className="absolute text-white text-center items-center justify-center flex h-full w-full  text-5xl font-extrabold tracking-wide rounded-xl uppercase"
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default SingleCategory;
