import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IsLoginClicked } from "../contexts/LoginContext";
import CurrentBooksContainer from "../components/BooksPage/CurrentBooksContainer";
import Accordion from "../components/BooksPage/Accordion";
import { Link } from "react-router-dom";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
import BookPopUp from "../components/Modals/BookPopUp";
const Books = () => {
  const [currentCategory, setCurrentCategory] = useState("Fictional");
  const [popUpState, setPopUpState] = useState(false);
  const { fictionalBook, selfHelpBook, currentBook } =
    useContext(BooksRenderContext);

  function getCurrentBooks(books) {
    console.log(books);

    if (books == "Fictional") {
      currentBook.setCurrentBooks(fictionalBook.fictionalBooks);
      setCurrentCategory("Fictional");
    } else if (books == "Self Help") {
      currentBook.setCurrentBooks(selfHelpBook.selfHelpBooks);
      setCurrentCategory("Self Help");
    }
  }

  return (
    <>
      {" "}
      {popUpState ? (
        <div className="fixed h-screen w-[99vw] popUpDivCover"></div>
      ) : (
        ""
      )}
      <div className="border-t-2 mt-[10vh] border-b-2 h-[10vh] flex items-center px-32">
        <Link to={"/"} className="hover:text-red-400 cursor-pointer">
          Home
        </Link>{" "}
        <span className="ml-2">
          {" "}
          {">"} {currentCategory}
        </span>
      </div>
      <div className=" flex h-auto mt-[5vh] w-[99vw]    px-[3vw] py-[7vh] gap-10">
        <Accordion getCurrentBooks={getCurrentBooks} />
        <div className="h-[200vh] w-[70%] p-3">
          <BookPopUp popUpState={popUpState} setPopUpState={setPopUpState} />
          <CurrentBooksContainer
           booksToRender={8}
            setPopUpState={setPopUpState}
            border={true}
            currentBooks={currentBook.currentBooks}
          />
        </div>
      </div>
    </>
  );
};

export default Books;
