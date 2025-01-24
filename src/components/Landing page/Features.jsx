import React from "react";
import issuingReturning from "../../assets/Issuing-returning.png";
import managingBooks from "../../assets/managingBooks.png";
import browseSearch from "../../assets/browseSearch.png";
const Features = () => {
  return (
    <>
      <div className="   flex items-center justify-center flex-col h-[100vh] w-full    relative  overflow-hidden blockElem      border-gray-400  mt-5       ">
        <div className="w-full max-w-[87vw] flex justify-center items-center   h-[90%] rounded-2xl ">
          <div className="h-1/2 w-[80%]  flex items-center   justify-between flex-col gap-[20vh]   ">
            <div className="text-4xl font-semibold tracking-wide">How it works?</div>
            <div className="h-full w-full flex justify-center gap-[15vw] items-center" >
              <div className="   h-[20rem] w-[30vw] flex flex-col  items-center justify-center gap-4   mb-5 px-5">
                <img className="h-1/2" src={managingBooks} alt="" />
                <span className=" font-medium  ">MANAGING BOOKS</span>
              </div>
              <div className=" h-[20rem] w-[30vw] flex flex-col items-center justify-center gap-4   mb-5    ">
                <img className="h-1/2" src={issuingReturning} alt="" />
                <span>ISSUING AND RETURNING</span>
              </div>
              <div className="h-[20rem] w-[30vw] flex flex-col  items-center justify-center mb-5 gap-4 text-center   ">
                <img className="h-1/2" src={browseSearch} alt="" />
                <span>BROWSE AND SEARCH BOOKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
