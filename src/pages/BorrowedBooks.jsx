import React, { useEffect, useState } from "react";
import BorrowedBooksContainer from "../components/BorrowedBooksPage/BorrowedBooksContainer";
import axios from "axios";

const BorrowedBooks = () => {
  const [userBorrowedBooks, setUserBorrowedBooks] = useState([]);
  async function getUserBorrowedBooks() {
    const user_id = localStorage.getItem("user_id");
    const res = await axios.post("http://localhost:3001/getborrowedbooks", {
      user_id: user_id,
    });

    // console.log(res.data);
    // gives an array of objects...
    setUserBorrowedBooks(res.data);
  }
  console.log(userBorrowedBooks);

  useEffect(() => {
    getUserBorrowedBooks();
  }, []);

  return (
    <>
      <BorrowedBooksContainer userBorrowedBooks={userBorrowedBooks} />
    </>
  );
};

export default BorrowedBooks;
