import React from "react";
import issuingReturning from "../../assets/Issuing-returning.png";
import managingBooks from "../../assets/managingBooks.png";
import browseSearch from "../../assets/browseSearch.png";
const Features = () => {
  return (
    <>
      <div className="   flex items-center justify-center flex-col h-[32vh]  relative  overflow-hidden features-container        ">
        <div className="flex h-full absolute bottom-[-1000px]   features-text-container duration-300   w-full items-end justify-center ">
          {/* <h1 className="text-2xl tracking-[5vw]  font-mono font-semibold  ">FEATURES</h1> */}
        </div>
        <div className="h-3/4 w-[80%]  flex items-center   justify-between  ">
          <div className="h-48 w-60 flex flex-col items-center justify-center gap-4">
            <img className="h-1/2" src={managingBooks} alt="" />
            <span>MANAGING BOOKS</span>
          </div>
          <div className="h-48 w-60 flex flex-col items-center justify-center gap-4">
            <img className="h-1/2" src={issuingReturning} alt="" />
            <span>ISSUING AND RETURNING</span>
          </div>
          <div className="h-48 w-60 flex flex-col items-center justify-center gap-4 text-center">
            <img className="h-1/2" src={browseSearch} alt="" />
            <span>BROWSE AND SEARCH BOOKS</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
