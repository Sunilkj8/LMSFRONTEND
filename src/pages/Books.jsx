import React, { useContext, useEffect, useState } from "react";
import CurrentBooksContainer from "../components/BooksPage/CurrentBooksContainer";
import Accordion from "../components/BooksPage/Accordion";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
import Footer from "../components/Landing page/Footer";
import ScrollToTop from "react-scroll-to-top";
const Books = () => {
  const {
    fictionalBook,
    selfHelpBook,
    programmingBook,
    currentBook,
    filteredBook,
    inspiringBook,
    autobiographyBook,
    sportsBook,
  } = useContext(BooksRenderContext);

  // console.log(filteredBook.filteredBooks);
  // console.log(currentBook.currentBooks);

  function getCurrentBooks(books) {
    console.log(books);

    if (books == "Fictional") {
      currentBook.setCurrentBooks(fictionalBook.fictionalBooks);
    } else if (books == "Self Help") {
      currentBook.setCurrentBooks(selfHelpBook.selfHelpBooks);
    } else if (books == "Programming") {
      currentBook.setCurrentBooks(programmingBook.programmingBooks);
    } else if (books == "All") {
      currentBook.setCurrentBooks(inspiringBook.inspiringBooks);
    } else if (books == "Autobiography") {
      currentBook.setCurrentBooks(autobiographyBook.autobiographyBooks);
    } else if (books == "Sports") {
      currentBook.setCurrentBooks(sportsBook.sportsBooks);
    }
  }

  return (
    <>
      <div className=" flex h-auto mt-[5vh] w-[99vw] flex-col   px-[3vw] py-[7vh] gap-10">
        <div className="flex justify-between items-center ">
          <Accordion getCurrentBooks={getCurrentBooks} />
        </div>

        <div className="h-auto w-full p-3">
          {/* <BookPopUp popUpState={popUpState} setPopUpState={setPopUpState} /> */}
          <CurrentBooksContainer
            booksToRender={24}
            border={true}
            currentBooks={currentBook.currentBooks}
          />
        </div>
      </div>
      <ScrollToTop
        className="flex items-center p-3 bg-neutral-400 justify-center"
        smooth
      />

      <Footer />
    </>
  );
};

export default Books;
