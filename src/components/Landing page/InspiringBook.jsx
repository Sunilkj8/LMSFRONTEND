import React, { useContext } from "react";
import atomicHabits from "../../assets/Atomic_habits.jpg";
import crackingTheCodingInterview from "../../assets/crackingTheCodingInterview.jpg";
import CurrentBooksContainer from "../BooksPage/CurrentBooksContainer";
import { BooksRenderContext } from "../../contexts/BooksRenderContext";
const InspiringBook = ({ setPopUpState, popUpState, booksToRender }) => {
  return (
    <div className="h-[200vh] mt-[10vh] p-10  mb-10 ">
      <span className="flex  p-10 text-4xl">Books</span>
      <CurrentBooksContainer
        booksToRender={booksToRender}
        translateX={16}
        setPopUpState={setPopUpState}
        popUpState={popUpState}
        border={true}
        currentBooks={
          useContext(BooksRenderContext).inspiringBook.inspiringBooks
        }
      />
    </div>
  );
};

export default InspiringBook;
