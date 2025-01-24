import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Carousel, IconButton } from "@material-tailwind/react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import animatedLibraryImage from '../../assets/animatedLibraryImage.jpeg'
const DiscoverLIbrary = () => {
  useEffect(() => {}, []);

  //   console.log(BOOKS[0].book_image);
  const { fictionalBook, selfHelpBook, currentBook } =
    useContext(BooksRenderContext);

  return (
    <> 

      <div className="flex        justify-between">
      <div className="   max-w-[87vw] absolute [bg-[#FBF9F6] w-full flex justify-center   px-[9vw] py-10 text-4xl  ">
        <span className="tracking-wide z-20 absolute left-36 top-[15vh]   ">Discover By Category</span>
        <Link to={"/books"} className="flex    absolute  right-0 font-thin text-xl font-[monospace] z-20 items-center top-[15vh] cursor-pointer text-gray-600">
          Visit All
          <BiChevronRight />
        </Link>
      </div>
      </div>
      <div className="flex justify-center">
      <Carousel
       
        loop="true"
        autoplay="true"
        autoplayDelay={"10000"}
        className=" blockElem mt-[10vh] shadow-2xl rounded-2xl bg-[#eaeef44a]  flex max-w-[87vw]   h-screen w-[99vw]  "
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="gray"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="square"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg> */}
            <div className="text-4xl   hover:border-none hover:bg-black duration-150 p-2 ">
              {" "}
              {<BiChevronLeft color="gray" />}{" "}
            </div>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg> */}
            <div className="text-4xl hover:border-none hover:bg-black duration-150 p-2 ">
              {" "}
              {<BiChevronRight color="gray" />}{" "}
            </div>
          </IconButton>
        )}
      >
        <div className="h-full gap-1   w-full flex p-10 justify-center items-center ">
          {selfHelpBook.selfHelpBooks.map((elem, idx) => {
            if (idx == 0 || idx == 6)
              return (
                <div className=" bg-white rounded-md  cursor-pointer    w-[45%] flex items-center  p-5 h-[60%]  shadow-lg    overflow-hidden     justify-between hover:shadow-lg hover:scale-[1.01] duration-150  ease-linear ">
                  <div className=" w-[70%] flex h-[100%]  rounded-lg items-center p-3 ">
                    <img
                      src={elem.book_image}
                      className="w-[85%] h-[100%] rounded-sm shadow-xl"
                      alt=""
                    />
                  </div>
                  {/* <div className="text-red-500 font-extrabold  uppercase absolute bottom-[-1000px] ">Paperback</div> */}
                  <div className=" h-full w-full flex py-10   flex-col gap-10">
                    <div className="font-normal text-2xl ">
                      {elem.book_name}
                    </div>
                    <div className="text-lg text-gray-500">
                      {elem.book_author}
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="h-full gap-1  w-full  flex p-10 justify-center items-center ">
          {fictionalBook.fictionalBooks.map((elem, idx) => {
            if (idx == 2 || idx == 3)
              return (
                <div className=" bg-white  cursor-pointer rounded-md   w-[45%] flex items-center  p-5 h-[60%]    overflow-hidden     shadow-lg justify-between hover:shadow-lg hover:scale-[1.01] duration-150  ease-linear ">
                  <div className=" w-[70%] flex h-[100%]  rounded-lg items-center p-3 ">
                    <img
                      src={elem.book_image}
                      className="w-[85%] h-[100%] rounded-sm shadow-xl"
                      alt=""
                    />
                  </div>
                  {/* <div className="text-red-500 font-extrabold  uppercase absolute bottom-[-1000px] ">Paperback</div> */}
                  <div className=" h-full w-full flex py-10   flex-col gap-10">
                    <div className="font-normal text-2xl ">
                      {elem.book_name}
                    </div>
                    <div className="text-lg text-gray-500">
                      {elem.book_author}
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </Carousel>
      </div>
    </>
  );
};

export default DiscoverLIbrary;
