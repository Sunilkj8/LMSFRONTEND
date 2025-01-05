import React from "react";
import issuingReturning from "../../assets/Issuing-returning.png";
import managingBooks from "../../assets/managingBooks.png";
import browseSearch from "../../assets/browseSearch.png";
const Features = () => {
  return (
    <>
      <div className="   flex items-center justify-center flex-col h-[22vh]  relative  overflow-hidden  features-container border-b  border-gray-400  mt-5       ">
        <div className="h-1/2 w-[80%]  flex items-center   justify-between  ">
          <div className="h-[8rem] w-60 flex  items-center justify-center gap-4 border-r-2 mb-5 px-5">
            <img className="h-1/2" src={managingBooks} alt="" />
            <span>MANAGING BOOKS</span>
          </div>
          <div className="  w-60 flex  items-center justify-center gap-4 border-r-2 mb-5 h-[8rem]">
            <img className="h-1/2" src={issuingReturning} alt="" />
            <span>ISSUING AND RETURNING</span>
          </div>
          <div className="h-[8rem] w-60 flex  items-center justify-center gap-4 text-center ">
            <img className="h-1/2" src={browseSearch} alt="" />
            <span>BROWSE AND SEARCH BOOKS</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
