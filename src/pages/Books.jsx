import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IsLoginClicked } from "../contexts/LoginContext";
import CurrentBooksContainer from "../components/BooksPage/CurrentBooksContainer";
import Accordion from "../components/BooksPage/Accordion";
import { Link } from "react-router-dom";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
import BookPopUp from "../components/Modals/BookPopUp";
import Footer from "../components/Landing page/Footer";
import ScrollToTop from "react-scroll-to-top";
const Books = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [popUpState, setPopUpState] = useState(false);
  const { fictionalBook, selfHelpBook, currentBook, filteredBook } =
    useContext(BooksRenderContext);
  const [currBooks, setCurrBooks] = useState([]);

  // console.log(filteredBook.filteredBooks);
  const { filteredBooks, setFilteredBooks } = filteredBook;
  // console.log(currentBook.currentBooks);

  const { currentBooks, setCurrentBooks } =
    useContext(BooksRenderContext).currentBook;

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
      <div className=" flex h-auto mt-[5vh] w-[99vw] flex-col   px-[3vw] py-[7vh] gap-10">
        <div className="flex justify-between items-center ">
          <Accordion getCurrentBooks={getCurrentBooks} />
          <div to={""} className=" text-3xl capitalize  text-center   ">
            Showing {currentCategory ? currentCategory : "all "} books
          </div>
        </div>

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
      <ScrollToTop   className="flex items-center p-3 bg-neutral-400 justify-center" smooth />

      <Footer />
    </>
  );
};

export default Books;
