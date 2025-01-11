import React, { useContext, useEffect, useState } from "react";
import BorrowedBooksContainer from "../components/BorrowedBooksPage/BorrowedBooksContainer";
import axios from "axios";
import { BooksRenderContext } from "../contexts/BooksRenderContext";

const BorrowedBooks = () => {
  // const [userBorrowedBooks, setUserBorrowedBooks] = useState([]);

  // console.log(userBorrowedBooks);
  const { borrowedBooks, setBorrowedBooks } =
    useContext(BooksRenderContext).borrowedBook;

  return (
    <>
      <BorrowedBooksContainer userBorrowedBooks={borrowedBooks} />
    </>
  );
};

export default BorrowedBooks;
