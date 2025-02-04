import React, { useContext } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
import borrow from "../../assets/borrow.png";
import AniHeart from "../HeartComponent";
import NestedModal from "../Modals/BookPopUp";

const BookDetails = () => {
  const { selectedBook, setSelectedBook } =
    useContext(BooksRenderContext).selectedBook;
  console.log(selectedBook);

  return (
    <>
      <div className="flex justify-center items-center h-[80vh] w-[99vw] mt-24">
        <div className=" bg-gray-200 text-black shadow-2xl rounded-3xl px-5 py-10 max-w-[90vw] w-full h-full   flex gap-14">
          <div className="flex justify-center items-center w-[25%]   rounded-xl p-10 bg-white  shadow-2xl h-[100%]">
            {" "}
            <img
              className="shadow-2xl rounded-sm"
              src={selectedBook.book_image}
              alt=""
            />
          </div>
          <div className="flex gap-10   p-10 w-[60%]   flex-col items-center">
            <div className="text-4xl capitalize font-bold">
              {selectedBook.book_name}
            </div>
            <div className="text-2xl text-gray-600 capitalize font-semibold">
              ~ {selectedBook.book_author}
            </div>
            <div className="text-xl text-center  capitalize font-semibold">
              {selectedBook.book_description}
            </div>
            <div className=" flex justify-center items-center h-[50%]   gap-10   ">
              <NestedModal selectedBook={selectedBook} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
