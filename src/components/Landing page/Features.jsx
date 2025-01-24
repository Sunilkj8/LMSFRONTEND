import React from "react";
import issuingReturning from "../../assets/Issuing-returning.png";
import managingBooks from "../../assets/managingBooks.png";
import browseSearch from "../../assets/browseSearch.png";
const Features = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[90vh] w-full relative  overflow-hidden blockElem mt-5">
        <div className="              w-full max-w-[87vw] flex justify-center h-[90%]  ">
          <div className="h-1/2 w-[80%] mt-28  flex items-center   justify-between flex-col gap-[8vh]   ">
            <div className="  text-4xl font-semibold tracking-wide">How it works?</div>
            <div className=" h-full w-full flex justify-center gap-[15vw] items-center" >
              <div className="blockElem1 h-[20rem] w-[30vw] flex flex-col items-center justify-center gap-4   mb-5   ">
                <img className=" h-1/2  " src={managingBooks} alt=""   />
                <span className="  ">MANAGING BOOKS</span>
              </div>
              <div className="blockElem1  h-[20rem] w-[30vw] flex flex-col items-center justify-center gap-4   mb-5     ">
                <img className="  h-1/2  ]" src={issuingReturning} alt="" />
                <span className=" text-center">ISSUING AND RETURNING</span>
              </div>
              <div className="blockElem1 h-[20rem] w-[30vw] flex flex-col  items-center justify-center mb-5 gap-4 text-center    ">
                <img className="h-1/2" src={browseSearch} alt="" />
                <span className="text-center">BROWSE AND SEARCH BOOKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
