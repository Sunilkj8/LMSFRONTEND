import React, { useState } from "react";
import classes from "./fictionalBooks.module.css";
const FictionalBooks = ({ fictionalBooks }) => {
  const [show, setShow] = useState(false);
  const [popUpDiv, setPopUpDiv] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  // console.log(selectedBook);

  return (
    <>
      {/* // accordion */}{" "}
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
      {show && (
        <div className={`h-auto flex items-center justify-center relative    `}>
          <div className="h-full w-[95vw] bg-[#0E345A] rounded-xl flex justify center items-center flex-col py-10 ">
            <div className="w-1/2   h-auto mt-9 flex  flex-col items-center">
              <div className="border-[0.5px] w-[8%] h-0 mt-5 border-[#7C94AD]"></div>
              <div className="text-center mt-5 wixui_rich_text">
                <div className="text-white text-2xl font-medium">
                  This Month's
                </div>
                <div className="text-white text-6xl   font-bold uppercase ">
                  {" "}
                  Recommended Books
                </div>
              </div>
              <div className="border-[0.5px] w-[8%] h-0 mt-5 border-[#7C94AD]"></div>{" "}
            </div>

            <div className="  w-auto h-auto mt-7 flex justify-center flex-wrap gap-[40px] px-[20vw] ">
              {fictionalBooks.map((elem, id) => {
                return (
                  <>
                    <div className=" w-[189px] h-[32vh] relative overflow-hidden  border-2 flex items-center justify-center bg-[#F2F2F2] fictionalBookContainer">
                      <img src={elem.book_image} className="h-[80%]" alt="" />
                      <div
                        className={`absolute flex items-center justify-center  h-[10vh] w-full bottom-0 translate-y-[300px] visitBookContent   `}
                      >
                        <h3
                          className="text-xl  capitalize font-mono cursor-pointer "
                          onClick={() => {
                            setPopUpDiv(true);

                            setSelectedBook(elem);
                          }}
                        >
                          Visit Book
                        </h3>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div
            className={`${
              popUpDiv ? "popUpDivCover" : "hidden"
            }  h-full w-full  absolute`}
          ></div>

          <div
            className={`absolute h-[93%] w-[75vw] bg-[white] rounded-md    justify center items-center flex-col py-20 duration-300 transition-all ease-in-out    ${
              popUpDiv ? "flex bg-white scale-75" : "scale-0 "
            } `}
          >
            <div
              className="      absolute left-[70vw] top-[3vh]  cursor-pointer"
              onClick={() => {
                setPopUpDiv(false);
              }}
            >
              <svg width="40" height="40" viewbox="0 0 40 40">
                <path
                  d="M 10,10 L 30,30 M 30,10 L 10,30"
                  stroke="black"
                  stroke-width="4"
                />
              </svg>
            </div>

            <div className="absolute left-[2vw] top-[10vh] h-[80%] flex justify-center p-[50px]   w-[50%]">
              <img
                className="shadow-2xl"
                src={selectedBook ? selectedBook.book_image : ""}
                alt=""
              />
            </div>
            <div
              className="relative left-[19vw] h-full  top-[8vh]  w-[44%] flex  gap-24 flex-col items-center montserrat-font
              
            "
            >
              <div>
                <h1 className="text-4xl font-bold text-center   capitalize">
                  {selectedBook ? selectedBook.book_name : ""}
                </h1>
              </div>
              <div >
                <p className="text-center font-bold text-xl"> {selectedBook ? selectedBook.book_description : ""}</p>
              </div>
              <div className="bg-black p-4 rounded-lg text-white font-mono text-2xl uppercase cursor-pointer">Borrow Book</div>
            </div>
          </div>
        </div>
      )}
      {/* fictional container */}
    </>
  );
};

export default FictionalBooks;
