import React, { useContext } from "react";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";

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
    <div className="h-auto w-full   justify-center gap-1    flex flex-wrap  ">
      {currentBooks.map((elem, idx) => {
        return(idx < booksToRender ?  
        <div
          onClick={() => {
            setSelectedBook(elem);
            setPopUpState(true);
            document.body.style.overflowY = "hidden";
          }}
          className={` ${
            border ? "border" : ""
          }  cursor-pointer    w-[15vw] flex items-center gap-10 p-3 h-[55vh] flex-col montserrat-font   card-hover-transition   relative   overflow-hidden `}
        >
          <div className="justify-center w-[80%] flex h-[60%]  rounded-lg items-center p-3">
            <img
              src={elem.book_image}
              className="w-[90%] h-[90%] rounded-sm"
              alt=""
            />
          </div>
          {/* <div className="text-red-500 font-extrabold  uppercase absolute bottom-[-1000px] ">Paperback</div> */}
          <div className="font-extrabold">{elem.book_name}</div>
          <div>{elem.book_author}</div>
        </div>:"")
      })}
    </div>
  );
};

export default CurrentBooksContainer;
