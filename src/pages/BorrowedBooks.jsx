import React, { useContext, useEffect, useState } from "react";
import BorrowedBooksContainer from "../components/BorrowedBooksPage/BorrowedBooksContainer";
import axios from "axios";
import { BooksRenderContext } from "../contexts/BooksRenderContext";
import Footer from "../components/Landing page/Footer";

const BorrowedBooks = () => {
  // const [userBorrowedBooks, setUserBorrowedBooks] = useState([]);

  // console.log(userBorrowedBooks);
  const { borrowedBooks, setBorrowedBooks } =
    useContext(BooksRenderContext).borrowedBook;

  return (
    <>
      <BorrowedBooksContainer userBorrowedBooks={borrowedBooks} />
      <Footer/>
    </>
  );
};

export default BorrowedBooks;
