import React, { useContext, useState } from "react";
import atomicHabits from "../../assets/Atomic_habits.jpg";
import crackingTheCodingInterview from "../../assets/crackingTheCodingInterview.jpg";
import CurrentBooksContainer from "../BooksPage/CurrentBooksContainer";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import heart from "../../assets/heart.png";
import borrow from "../../assets/borrow.png";
const InspiringBook = ({ setPopUpState, popUpState, booksToRender }) => {
  const { inspiringBooks, setInspiringBooks } =
    useContext(BooksRenderContext).inspiringBook;
  const [upliftDiv, setUpliftDiv] = useState(false);
  return (
    <div className="   flex justify-center w-full items-center">
      <div className="blockElem   shadow-2xl max-w-[87vw] w-full rounded-2xl h-[auto] mt-[10vh] px-24 gap-12 flex flex-col  mb-10  ">
        <div className="  smooch-sans-font flex justify-between items-center">
          <span className="mt-10 flex font-extralight text-4xl">Featured Books</span>
          {/* <div className="flex text-3xl gap-16 font-extralight">
          <span>Featured</span>
          <span>Recommended</span>
          <span>Popular</span>
        </div> */}
        </div>
        <div className="   h-[70vh]    flex">
          <div className="    h-full w-full px-4    justify-between flex  ">
            {inspiringBooks.map((elem, idx) => {
              if (
                elem.book_name == "Atomic Habits" ||
                elem.book_name == "Think and Grow Rich" ||
                elem.book_name == "How to Win Friends and Influence People" ||
                elem.book_name == "The Alchemist"
              ) {
                return (
                  <div className=" shadow-2xl rounded-lg hover:shadow-2xl hover:border-white cursor-pointer upliftDiv   overflow-hidden relative bg-[#F6F6F6]   border-black   smooch-sans-font h-[60vh] w-[19%] py-5 gap-2 flex flex-col">
                    <div className="h-[50%] flex justify-center ">
                      <img
                        src={elem.book_image}
                        className="h-full w-[9vw]"
                        alt=""
                      />
                    </div>
                    <div
                      className={` duration-300 currUpliftDiv cursor-pointer absolute   top-[30vh] z-20 bg-[#F6F6F6] w-full     h-[30vh]  flex  font-semibold flex-col justify-center  px-10 text-left`}
                    >
                      <div className="font-thin text-base  tracking-widest text-[#F31A52]">
                        Hardcover
                      </div>
                      <div className="text-xl max-h-[50%] overflow-hidden tracking-wide">
                        {elem.book_name}
                      </div>
                      <div className=" text-gray-500 tracking-widest">
                        {elem.book_author}
                      </div>
                      {/* <div>Rating Upcoming!</div> */}
                    </div>
                    <div className=" flex justify-between h-[auto] top-[52vh] absolute w-full">
                      <img
                        src={heart}
                        className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative left-[10vw]  "
                        alt=""
                      />
                      <img
                        src={borrow}
                        className=" hover:scale-[1.14] cursor-pointer duration-200 h-[7vh] relative left-[-10vw]  "
                        alt=""
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          {/* <div className=" p-10    h-full w-1/3">
          {inspiringBooks.map((elem) => {
            if (elem.book_name == "The Power of Positive Thinking") {
              return (
                <div className=" gap-10 flex justify-center  flex-col items-center">
                  <div>
                    <img
                      className="cursor-pointer"
                      src={elem.book_image}
                      alt=""
                    />
                  </div>
                  <div className="montserrat-font flex flex-col gap-5">
                    <div className="text-lg font-semibold     tracking-widest text-[#F31A52]">
                      Hardcover
                    </div>
                    <div className="text-2xl font-semibold  max-h-[50%] overflow-hidden tracking-wide">
                      {elem.book_name}
                    </div>
                    <div className=" text-lg text-gray-900 tracking-widest">
                      {elem.book_author}
                    </div>
                    <div className="text-black text-xl cursor-pointer font-bold flex items-center">
                      <span>Add To Whishlist</span>
                      <img
                        src={heart}
                        className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative left-[10vw]  "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div> */}
          {/* <div className="    h-full w-1/3 flex flex-wrap">
          {inspiringBooks.map((elem, idx) => {
            if (
              elem.book_name == "1984" ||
              elem.book_name == "To Kill a Mockingbird" ||
              elem.book_name == "Man's Search for Meaning" ||
              elem.book_name == "Sapiens: A Brief History of Humankind"
            ) {
              return (
                <div className=" hover:shadow-2xl hover:border-black cursor-pointer upliftDiv    overflow-hidden relative border  montserrat-font h-1/2 w-1/2 py-5 gap-2 flex flex-col">
                  <div className="h-[50%] flex justify-center ">
                    <img
                      src={elem.book_image}
                      className="h-full w-[9vw]"
                      alt=""
                    />
                  </div>
                  <div
                    className={` duration-300 currUpliftDiv cursor-pointer absolute   top-[30vh] z-20 bg-white     h-[30vh]  flex  font-semibold flex-col justify-center  px-10 text-left`}
                  >
                    <div className="font-thin text-base  tracking-widest text-[#F31A52]">
                      Hardcover
                    </div>
                    <div className="text-xl max-h-[50%] overflow-hidden tracking-wide">
                      {elem.book_name}
                    </div>
                    <div className=" text-gray-500 tracking-widest">
                      {elem.book_author}
                    </div>
                    {/* <div>Rating Upcoming!</div> */}
          {/* </div>
                  <div className=" flex justify-between h-[auto] top-[52vh] absolute w-full">
                    <img
                      src={heart}
                      className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative left-[10vw]  "
                      alt=""
                    />
                    <img
                      src={borrow}
                      className=" hover:scale-[1.14] cursor-pointer duration-200 h-[7vh] relative left-[-10vw]  "
                      alt=""
                    />
                  </div>
                </div>
              );
            }
          })}
        </div> */}
        </div>

        {/* <CurrentBooksContainer
        booksToRender={booksToRender}
        translateX={16}
        setPopUpState={setPopUpState}
        popUpState={popUpState}
        border={true}
        currentBooks={
          useContext(BooksRenderContext).inspiringBook.inspiringBooks
        }
      /> */}
      </div>
    </div>
  );
};

export default InspiringBook;
