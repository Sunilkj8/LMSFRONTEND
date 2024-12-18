import React from "react";
// import animatedLibraryImage from "../assets/animatedLibraryImage.jpeg";
import bannerImage from "../../assets/bannerImage.png";
const Banner = () => {
  return (
    <>
      <div className=" bannerContainer flex w-screen-2xl mx-auto justify-between h-[100vh] relative ">
        <div className="  w-[100%] flex items-center justify-center ">
          {" "}
          <div className=" w-[100%] flex justify-center items-center     text-center flex-col  ">
            <h1 className="text-9xl font-extrabold mb-16 tracking-widest  ">
              bookVault <br />
            </h1>
            <span className="text-gray-700 font-medium font-mono text-3xl tracking-wide  ">
              {" "}
              The Vault of Ideas and Inspiration...
            </span>
          </div>
        </div>
        <div className="w-[99vw]  -z-10 absolute h-full    flex items-center justify-center   ">
          <img
            className="w-full h-full opacity-80  "
            src={bannerImage}
            alt="bannerImage"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
