import React, { useContext, useEffect, useState } from "react";
import BorrowedBooksContainer from "../components/BorrowedBooksPage/BorrowedBooksContainer";
import axios from "axios";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
import Footer from "../components/Landing page/Footer";
import ScrollToTop from "react-scroll-to-top";

const BorrowedBooks = () => {
  // const [userBorrowedBooks, setUserBorrowedBooks] = useState([]);

  // console.log(userBorrowedBooks);
  const { borrowedBooks, setBorrowedBooks } =
    useContext(BooksRenderContext).borrowedBook;

  return (
    <>
      <BorrowedBooksContainer userBorrowedBooks={borrowedBooks} />
      <ScrollToTop   className="flex items-center p-3 bg-neutral-400 justify-center" smooth />

      <Footer/>
    </>
  );
};

export default BorrowedBooks;
