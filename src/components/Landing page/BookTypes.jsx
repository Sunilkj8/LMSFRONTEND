import React from "react";
import programmingIcon from "../../assets/programmingIcon.png";
import fictionalIcon from "../../assets/fictionalIcon.png";
import autobiographyIcon from "../../assets/autobiographyIcon.png";
import selfHelp from "../../assets/selfHelp.png";
const BookTypes = () => {
  return (
    <div className="h-screen w-[99vw] flex justify-center items-center">
      <div className="blockElem w-full max-w-[87vw]     h-[90%]">
        <div className="py-14 flex justify-center items-center flex-col gap-[10vh]">
          <div className="text-4xl font-semibold">Book Types</div>
          <div className="blockElem1 flex gap-24 justify-center items-center  p-10 h-auto uppercase">
            <div className="flex flex-col justify-center items-center  gap-10">
              <img src={programmingIcon} className="w-[60%]" alt="" />
              <div className="text-2xl  ">programming</div>
            </div>
            <div className="blockElem1 flex flex-col justify-center items-center gap-10">
              <img src={selfHelp} className="w-[60%]" alt="" />{" "}
              <div className="text-2xl  ">Self Help</div>
            </div>
            <div className="blockElem1 flex flex-col justify-center items-center gap-10">
              <img src={fictionalIcon} className="w-[60%]" alt="" />{" "}
              <div className="text-2xl ">Fictional</div>
            </div>
            <div className="blockElem1 flex flex-col justify-center items-center gap-10">
              <img src={autobiographyIcon} className="w-[60%]" alt="" />{" "}
              <div className="text-2xl  ">Autobiography</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTypes;
