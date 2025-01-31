import React from "react";
import issuingReturning from "../../assets/Issuing-returning.png";
import managingBooks from "../../assets/managingBooks.png";
import browseSearch from "../../assets/browseSearch.png";
const Features = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[90vh] w-full relative  overflow-hidden blockElem mt-5">
        <div className="shadow-2xl rounded-3xl bg-gradient-to-br from-teal-200 to-lime-300



   w-full max-w-[87vw] text-white flex justify-center h-[90%]  ">
          <div className="h-1/2 w-[80%] mt-28  flex items-center   justify-between flex-col gap-[8vh]   ">
            <div className="  text-7xl font-extrabold tracking-wide">How it works?</div>
            <div className=" h-full w-full flex justify-center gap-[15vw] items-center" >
              <div className="blockElem1 h-[20rem] w-[30vw] flex flex-col items-center justify-center gap-4   mb-5   ">
                <img className=" h-1/2  " src={managingBooks} alt=""   />
                <span className="text-center text-xl font-semibold  ">MANAGING BOOKS</span>
              </div>
              <div className="blockElem1  h-[20rem] w-[30vw] flex flex-col items-center justify-center gap-4   mb-5     ">
                <img className="  h-1/2  ]" src={issuingReturning} alt="" />
                <span className=" text-center text-xl font-semibold">ISSUING AND RETURNING</span>
              </div>
              <div className="blockElem1 h-[20rem] w-[30vw] flex flex-col  items-center justify-center mb-5 gap-4 text-center    ">
                <img className="h-1/2" src={browseSearch} alt="" />
                <span className="text-center text-xl font-semibold">BROWSE AND SEARCH BOOKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
