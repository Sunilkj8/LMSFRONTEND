import React from "react";
import sendIcon from "../../assets/send.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className="flex  justify-center w-full">
    <div className="  blockElem      p-20 h-[70vh] max-w-[97vw] font-body    flex justify-between  w-full">
      {/* <div className="bg-[#FFF6F6] h-[98%] w-[99vw] shadow-2xl rounded-lg"></div> */}
      <div className="flex flex-col gap-5  font-body    w-[20vw]">
        <span className=" text-2xl   ">Explore</span>
        <span onClick={()=>{
          navigate("/aboutus")
        }}  className="relative cursor-pointer transition-all duration-300 ease-out pl-0 hover:pl-5 hover:text-red-400  w-fit   ">
          About Us
        </span>
        {/* <span className="relative cursor-pointer transition-all duration-300 ease-out pl-0 hover:pl-5 hover:text-red-400   ">
          SignIn
        </span> */}
        <span onClick={()=>{
          navigate("/termsandconditions")
        }} className="relative cursor-pointer transition-all duration-300 ease-out pl-0 hover:pl-5 hover:text-red-400 w-fit   ">
          Terms And Conditions
        </span>
      </div>
      <div className="flex flex-col gap-5 font-thin   w-[20vw]">
        <span className="text-2xl  font-medium">Categories</span>
        <span className="relative cursor-pointer transition-all duration-300 ease-out pl-0 hover:pl-5 hover:text-red-400 w-fit  ">
          Fictional
        </span>
        <span className="relative cursor-pointer transition-all duration-300 ease-out pl-0 hover:pl-5 hover:text-red-400 w-fit  ">
          Self Help
        </span>
        <span className="relative cursor-pointer transition-all duration-300 ease-out pl-0 hover:pl-5 hover:text-red-400 w-fit  ">
          Autobiography
        </span>
      </div>
      <div className="flex flex-col gap-10">
        <div className=" text-2xl  font-medium">Join Our NewsLetter</div>
        <div className="font-thin">
          Signup to be the first to hear about new book arrivals!
        </div>
        <div>
          <label
            htmlFor=""
            className=" border-black     bg-white  items-center text-white   flex "
          >
            <input
              type="text"
              className="p-4  bg-black text-white  outline-none   font-thin"
              placeholder="Enter email"
            />
            <img src={sendIcon} className=" cursor-pointer bg-red-400 w-[3.5vw] h-[7.5vh]   p-2 " alt="" />
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
