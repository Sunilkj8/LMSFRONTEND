import React, { useContext } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import heart from "../../assets/heart.png";
import borrow from "../../assets/borrow.png";
import AniHeart from "../HeartComponent";
import Rating from "@mui/material/Rating";
import axios from "axios";

const CurrentBooksContainer = ({
  booksToRender,
  currentBooks,
  border,
  setPopUpState,
}) => {
  console.log(currentBooks);

  const { selectedBook, setSelectedBook } =
    useContext(BooksRenderContext).selectedBook;
  const { borrowedBooks, setBorrowedBooks } =
    useContext(BooksRenderContext).borrowedBook;

  // console.log(typeof(selectedBook));// It is an object

  return (
    <div className="h-auto w-full   justify-center gap-3    flex flex-wrap  ">
      {currentBooks.map((elem, idx) => {
        return (
          <div className="shadow-md rounded-sm hover:shadow-2xl hover:border-black cursor-pointer upliftDiv   overflow-hidden relative bg-[white] hover:border   border-black     h-[60vh] w-[22%] py-5 gap-2 flex flex-col">
            <div className="h-[50%] flex justify-center ">
              <img src={elem.book_image} className="h-full w-[9vw]" alt="" />
            </div>
            <div
              className={` duration-300 currUpliftDiv cursor-pointer absolute   top-[30vh] z-20 bg-[white] w-full     h-[30vh]  flex    flex-col justify-center  px-10 text-left`}
            >
              <div className="font-thin    tracking-widest text-[#F31A52]">
                Hardcover
              </div>
              <div className=" max-h-[50%] overflow-hidden tracking-wide">
                {elem.book_name}
              </div>
              <div className=" text-gray-500 tracking-wide">
                {elem.book_author}
              </div>
              <Rating
                onClick={async (e) => {
                  console.log(e.target);
                  await axios.post("http://localhost:3001/ratinginfo", {
                    rating: e.target.value,
                    book_name: elem.book_name,
                  });
                }}
                className="mt-3"
                name="size-medium"
                defaultValue={elem.star_ratings}
              />

              {/* <div>Rating Upcoming!</div> */}
            </div>
            <div className=" flex justify-between h-[auto] top-[52vh] absolute w-full">
              <AniHeart
                // bookName={elem.book_name}
                className=" hover:scale-[1.14] h-[9.5vh] flex justify-center duration-200 cursor-pointer items-center rounded-full  relative left-[10vw]  "
              />
              <img
                src={borrow}
                className=" hover:scale-[1.14] cursor-pointer duration-200 h-[7vh] relative left-[-10vw]  "
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentBooksContainer;
