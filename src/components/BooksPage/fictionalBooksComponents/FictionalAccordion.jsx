import React from "react";

const FictionalAccordion = ({show,setShow}) => {
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      className="h-[20vh] cursor-pointer accordion-transition  text-6xl font-extrabold tracking-wider text-[#0E345A]   flex   justify-between px-[50px] uppercase rounded-3xl bg-gray-200 items-center text-center w-[95vw] m-auto unselectable "
    >
      Fictional
      <span className="cursor-pointer text-[#F7B324] accordion-transition ">
        {show == true ? "-" : "+"}
      </span>{" "}
    </div>
  );
};

export default FictionalAccordion;
