import React, { useContext, useEffect, useState } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import BorrowBookPopUp from "../BooksPage/fictionalBooksComponents/BorrowBookPopUp";

const BookPopUp = ({ popUpState, setPopUpState, translateX }) => {
  const { selectedBook, setSelectedBook } =
    useContext(BooksRenderContext).selectedBook;
  const { borrowedBooks, setBorrowedBooks } =
    useContext(BooksRenderContext).borrowedBook;
  const [borrowBookPopUp, setBorrowBookPopUp] = useState(false);
  // console.log(borrowedBooks);

  return (
    <>
      {borrowBookPopUp ? (
        <BorrowBookPopUp
          setPopUpState={setPopUpState}
          selectedBook={selectedBook}
          setBorrowBookPopUp={setBorrowBookPopUp}
        />
      ) : (
        ""
      )}

      <div
        className={`${
          translateX ? "translate-x-[18vw]" : ""
        }  fixed rounded-lg flex p-10 py-5   translate-y-[20vh] top-[0] bg-black z-[30]  h-[70vh] flex-col w-[60vw] text-white transition-all   duration-300 ease-in-out items-center  ${
          popUpState ? "scale-100" : "scale-0"
        }`}
      >
        <div className="w-full flex justify-end ">
          <span
            onClick={() => {
              setPopUpState(false);
              document.body.style.overflowY = "scroll";
              document.body.style.backgroundColor = "";
            }}
            className=" cursor-pointer text-4xl"
          >
            &#x2715;
          </span>
        </div>
        <div className="h-full w-full flex   p-5 items-center">
          <div className="h-[70%] w-1/2">
            <img
              src={selectedBook.book_image}
              className="h-full w-1/2"
              alt=""
            />
          </div>
          <div className=" py-10  gap-20 flex flex-col items-center text-center w-1/2 h-full">
            <div className="text-2xl font-semibold">
              {selectedBook.book_name}
            </div>
            <div className="flex-wrap">{selectedBook.book_description}</div>
            <div
              onClick={() => {
                setBorrowBookPopUp(true);
              }}
              className=" cursor-pointer  p-3 bg-white text-black"
            >
              Borrow Book
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPopUp;
