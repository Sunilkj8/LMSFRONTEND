import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IsLoginClicked } from "../contexts/LoginContext";
import CurrentBooksContainer from "../components/BooksPage/CurrentBooksContainer";
import Accordion from "../components/BooksPage/Accordion";
import { Link } from "react-router-dom";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
import BookPopUp from "../components/Modals/BookPopUp";
import Footer from "../components/Landing page/Footer";
const Books = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [popUpState, setPopUpState] = useState(false);
  const { fictionalBook, selfHelpBook, currentBook, filteredBook } =
    useContext(BooksRenderContext);
  const [currBooks, setCurrBooks] = useState([]);

  // console.log(filteredBook.filteredBooks);
  const { filteredBooks, setFilteredBooks } = filteredBook;
  // console.log(currentBook.currentBooks);

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
      <div className="  mt-[1vh]   h-[10vh] flex items-center px-32">
        <div to={""} className="hover:text-red-400 cursor-pointer"></div>{" "}
      </div>
      <div className=" flex h-auto mt-[2vh] w-[99vw] flex-col   px-[3vw] py-[7vh] gap-10">
        <Accordion
           getCurrentBooks={getCurrentBooks}
        />

        <div className="h-auto w-full p-3">
          {/* <BookPopUp popUpState={popUpState} setPopUpState={setPopUpState} /> */}
          <CurrentBooksContainer
            booksToRender={24}
            setPopUpState={setPopUpState}
            border={true}
            currentBooks={currentBook.currentBooks}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
